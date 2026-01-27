import React, { useState, useEffect } from 'react';
import { Table, Button, Tag, Modal, Descriptions, Typography, Space, message, Select, Spin } from 'antd';
import { EyeOutlined, DownloadOutlined, ReloadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import * as XLSX from 'xlsx';
import { TechniqueDataRenderer } from './TechniqueDataRenderer';
import {
  techniqueNameMap,
  exportLenMenSheet,
  exportSauCanxiSheet,
  exportNuoiGaSheet,
  exportTrunQueSheet,
  exportUPhanSheet,
  exportGocRaSheet,
  applyExcelStyling,
} from './ExcelExporters';

const { Title, Text } = Typography;
const { Option } = Select;

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

  // Fetch data from API with option to fetch all records
  const fetchData = async (page = 1, pageSize = 10, technique = 'all', fetchAll = false) => {
    setLoading(true);
    try {
      const access = localStorage.getItem('access');
      if (!access) {
        message.error('Vui lòng đăng nhập lại');
        return fetchAll ? [] : undefined;
      }

      // If fetchAll is true, use large page_size to get all data in one request
      const actualPageSize = fetchAll ? 999999 : pageSize;
      const actualPage = fetchAll ? 1 : page;

      let url = `https://isatsbangkhaosat.com:81/api/forms/submissions/?page=${actualPage}&page_size=${actualPageSize}`;
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
        
        // If fetchAll, return the data instead of setting state
        if (fetchAll) {
          return parsedResults;
        }
        
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
        return fetchAll ? [] : undefined;
      } else {
        message.error('Không thể tải dữ liệu');
        return fetchAll ? [] : undefined;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('Có lỗi khi tải dữ liệu');
      return fetchAll ? [] : undefined;
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

  // Export to Excel with modular technique exporters - Fetch ALL data
  const exportToExcel = async () => {
    try {
      message.loading('Đang tải tất cả dữ liệu...', 0);
      
      // Fetch all data using page_size=999999
      const allData = await fetchData(1, 10, filterTechnique, true);
      
      message.destroy();
      
      if (!allData || allData.length === 0) {
        message.warning('Không có dữ liệu để xuất');
        return;
      }

      message.loading(`Đang xuất ${allData.length} bản ghi...`, 0);

      const wb = XLSX.utils.book_new();

      // Sheet 1: Summary data
      const summaryData = allData.map((record, index) => ({
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
      
      // Apply beautiful styling to Summary sheet
      applyExcelStyling(ws1, summaryData);
      
      XLSX.utils.book_append_sheet(wb, ws1, 'Tổng hợp');

      // Sheet 2-7: Detailed data for each technique using modular exporters
      const techniqueGroups = {};
      allData.forEach((record) => {
        const techType = record.template_type;
        if (!techniqueGroups[techType]) {
          techniqueGroups[techType] = [];
        }
        techniqueGroups[techType].push(record);
      });

      // Map technique types to their exporter functions
      const exporterMap = {
        'len-men-phu-pham': exportLenMenSheet,
        'nuoi-sau-canxi': exportSauCanxiSheet,
        'nuoi-ga-dem-lot': exportNuoiGaSheet,
        'nuoi-trun-que': exportTrunQueSheet,
        'u-phan-huu-co-tai-ruong': exportUPhanSheet,
        'xu-ly-goc-ra-che-pham': exportGocRaSheet,
      };

      // Export each technique group using its specific exporter
      Object.keys(techniqueGroups).forEach((techType) => {
        const records = techniqueGroups[techType];
        const exporterFunc = exporterMap[techType];
        
        if (exporterFunc) {
          exporterFunc(wb, records, techType);
        } else {
          console.warn(`No exporter found for technique type: ${techType}`);
        }
      });

      message.destroy();
      XLSX.writeFile(wb, `Khao_sat_${dayjs().format('YYYY-MM-DD_HHmmss')}.xlsx`);
      message.success(`Xuất thành công ${allData.length} bản ghi`);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      message.destroy();
      message.error('Có lỗi khi xuất dữ liệu: ' + (error.message || 'Unknown error'));
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
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} bản ghi`,
            pageSizeOptions: ['10', '20', '50', '100', '500'],
          }}
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
