import React from 'react';
import { Table, Typography, Empty } from 'antd';

const { Title } = Typography;

// Default values for form fields that use disabled inputs
const PHAN_BON_TYPES = ['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân đạm', 'Phân kali', 'Phân khác'];

// Field labels for Xử lý gốc rạ technique
const FIELD_LABELS = {
  sectionA: {
    thangNamBatDauApDung: 'Tháng/năm bắt đầu áp dụng xử lý gốc rạ bằng chế phẩm sinh học',
    soVuXuLyGocRa: 'Số vụ xử lý gốc rạ bằng chế phẩm (số vụ/năm x số năm)',
    thangNamBatDauVuGanDay: 'Tháng/năm bắt đầu vụ gần đây',
    dienTichGocRaSauThuHoach: 'Diện tích ruộng có gốc rạ sau thu hoạch được xử lý bằng chế phẩm sinh học (sào/vụ)',
    chePhamSinhHocSuDung: 'Các loại chế phẩm sinh học được sử dụng',
    tienMuaChePham: 'Số tiền chi mua chế phẩm sinh học (đồng/sào)',
    tienNhanCongPhun: 'Số tiền chi nhân công phun chế phẩm sinh học (đồng/sào)',
    nangSuatLuaSauXuLy: 'Năng suất lúa của vụ sau khi xử lý gốc rạ bằng chế phẩm (kg/sào)',
  },
  sectionB: {
    // TRƯỚC KHI áp dụng kỹ thuật
    '16a': 'Tên cây trồng được xử lý gốc rạ bằng chế phẩm vi sinh',
    '16btruoc': 'Diện tích trồng (sào)',
    '16etruoc': 'Cây trồng có bị sâu bệnh không',
    '16ftruoc': 'Có sử dụng thuốc trừ sâu không',
    '16gtruoc': 'Số tiền mua thuốc trừ sâu (đồng)',
    '16htruoc': 'Có sử dụng thuốc diệt cỏ không',
    '16itruoc': 'Số tiền mua thuốc diệt cỏ (đồng)',
    '16jtruoc': 'Số tiền công lao động (đồng)',
    '16ktruoc': 'Số tiền mua hạt giống (đồng)',
    '16ltruoc': 'Sản lượng thu hoạch được (kg)',
    '16mtruoc': 'Giá bán (đồng/kg)',
    '16ntruoc': 'Thành tiền (đồng)',
    // SAU KHI áp dụng kỹ thuật
    '16bsau': 'Diện tích trồng (sào)',
    '16esau': 'Cây trồng có bị sâu bệnh không',
    '16fsau': 'Có sử dụng thuốc trừ sâu không',
    '16gsau': 'Số tiền mua thuốc trừ sâu (đồng)',
    '16hsau': 'Có sử dụng thuốc diệt cỏ không',
    '16isau': 'Số tiền mua thuốc diệt cỏ (đồng)',
    '16jsau': 'Số tiền công lao động (đồng)',
    '16ksau': 'Số tiền mua hạt giống (đồng)',
    '16lsau': 'Sản lượng thu hoạch được (kg)',
    '16msau': 'Giá bán (đồng/kg)',
    '16nsau': 'Thành tiền (đồng)',
  },
};

// Helper function to render array sections as table
const renderArraySection = (sectionKey, items, sectionTitle, fieldLabels = {}) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  // Get all unique keys from items
  const allKeys = [...new Set(items.flatMap(item => Object.keys(item)))];

  const columns = [
    {
      title: 'STT',
      key: 'index',
      width: 60,
      align: 'center',
      render: (_, __, index) => index + 1,
    },
    ...allKeys.map(key => ({
      title: fieldLabels[key] || key,
      dataIndex: key,
      key: key,
      render: (value) => {
        if (typeof value === 'object' && value !== null) {
          return JSON.stringify(value, null, 2);
        } else if (value === null || value === undefined || value === '') {
          return '-';
        }
        return String(value);
      },
    })),
  ];

  return (
    <div key={sectionKey} style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        {sectionTitle}
      </Title>
      <Table
        columns={columns}
        dataSource={items.map((item, idx) => ({ ...item, key: idx }))}
        pagination={false}
        bordered
        size="small"
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

// Helper function to render Section B with comparison table
const renderSectionBComparison = (items) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        B. Sử dụng phân xử lý gốc rạ, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng
      </Title>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: 32 }}>
          {/* Crop name header */}
          <div style={{ 
            padding: '8px 12px', 
            backgroundColor: '#f0f5ff', 
            borderLeft: '4px solid #1890ff',
            marginBottom: 16,
            fontWeight: 600,
            fontSize: '14px'
          }}>
            16a. Cây trồng: {item['16a'] || 'Chưa xác định'}
          </div>

          {/* Comparison table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '12px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Giai đoạn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16b. Diện tích trồng (sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    16c. Khối lượng từng loại phân bón
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    16d. Số tiền đã chi mua từng loại phân bón
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16e. Cây trồng có bị sâu bệnh không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16f. Có sử dụng thuốc trừ sâu không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16g. Số tiền mua thuốc trừ sâu (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16h. Có sử dụng thuốc diệt cỏ không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16i. Số tiền mua thuốc diệt cỏ (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16j. Số tiền công lao động (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16k. Số tiền mua hạt giống (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16l. Sản lượng thu hoạch (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16m. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    16n. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: KHÔNG ÁP DỤNG KỸ THUẬT */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff', textAlign: 'center' }}>
                    KHÔNG ÁP DỤNG<br/>KỸ THUẬT
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item['16btruoc'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{defaultName}</td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{item[`truocPhan_kg_${idx}`] || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{defaultName}</td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{item[`truocPhan_tien_${idx}`] || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16etruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16ftruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16gtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16htruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16itruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16jtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16ktruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16ltruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16mtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16ntruoc'] || '-'}</td>
                </tr>

                {/* Row 2: SAU KHI ÁP DỤNG KỸ THUẬT */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed', textAlign: 'center' }}>
                    SAU KHI ÁP DỤNG<br/>KỸ THUẬT
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item['16bsau'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{defaultName}</td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{item[`sauPhan_kg_${idx}`] || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{defaultName}</td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{item[`sauPhan_tien_${idx}`] || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16esau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16fsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16gsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16hsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16isau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16jsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16ksau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16lsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16msau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['16nsau'] || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export const GocRaRenderer = ({ data }) => {
  if (!data || typeof data !== 'object') {
    return <Empty description="Không có dữ liệu kỹ thuật Xử lý gốc rạ" />;
  }

  const sections = [];

  if (data.sectionA) {
    sections.push(
      renderArraySection(
        'sectionA', 
        data.sectionA, 
        'A. Quản lý phụ phẩm cây trồng và chất thải', 
        FIELD_LABELS.sectionA
      )
    );
  }

  if (data.sectionB) {
    sections.push(renderSectionBComparison(data.sectionB));
  }

  return sections.length > 0 ? <>{sections}</> : <Empty description="Không có dữ liệu kỹ thuật Xử lý gốc rạ" />;
};
