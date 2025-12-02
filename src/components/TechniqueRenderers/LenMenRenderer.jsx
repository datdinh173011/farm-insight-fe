import React from 'react';
import { Table, Typography, Empty } from 'antd';

const { Title } = Typography;

// Field labels for Lên men technique
const FIELD_LABELS = {
  sectionA: {
    tenPhuPhamCayTrong: 'Tên phụ phẩm cây trồng (sử dụng ủ lên men)',
    thangNamDau: 'Tháng/năm áp dụng kỹ thuật ủ lên men (lần đầu tiên)',
    dienTichTrong: 'Diện tích trồng trong 1 vụ',
    soLanMen: 'Tổng số lần (số vụ) đã tiến hành lên men',
    thangNamGanNhat: 'Tháng/năm bắt đầu vụ gần đây nhất',
    tenPhuPhamTanDung: 'Tên phụ phẩm cây trồng tận dụng để ủ lên men',
    dienTichDat: 'Diện tích đất được sử dụng để trồng cây lấy phụ phẩm ủ lên men (số sào/ vụ)',
    khoiLuongTrenDong: 'Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/ sào/ vụ x số sào)',
    khoiLuongThuGom: 'Tổng khối lượng phụ phẩm cây trồng thu gom được (kg/ sào/ vụ x số sào)',
    khoiLuongSuDungMen: 'Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ lên men (kg/ sào/ vụ x số sào)',
    khoiLuongThucAnMen: 'Khối lượng thức ăn ủ lên men thu được (kg)',
    mayBamCat: 'Sử dụng máy để băm/ cắt nhỏ phụ phẩm cây trồng (có/ không)',
    nhienLieu: 'Lượng nhiên liệu đã sử dụng cho 1 lần lên men (dầu diesel/ hoặc điện; kg/ hoặc giờ)',
    chiPhiKhac: 'Chi phí vật liệu/ đầu vào khác cho 1 lần lên men (ví dụ: thùng, túi ủ, chế phẩm,...)',
  },
  sectionB: {
    loaiCayTruoc: 'Loại cây trồng',
    dienTichTruoc: 'Diện tích đất trồng cây',
    loaiPhuPhamTruoc: 'Loại phụ phẩm cây trồng',
    khoiLuongPhuPhamTruoc: 'Khối lượng phụ phẩm',
    khoiLuongThuGomTruoc: 'Khối lượng thu gom',
  },
  sectionC: {
    tenVatNuoi: 'Tên vật nuôi',
    // TRƯỚC KHI (SAU trong form - màu xanh)
    soLuaSauMen: 'Số lứa',
    soNgayNuoiSauMen: 'Số ngày nuôi/lứa',
    soLuongVatNuoiSau: 'Số lượng vật nuôi (con/lứa)',
    tienThuocSauMen: 'Tiền thuốc thú y (đồng/lứa)',
    vatNuoiBiBenhSau: 'Vật nuôi bị bệnh',
    danhGiaSucKhoeSau: 'Đánh giá sức khỏe (1-10)',
    vatNuoiPhatTrienSau: 'Phát triển nhanh hơn',
    thoiGianNuoiSau: 'Thời gian nuôi (tháng)',
    trongLuongXuatSau: 'Trọng lượng xuất chuồng (kg/con)',
    giaBanSau: 'Giá bán (đồng/kg)',
    thanhTienSau: 'Thành tiền (đồng)',
    // SAU KHI (TRƯỚC trong form - màu xanh lá)
    soLuaTruocMen: 'Số lứa',
    soNgayNuoiTruocMen: 'Số ngày nuôi/lứa',
    soLuongVatNuoiTruoc: 'Số lượng vật nuôi (con/lứa)',
    tienThuocTruocMen: 'Tiền thuốc thú y (đồng/lứa)',
    vatNuoiBiBenhTruoc: 'Vật nuôi bị bệnh',
    danhGiaSucKhoeTruoc: 'Đánh giá sức khỏe (1-10)',
    vatNuoiPhatTrienTruoc: 'Phát triển nhanh hơn',
    thoiGianNuoiTruoc: 'Thời gian nuôi (tháng)',
    trongLuongXuatTruoc: 'Trọng lượng xuất chuồng (kg/con)',
    giaBanTruoc: 'Giá bán (đồng/kg)',
    thanhTienTruoc: 'Thành tiền (đồng)',
  },
};

// Default food types for TRƯỚC KHI (sauMen fields - before using fermented food)
const THUC_AN_SAU_MEN = [
  'Thức ăn ủ lên men',
  'Sâu canxi/trùn quế', 
  'Thức ăn tinh (ngô, gạo)',
  'Thức ăn tổng hợp/viên',
  'Thức ăn xanh'
];

// Default food types for SAU KHI (truocMen fields - after using fermented food)
const THUC_AN_TRUOC_MEN = [
  'Sâu canxi/trùn quế',
  'Thức ăn tinh (ngô, gạo)',
  'Thức ăn tổng hợp/viên',
  'Thức ăn xanh'
];

// Helper function to render Section C with comparison table (TRƯỚC vs SAU)
const renderSectionCComparison = (items) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        C. Sử dụng thức ăn ủ lên men làm thức ăn chăn nuôi, sức khoẻ vật nuôi, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng thức ăn ủ lên men
      </Title>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: 24 }}>
          {item.tenVatNuoi && (
            <div style={{ 
              padding: '8px 12px', 
              backgroundColor: '#f0f5ff', 
              borderLeft: '4px solid #1890ff',
              marginBottom: 16,
              fontWeight: 600,
              fontSize: '14px'
            }}>
              Vật nuôi {index + 1}: {item.tenVatNuoi}
            </div>
          )}
          
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
                    Thời điểm
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 200 }}>
                    5a. Tên vật nuôi
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    5b. Tổng số lứa & Số ngày nuôi/lứa
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    5c. Số lượng (con/lứa)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    6a. Khối lượng từng loại thức ăn (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    6b. Chi phí từng loại thức ăn (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    6c. Tiền thuốc (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    6d. Bị bệnh
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    6e. Sức khỏe (1-10)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    6f. Phát triển
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    6g. TG nuôi (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    6h. Trọng lượng (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    6i. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    6j. Thành tiền
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* TRƯỚC KHI SỬ DỤNG (dữ liệu từ fields có "Sau" - màu xanh lá) */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed', textAlign: 'center' }}>
                    TRƯỚC KHI SỬ DỤNG<br />THỨC ĂN Ủ LÊN MEN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }} rowSpan={2}>
                    {item.tenVatNuoi || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item.soLuaSauMen && <div>Lứa: {item.soLuaSauMen}</div>}
                    {item.soNgayNuoiSauMen && <div>Ngày: {item.soNgayNuoiSauMen}</div>}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item.soLuongVatNuoiSau || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_SAU_MEN.map((tenThucAn, idx) => {
                          const kg = item[`sauMen_kg_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {tenThucAn}
                              </td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {kg || '-'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_SAU_MEN.map((tenThucAn, idx) => {
                          const tien = item[`sauMen_tien_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {tenThucAn}
                              </td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {tien || '-'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.tienThuocSauMen || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.vatNuoiBiBenhSau || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.danhGiaSucKhoeSau || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.vatNuoiPhatTrienSau || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.thoiGianNuoiSau || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.trongLuongXuatSau || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.giaBanSau || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.thanhTienSau || '-'}</td>
                </tr>

                {/* SAU KHI SỬ DỤNG (dữ liệu từ fields có "Truoc" - màu xanh) */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff', textAlign: 'center' }}>
                    SAU KHI SỬ DỤNG<br />THỨC ĂN Ủ LÊN MEN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item.soLuaTruocMen && <div>Lứa: {item.soLuaTruocMen}</div>}
                    {item.soNgayNuoiTruocMen && <div>Ngày: {item.soNgayNuoiTruocMen}</div>}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item.soLuongVatNuoiTruoc || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_TRUOC_MEN.map((tenThucAn, idx) => {
                          const kg = item[`truocMen_kg_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {tenThucAn}
                              </td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {kg || '-'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_TRUOC_MEN.map((tenThucAn, idx) => {
                          const tien = item[`truocMen_tien_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {tenThucAn}
                              </td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                                {tien || '-'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.tienThuocTruocMen || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.vatNuoiBiBenhTruoc || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.danhGiaSucKhoeTruoc || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.vatNuoiPhatTrienTruoc || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.thoiGianNuoiTruoc || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.trongLuongXuatTruoc || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.giaBanTruoc || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item.thanhTienTruoc || '-'}</td>
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

export const LenMenRenderer = ({ data }) => {
  console.log('🍞 LenMenRenderer - Received data:', data);
  
  if (!data || typeof data !== 'object') {
    console.log('❌ LenMenRenderer - No data or invalid type');
    return <Empty description="Không có dữ liệu kỹ thuật Lên men" />;
  }

  const sections = [];
  const relevantKeys = ['sectionA', 'sectionB', 'sectionC'];

  console.log('🔍 LenMenRenderer - Checking data.sectionA:', data.sectionA);
  console.log('🔍 LenMenRenderer - Checking data.sectionB:', data.sectionB);
  console.log('🔍 LenMenRenderer - Checking data.sectionC:', data.sectionC);

  // Section A: SAU KHI áp dụng kỹ thuật
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

  // Section B: TRƯỚC KHI áp dụng kỹ thuật
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

  // Section C: Sử dụng thức ăn lên men
  if (data.sectionC) {
    sections.push(renderSectionCComparison(data.sectionC));
  }

  console.log('📊 LenMenRenderer - Total sections:', sections.length);
  console.log('📊 LenMenRenderer - Sections:', sections);

  return sections.length > 0 ? <>{sections}</> : <Empty description="Không có dữ liệu kỹ thuật Lên men" />;
};
