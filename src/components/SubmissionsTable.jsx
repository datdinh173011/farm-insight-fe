import React, { useState, useEffect } from 'react';
import { Table, Button, Tag, Modal, Descriptions, Typography, Space, message, Select, Spin } from 'antd';
import { EyeOutlined, DownloadOutlined, ReloadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import * as XLSX from 'xlsx';
import { TechniqueDataRenderer } from './TechniqueDataRenderer';

const { Title, Text } = Typography;
const { Option } = Select;

// Map technique slugs to readable names
const techniqueNameMap = {
  'len-men-phu-pham': 'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi',
  'nuoi-ga-dem-lot': 'Nuôi gà trên đệm lót sinh học',
  'nuoi-sau-canxi': 'Nuôi sâu canxi',
  'nuoi-trun-que': 'Nuôi trùn quế',
  'u-phan-huu-co-tai-ruong': 'Ủ phân hữu cơ tại ruộng',
  'xu-ly-goc-ra-che-pham': 'Xử lý gốc rạ bằng chế phẩm sinh học',
};

// Status color mapping
const statusColorMap = {
  'submitted': 'green',
  'pending': 'orange',
  'draft': 'blue',
  'rejected': 'red',
};

export default function SubmissionsTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterTechnique, setFilterTechnique] = useState('all');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // Fetch data from API
  const fetchData = async (page = 1, pageSize = 10, technique = 'all') => {
    setLoading(true);
    try {
      const access = localStorage.getItem('access');
      if (!access) {
        message.error('Vui lòng đăng nhập lại');
        return;
      }

      let url = `https://isatsbangkhaosat.com:81/api/forms/submissions/?page=${page}&page_size=${pageSize}`;
      if (technique !== 'all') {
        url += `&template_type=${technique}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        
        // Parse data field if it's a string
        const parsedResults = (result.results || []).map(record => {
          if (typeof record.data === 'string') {
            try {
              return { ...record, data: JSON.parse(record.data) };
            } catch (e) {
              console.error('Error parsing data for record:', record.id, e);
              return record;
            }
          }
          return record;
        });
        
        setData(parsedResults);
        setPagination({
          current: page,
          pageSize: pageSize,
          total: result.count || 0,
        });
      } else if (response.status === 401) {
        message.error('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại');
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/login';
      } else {
        message.error('Không thể tải dữ liệu');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('Có lỗi khi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pagination.current, pagination.pageSize, filterTechnique);
  }, [filterTechnique]);

  // Handle table pagination change
  const handleTableChange = (newPagination) => {
    fetchData(newPagination.current, newPagination.pageSize, filterTechnique);
  };

  // View detail modal
  const showDetail = (record) => {
    setSelectedRecord(record);
    setModalVisible(true);
  };

  // Field label mapping for common questions
  const fieldLabelMap = {
    // Common questions (câu 40-70)
    'cau40': 'Câu 40: Có khó khăn khi áp dụng kỹ thuật',
    'cau41': 'Câu 41: Mô tả khó khăn',
    'cau42': 'Câu 42: Nhận hỗ trợ khi áp dụng',
    'cau43': 'Câu 43: Mô tả hỗ trợ',
    'cau44': 'Câu 44: Hỗ trợ của ai',
    'cau45': 'Câu 45: Tập huấn đầy đủ',
    'cau46': 'Câu 46: Nhận kit hỗ trợ',
    'cau47': 'Câu 47: Kit hỗ trợ đầy đủ',
    'cau48': 'Câu 48: Nội dung kit thiếu',
    'cau49': 'Câu 49: Tự mua vật tư',
    'cau50': 'Câu 50: Số tiền tự chi',
    'cau51': 'Câu 51: Đánh giá chất lượng kit',
    'cau52': 'Câu 52: Vấn đề chất lượng kit',
    'cau53': 'Câu 53: Giải quyết vấn đề',
    'cau54': 'Câu 54: Mức độ hài lòng',
    'cau55_loiIch1': 'Câu 55.1: Lợi ích kinh tế',
    'cau55_loiIch2': 'Câu 55.2: Lợi ích môi trường',
    'cau56': 'Câu 56: Chi tiết lợi ích',
    'cau57': 'Câu 57: Tiếp tục áp dụng',
    'cau58': 'Câu 58: Lý do không tiếp tục',
    'cau59': 'Câu 59: Giới thiệu cho người khác',
    'cau60': 'Câu 60: Lý do không giới thiệu',
    'cau61': 'Câu 61: Mở rộng quy mô',
    'cau62': 'Câu 62: Lý do không mở rộng',
    'cau63': 'Câu 63: Nhu cầu hỗ trợ thêm',
    'cau64': 'Câu 64: Chi tiết hỗ trợ mong muốn',
    'cau65': 'Câu 65: Đào tạo thêm cần thiết',
    'cau66': 'Câu 66: Nội dung đào tạo',
    'cau67': 'Câu 67: Đề xuất cải tiến',
    'cau68': 'Câu 68: Kết nối thị trường',
    'cau69': 'Câu 69: Nhận xét khác',
    'cau70': 'Câu 70: Đánh giá tổng thể',
  };

  // Section name mapping
  const sectionNameMap = {
    'sectionA': 'Section A',
    'sectionB': 'Section B',
    'sectionC': 'Section C',
    'sectionD': 'Section D',
  };

  // Helper function to create readable label from field key
  const createFieldLabel = (key) => {
    // Check if it's a common question
    if (fieldLabelMap[key]) {
      return fieldLabelMap[key];
    }

    // Parse section array notation: sectionA[0].fieldName
    const sectionMatch = key.match(/^(section[ABCD])\[(\d+)\]\.(.+)$/);
    if (sectionMatch) {
      const [, section, index, fieldName] = sectionMatch;
      const sectionLabel = sectionNameMap[section] || section;
      const partNumber = parseInt(index) + 1;
      
      // Clean up field name
      const cleanFieldName = fieldName
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return `${sectionLabel} - Phần ${partNumber} - ${cleanFieldName}`;
    }

    // Parse nested field: field.subfield
    const dotMatch = key.match(/^([^.]+)\.(.+)$/);
    if (dotMatch) {
      const [, parent, child] = dotMatch;
      const cleanParent = parent.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
      const cleanChild = child.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
      return `${cleanParent} - ${cleanChild}`;
    }

    // Default: clean up underscores and camelCase
    return key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to flatten data into single row with human-readable labels
  const flattenDataForExcel = (data) => {
    const flatData = {};
    
    // Helper to flatten nested objects with dot notation
    const flattenObject = (obj, prefix = '') => {
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        
        if (Array.isArray(value)) {
          // For arrays (sections), create indexed columns
          value.forEach((item, index) => {
            if (typeof item === 'object' && item !== null) {
              Object.keys(item).forEach(subKey => {
                const arrayKey = `${newKey}[${index}].${subKey}`;
                const subValue = item[subKey];
                
                // Create human-readable label
                const label = createFieldLabel(arrayKey);
                
                if (typeof subValue === 'object' && subValue !== null && !Array.isArray(subValue)) {
                  // Nested object within array item
                  Object.keys(subValue).forEach(subSubKey => {
                    const nestedLabel = createFieldLabel(`${arrayKey}.${subSubKey}`);
                    flatData[nestedLabel] = subValue[subSubKey] || '';
                  });
                } else if (Array.isArray(subValue)) {
                  flatData[label] = JSON.stringify(subValue);
                } else {
                  flatData[label] = subValue || '';
                }
              });
            } else {
              const label = createFieldLabel(`${newKey}[${index}]`);
              flatData[label] = value[index] || '';
            }
          });
        } else if (typeof value === 'object' && value !== null) {
          // Nested object - flatten recursively
          flattenObject(value, newKey);
        } else {
          const label = createFieldLabel(newKey);
          flatData[label] = value || '';
        }
      });
    };

    flattenObject(data);
    return flatData;
  };

  // Export to Excel with single row per record and nested table structure
  const exportToExcel = () => {
    if (data.length === 0) {
      message.warning('Không có dữ liệu để xuất');
      return;
    }

    try {
      const wb = XLSX.utils.book_new();

      // Sheet 1: Summary data
      const summaryData = data.map((record, index) => ({
        'STT': index + 1,
        'Họ tên': record.ho_ten || '',
        'Năm sinh': record.nam_sinh || '',
        'Số điện thoại': record.so_dien_thoai || '',
        'Thôn': record.thon || '',
        'Xã': record.xa || '',
        'Tỉnh': record.tinh || '',
        'Kỹ thuật': techniqueNameMap[record.template_type] || record.template_type || '',
        'Trạng thái': record.status || '',
        'Ngày gửi': record.submitted_at ? dayjs(record.submitted_at).format('DD/MM/YYYY HH:mm') : '',
      }));

      const ws1 = XLSX.utils.json_to_sheet(summaryData);
      ws1['!cols'] = [
        { wch: 5 },  // STT
        { wch: 25 }, // Họ tên
        { wch: 12 }, // Năm sinh
        { wch: 15 }, // SĐT
        { wch: 15 }, // Thôn
        { wch: 15 }, // Xã
        { wch: 15 }, // Tỉnh
        { wch: 40 }, // Kỹ thuật
        { wch: 12 }, // Trạng thái
        { wch: 18 }, // Ngày gửi
      ];
      XLSX.utils.book_append_sheet(wb, ws1, 'Tổng hợp');

      // Sheet 2-7: Detailed data for each technique - ONE ROW PER RECORD
      const techniqueGroups = {};
      data.forEach((record) => {
        const techType = record.template_type;
        if (!techniqueGroups[techType]) {
          techniqueGroups[techType] = [];
        }
        techniqueGroups[techType].push(record);
      });

      Object.keys(techniqueGroups).forEach((techType) => {
        const records = techniqueGroups[techType];
        const sheetName = techniqueNameMap[techType] || techType;
        const sheetData = [];

        records.forEach((record, idx) => {
          // Create single row for this record
          const rowData = {
            'STT': idx + 1,
            'Họ tên': record.ho_ten || '',
            'Năm sinh': record.nam_sinh || '',
            'SĐT': record.so_dien_thoai || '',
            'Thôn': record.thon || '',
            'Xã': record.xa || '',
            'Tỉnh': record.tinh || '',
            'Ngày gửi': record.submitted_at ? dayjs(record.submitted_at).format('DD/MM/YYYY HH:mm') : '',
          };

          // Flatten nested data structure into single row
          if (record.data && typeof record.data === 'object') {
            const flatData = flattenDataForExcel(record.data);
            Object.assign(rowData, flatData);
          }

          sheetData.push(rowData);
        });

        const ws = XLSX.utils.json_to_sheet(sheetData);
        
        // Auto-size columns based on content
        const colWidths = [];
        if (sheetData.length > 0) {
          const headers = Object.keys(sheetData[0]);
          headers.forEach((header) => {
            const maxLen = Math.max(
              header.length,
              ...sheetData.map(row => String(row[header] || '').length)
            );
            colWidths.push({ wch: Math.min(maxLen + 2, 60) });
          });
          ws['!cols'] = colWidths;
        }

        // Truncate sheet name to max 31 characters (Excel limit)
        const truncatedName = sheetName.length > 31 ? sheetName.substring(0, 28) + '...' : sheetName;
        XLSX.utils.book_append_sheet(wb, ws, truncatedName);
      });

      XLSX.writeFile(wb, `Khao_sat_${dayjs().format('YYYY-MM-DD_HHmmss')}.xlsx`);
      message.success('Xuất dữ liệu thành công');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      message.error('Có lỗi khi xuất dữ liệu');
    }
  };

  // Table columns
  const columns = [
    {
      title: 'STT',
      key: 'index',
      width: 60,
      align: 'center',
      render: (_, __, index) => (pagination.current - 1) * pagination.pageSize + index + 1,
    },
    {
      title: 'Họ tên',
      dataIndex: 'ho_ten',
      key: 'ho_ten',
      width: 180,
      ellipsis: true,
    },
    {
      title: 'Năm sinh',
      dataIndex: 'nam_sinh',
      key: 'nam_sinh',
      width: 120,
      align: 'center',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'so_dien_thoai',
      key: 'so_dien_thoai',
      width: 140,
    },
    {
      title: 'Địa chỉ',
      key: 'address',
      width: 250,
      ellipsis: true,
      render: (_, record) => `${record.thon || ''}, ${record.xa || ''}, ${record.tinh || ''}`,
    },
    {
      title: 'Kỹ thuật',
      dataIndex: 'template_type',
      key: 'template_type',
      width: 200,
      ellipsis: true,
      render: (type) => techniqueNameMap[type] || type,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      align: 'center',
      render: (status) => (
        <Tag color={statusColorMap[status] || 'default'}>
          {status === 'submitted' ? 'Đã gửi' : status === 'pending' ? 'Chờ xử lý' : status === 'draft' ? 'Nháp' : status}
        </Tag>
      ),
    },
    {
      title: 'Ngày gửi',
      dataIndex: 'submitted_at',
      key: 'submitted_at',
      width: 160,
      align: 'center',
      render: (date) => date ? dayjs(date).format('DD/MM/YYYY HH:mm') : '-',
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 100,
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          onClick={() => showDetail(record)}
        >
          Xem
        </Button>
      ),
    },
  ];

  // Render technique data in detail modal
  const renderTechniqueData = (data, techniqueType) => {
    return <TechniqueDataRenderer data={data} techniqueType={techniqueType} />;
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ 
        background: '#fff', 
        borderRadius: 8, 
        padding: 24,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            📊 Quản lý phiếu khảo sát
          </Title>
          <Space size="middle">
            <Select
              style={{ width: 300 }}
              placeholder="Lọc theo kỹ thuật"
              value={filterTechnique}
              onChange={(value) => setFilterTechnique(value)}
            >
              <Option value="all">🔍 Tất cả kỹ thuật</Option>
              {Object.entries(techniqueNameMap).map(([key, name]) => (
                <Option key={key} value={key}>{name}</Option>
              ))}
            </Select>
            <Button 
              icon={<ReloadOutlined />} 
              onClick={() => fetchData(pagination.current, pagination.pageSize, filterTechnique)}
            >
              Tải lại
            </Button>
            <Button 
              type="primary" 
              icon={<DownloadOutlined />} 
              onClick={exportToExcel}
              style={{ background: '#52c41a', borderColor: '#52c41a' }}
            >
              Xuất Excel
            </Button>
          </Space>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          scroll={{ x: 1400 }}
          size="middle"
          bordered
        />
      </div>

      <Modal
        title={
          <div style={{ fontSize: 18, fontWeight: 600, color: '#1890ff' }}>
            Chi tiết phiếu khảo sát
          </div>
        }
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        width={1200}
        style={{ top: 20 }}
        bodyStyle={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}
        footer={[
          <Button key="close" type="primary" onClick={() => setModalVisible(false)}>
            Đóng
          </Button>
        ]}
      >
        {selectedRecord && (
          <div>
            <Title level={4} style={{ color: '#52c41a', marginTop: 0 }}>Thông tin chung</Title>
            <Descriptions column={2} bordered size="small" style={{ marginBottom: 32 }}>
              <Descriptions.Item label="Họ tên" labelStyle={{ fontWeight: 600 }}>
                {selectedRecord.ho_ten || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Năm sinh" labelStyle={{ fontWeight: 600 }}>
                {selectedRecord.nam_sinh || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại" labelStyle={{ fontWeight: 600 }}>
                {selectedRecord.so_dien_thoai || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Thôn" labelStyle={{ fontWeight: 600 }}>
                {selectedRecord.thon || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Xã" labelStyle={{ fontWeight: 600 }}>
                {selectedRecord.xa || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Tỉnh" labelStyle={{ fontWeight: 600 }}>
                {selectedRecord.tinh || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Kỹ thuật" labelStyle={{ fontWeight: 600 }}>
                <Tag color="blue" style={{ fontSize: 13 }}>
                  {techniqueNameMap[selectedRecord.template_type] || selectedRecord.template_type || '-'}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Trạng thái" labelStyle={{ fontWeight: 600 }}>
                <Tag color={statusColorMap[selectedRecord.status] || 'default'}>
                  {selectedRecord.status === 'submitted' ? 'Đã gửi' : selectedRecord.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Ngày gửi" span={2} labelStyle={{ fontWeight: 600 }}>
                {selectedRecord.submitted_at ? dayjs(selectedRecord.submitted_at).format('DD/MM/YYYY HH:mm:ss') : '-'}
              </Descriptions.Item>
            </Descriptions>

            <Title level={4} style={{ color: '#1890ff', marginBottom: 16 }}>Dữ liệu kỹ thuật</Title>
            {renderTechniqueData(selectedRecord.data, selectedRecord.template_type)}
          </div>
        )}
      </Modal>
    </div>
  );
}
