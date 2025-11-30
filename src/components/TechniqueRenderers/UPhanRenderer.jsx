import React from 'react';
import { Table, Typography, Empty } from 'antd';

const { Title } = Typography;

// Field labels for Ủ phân technique
const FIELD_LABELS = {
  sectionA: {
    tenPhuPham: 'Tên phụ phẩm cây trồng (tận dụng ủ phân từ trước đến nay)',
    thangNamBatDau: 'Tháng/năm bắt đầu tiến hành ủ phân',
    tenPhuPhamTanDung: 'Tên phụ phẩm cây trồng tận dụng để ủ phân',
    khoiLuongPhuPhamTrenRuong: 'Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)',
    khoiLuongPhuPhamThuGom: 'Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)',
    tongKhoiLuongPhuPhamSuDung: 'Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ phân (kg/sào x số sào)',
    khoiLuongPhanHuuCoThuDuoc: 'Khối lượng phân hữu cơ thu được sau khi ủ (kg/sào x số sào)',
    nhungLoaiCayDuocBonPhan: 'Những loại cây trồng được bón phân ủ hữu cơ (1 ô ghi 1 loại cây trồng)',
    tongSoMuaVuBonPhan: 'Tổng số mùa vụ đã được bón phân ủ hữu cơ (theo từng loại cây trồng)',
    dienTichCayDuocBonPhan: 'Diện tích cây trồng được bón phân ủ hữu cơ (số sào/vụ)',
    suDungMayCatNho: 'Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng',
    nhienLieuSuDung: 'Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)',
    chiPhiVatLieuKhac: 'Chi phí vật liệu/đầu vào khác (nhân công, ống thông khí, bạt, chế phẩm, rỉ mật…) (đồng)',
  },
  sectionB: {
    loaiCayTrongTruoc: 'Loại cây trồng',
    coTrongTruoc: 'Có trồng không?',
    dienTichDatTruoc: 'Diện tích đất trồng cây (sào/vụ x số vụ/năm)',
    tenPhuPhamTruoc: 'Tên phụ phẩm cây trồng (ghi tên từng loại)',
    khoiLuongPhuPhamTruoc: 'Khối lượng phụ phẩm cây trồng (kg/sào/vụ x số sào)',
    khoiLuongPhuPhamThuGomTruoc: 'Khối lượng phụ phẩm cây trồng được thu gom (kg/sào/vụ x số sào)',
  },
  sectionC: {
    '20a': 'Tên cây trồng được bón phân ủ hữu cơ',
    '20ctruoc': '11b. Diện tích (sào/vụ) (KHÔNG BÓN)',
    '20csau': '11b. Diện tích (sào/vụ) (SAU KHI BÓN)',
    '20ftruoc': '11e. Cây trồng có bị sâu bệnh không (KHÔNG BÓN)',
    '20gtruoc': '11f. Có sử dụng thuốc trừ sâu không (KHÔNG BÓN)',
    '20htruoc': '11g. Số tiền mua thuốc trừ sâu (đồng/sào) (KHÔNG BÓN)',
    '20itruoc': '11h. Số tiền mua thuốc diệt cỏ (đồng/sào) (KHÔNG BÓN)',
    '20jtruoc': '11i. Số tiền công lao động (đồng) (KHÔNG BÓN)',
    '20ktruoc': '11j. Số tiền mua hạt giống (đồng/sào) (KHÔNG BÓN)',
    '20ltruoc': '11k. Năng suất thu hoạch được (kg/sào) (KHÔNG BÓN)',
    '20mtruoc': '11l. Giá bán (đồng/kg) (KHÔNG BÓN)',
    '20ntruoc': '11m. Thành tiền (đồng) (KHÔNG BÓN)',
    '20fsau': '11e. Cây trồng có bị sâu bệnh không (SAU KHI BÓN)',
    '20gsau': '11f. Có sử dụng thuốc trừ sâu không (SAU KHI BÓN)',
    '20hsau': '11g. Số tiền mua thuốc trừ sâu (đồng/sào) (SAU KHI BÓN)',
    '20isau': '11h. Số tiền mua thuốc diệt cỏ (đồng/sào) (SAU KHI BÓN)',
    '20jsau': '11i. Số tiền công lao động (đồng) (SAU KHI BÓN)',
    '20ksau': '11j. Số tiền mua hạt giống (đồng/sào) (SAU KHI BÓN)',
    '20lsau': '11k. Năng suất thu hoạch được (kg/sào) (SAU KHI BÓN)',
    '20msau': '11l. Giá bán (đồng/kg) (SAU KHI BÓN)',
    '20nsau': '11m. Thành tiền (đồng) (SAU KHI BÓN)',
  },
};

// Helper function to render Section C comparison table
const renderSectionCComparison = (items, sectionTitle) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        {sectionTitle}
      </Title>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 24 }}>
          {/* Comparison table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Giai đoạn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 200 }}>
                    11a. Tên cây trồng được bón phân ủ hữu cơ
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11b. Diện tích (sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    11c. Số lượng từng loại phân bón (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    11d. Số tiền đã chi cho mua từng loại phân bón (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11e. Cây trồng có bị sâu bệnh không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11f. Có sử dụng thuốc trừ sâu không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11g. Số tiền mua thuốc trừ sâu (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11h. Số tiền mua thuốc diệt cỏ (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11i. Số tiền công lao động (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11j. Số tiền mua hạt giống (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11k. Năng suất thu hoạch được (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11l. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11m. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: KHÔNG BÓN PHÂN Ủ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG BÓN<br/>PHÂN Ủ
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }} rowSpan={2}>
                    {item['20a'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['20ctruoc'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2].map(idx => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`truocPhan_tenPhan_${idx}`] || '-'}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`truocPhan_kg_${idx}`] || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2].map(idx => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`truocPhan_tenPhanTien_${idx}`] || '-'}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`truocPhan_tien_${idx}`] || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20ftruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20gtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20htruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20itruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20jtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20ktruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20ltruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20mtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20ntruoc'] || '-'}</td>
                </tr>
                {/* Row 2: SAU KHI BÓN PHÂN Ủ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI BÓN<br/>PHÂN Ủ
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['20csau'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2, 3].map(idx => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`sauPhan_tenPhan_${idx}`] || '-'}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`sauPhan_kg_${idx}`] || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2, 3].map(idx => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`sauPhan_tenPhanTien_${idx}`] || '-'}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`sauPhan_tien_${idx}`] || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20fsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20gsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20hsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20isau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20jsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20ksau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20lsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20msau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20nsau'] || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
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

export const UPhanRenderer = ({ data }) => {
  if (!data || typeof data !== 'object') {
    return <Empty description="Không có dữ liệu kỹ thuật Ủ phân" />;
  }

  const sections = [];

  if (data.sectionA) {
    sections.push(
      renderArraySection(
        'sectionA', 
        data.sectionA, 
        'A. Quản lý phụ phẩm SAU KHI áp dụng kỹ thuật', 
        FIELD_LABELS.sectionA
      )
    );
  }

  if (data.sectionB) {
    sections.push(
      renderArraySection(
        'sectionB', 
        data.sectionB, 
        'B. Quản lý phụ phẩm TRƯỚC KHI áp dụng kỹ thuật', 
        FIELD_LABELS.sectionB
      )
    );
  }

  if (data.sectionC) {
    sections.push(
      renderSectionCComparison(
        data.sectionC, 
        'C. Sử dụng phân ủ làm phân bón'
      )
    );
  }

  return sections.length > 0 ? <>{sections}</> : <Empty description="Không có dữ liệu kỹ thuật Ủ phân" />;
};
