import React from 'react';
import { Table, Typography, Empty } from 'antd';

const { Title } = Typography;

// Default values for fertilizer types (phanU section)
const PHAN_BON_TYPES = [
  'Phân ủ/ phân đệm lót/ phân trùn quế/ phân sâu canxi',
  'Phân NPK bón lót',
  'Phân NPK bón thúc',
  'Phân khác (ghi rõ)'
];

// Default values for food types (danGa section)
const THUC_AN_GA_TYPES = [
  'Sâu canxi/trùn quế',
  'Thức ăn tinh (ngô, gạo)',
  'Thức ăn tổng hợp/viên',
  'Thức ăn xanh'
];

// Field labels for Nuôi gà technique
const FIELD_LABELS = {
  sectionA: {
    tenPhuPhamTruoc: 'Tên phụ phẩm cây trồng (tận dụng làm đệm lót sinh học dày TỪ TRƯỚC ĐẾN NAY)',
    thangNamBatDau: 'Tháng/năm bắt đầu áp dụng kỹ thuật',
    tongSoMuaVu: 'Tổng số mùa vụ đã tận dụng phụ phẩm để làm đệm lót sinh học dày TỪ TRƯỚC ĐẾN NAY (vụ)',
    tenCayBonPhan: 'Tên những loại cây trồng được bón phân ủ thu được từ lớp đệm lót',
    dienTichCayBonPhan: 'Diện tích cây trồng được bón phân ủ thu được từ lớp đệm lót trong 1 vụ (sào/vụ)',
    tongSoMuaVuBonPhan: 'Tổng số mùa vụ đã được bón phân ủ thu được từ lớp đệm lót',
    tenPhuPhamDuocTao: 'Tên phụ phẩm cây trồng được tận dụng làm đệm lót sinh học dày',
    dienTichTaoPhuPham: 'Diện tích cây trồng tạo ra loại phụ phẩm được tận dụng làm đệm lót sinh học dày (sào)',
    khoiLuongTrenDong: 'Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)',
    khoiLuongThuGom: 'Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)',
    tongKhoiLuongLamDemLot: 'Tổng khối lượng phụ phẩm cây trồng được tận dụng để làm đệm lót (kg)',
    tongKhoiLuongPhanU: 'Tổng khối lượng phân ủ thu được từ lớp đệm lót (kg)',
    mayBamCat: 'Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng',
    nhienLieu: 'Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)',
    chiPhiKhac: 'Chi phí vật liệu/đầu vào khác (ví dụ: nhân công, chế phẩm, …) (đồng)',
  },
  sectionB: {
    loaiCayTruoc: 'Loại cây trồng, TRƯỚC KHI áp dụng kỹ thuật',
    dienTichTruoc: 'Diện tích đất trồng cây, TRƯỚC KHI áp dụng kỹ thuật (sào/vụ x số vụ/năm)',
    loaiPhuPhamTruoc: 'Có những loại phụ phẩm cây trồng nào, TRƯỚC KHI áp dụng kỹ thuật',
    khoiLuongPhuPhamTruoc: 'Có bao nhiêu kg phụ phẩm cây trồng tại ruộng/vườn TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)',
    khoiLuongThuGomTruoc: 'Có bao nhiêu kg phụ phẩm cây trồng được thu gom TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)',
  },
  phanU: {
    'tenCayTrong': 'Tên cây trồng',
    // KHÔNG BÓN PHÂN Ủ

    '32bkhong': 'Diện tích (sào)',
    '32ekhong': 'Số lần phun thuốc trừ sâu hóa học',
    '32fkhong': 'Số lượng thuốc sâu hóa học được sử dụng (bình)',
    '32gkhong': 'Số lượng thuốc cỏ được sử dụng (bình)',
    '32hkhong': 'Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào)',
    '32ikhong': 'Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào)',
    '32jkhong': 'Số tiền công lao động (đồng)',
    '32kkhong': 'Số tiền mua hạt giống (đồng/sào)',
    '32lkhong': 'Cây trồng có bị sâu bệnh tấn công không?',
    '32mtruoc': 'Năng suất thu hoạch (kg/sào)',
    '32ntruoc': 'Giá bán (đồng/kg)',
    '32otruoc': 'Thành tiền (đồng)',
    // SAU KHI BÓN PHÂN Ủ
    dienTichSauPhanU2: 'Diện tích (sào)',
    '32esau': 'Số lần phun thuốc trừ sâu hóa học',
    '32fsau': 'Số lượng thuốc sâu hóa học được sử dụng (bình)',
    '32gsau': 'Số lượng thuốc cỏ được sử dụng (bình)',
    '32hsao': 'Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào)',
    '32isau': 'Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào)',
    '32jsau': 'Số tiền công lao động (đồng)',
    '32ksau': 'Số tiền mua hạt giống (đồng/sào)',
    '32lsau': 'Cây trồng có bị sâu bệnh tấn công không?',
    '32msau': 'Năng suất thu hoạch (kg/sào)',
    '32nsau': 'Giá bán (đồng/kg)',
    '32osau': 'Thành tiền (đồng)',
  },
  danGa: {
    // TRƯỚC KHI đệm lót (SAU trong form - màu xanh lá)
    soLuongGaSauDemLot: 'Số lượng gà trong đợt nuôi (con)',
    tienThuoc: 'Số tiền đã chi cho mua thuốc thú y (đồng)',
    gioDonDep: 'Số giờ dành cho việc dọn dẹp chuồng gà trong 1 tuần',
    gaBiBenh: 'Đàn gà có mắc bệnh gì không',
    danhGiaSucKhoe: 'Đánh giá sức khỏe đàn gà (1-10)',
    soNgayDatTrongLuong: 'Số ngày để đạt được trọng lượng mong muốn',
    trongLuongXuatChuong: 'Trọng lượng trung bình khi xuất chuồng (kg/con)',
    tongThoiGianNuoi: 'Tổng thời gian nuôi đến khi xuất chuồng (tháng)',
    gaPhatTrienNhanhHon: 'Đàn gà có phát triển nhanh hơn và/hoặc lớn hơn',
    giaBan: 'Giá bán (đồng/kg)',
    tongThuNhap: 'Tổng thu nhập',
    danhGiaMui: 'Đánh giá mùi từ chuồng gà (0-10)',
    // SAU KHI đệm lót (TRƯỚC trong form - màu xanh dương)
    soLuongGaTruocDemLot: 'Số lượng gà trong đợt nuôi (con)',
    tienThuoc2: 'Số tiền đã chi cho mua thuốc thú y (đồng)',
    gioDonDep2: 'Số giờ dành cho việc dọn dẹp chuồng gà trong 1 tuần',
    gaBiBenh2: 'Đàn gà có mắc bệnh gì không',
    danhGiaSucKhoe2: 'Đánh giá sức khỏe đàn gà (1-10)',
    soNgayDatTrongLuong2: 'Số ngày để đạt được trọng lượng mong muốn',
    trongLuongXuatChuong2: 'Trọng lượng trung bình khi xuất chuồng (kg/con)',
    tongThoiGianNuoi2: 'Tổng thời gian nuôi đến khi xuất chuồng (tháng)',
    gaPhatTrienNhanhHon2: 'Đàn gà có phát triển nhanh hơn và/hoặc lớn hơn',
    giaBan2: 'Giá bán (đồng/kg)',
    tongThuNhap2: 'Tổng thu nhập',
    danhGiaMui2: 'Đánh giá mùi từ chuồng gà (0-10)',
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

// Helper function to render Section C (phanU) with comparison table
const renderSectionCComparison = (items) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        C. Sử dụng PHÂN Ủ từ lớp đệm lót làm phân bón cây trồng, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng phân ủ
      </Title>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: 32 }}>
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
                    32a. Tên cây trồng
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32b. Diện tích (sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    32c. Tổng khối lượng từng loại phân bón (kg/sào x số sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    32d. Số tiền đã chi cho mua từng loại phân bón
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32e. Số lần phun thuốc trừ sâu hóa học
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32f. Số lượng thuốc sâu hóa học (bình)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32g. Số lượng thuốc cỏ (bình)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32h. Tiền thuốc trừ sâu (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32i. Tiền thuốc trừ cỏ (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32j. Tiền công lao động (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32k. Tiền mua hạt giống (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32l. Cây có bị sâu bệnh?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32m. Năng suất thu hoạch (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32n. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    32o. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: SAU KHI BÓN PHÂN Ủ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed', textAlign: 'center' }}>
                    SAU KHI BÓN PHÂN Ủ<br/>(VỤ GẦN ĐÂY)
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }} rowSpan={2}>
                    {item['tenCayTrong'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item.dienTichSauPhanU2 || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((tenPhan, idx) => {
                          const kg = item[`sauPhanU_kg2_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenPhan}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{kg || '-'}</td>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((tenPhan, idx) => {
                          const tien = item[`sauPhanU_tien2_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenPhan}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32esau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32fsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32gsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32hsao'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32isau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32jsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32ksau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32lsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32msau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32nsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32osau'] || '-'}</td>
                </tr>

                {/* Row 2: KHÔNG BÓN PHÂN Ủ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff', textAlign: 'center' }}>
                    KHÔNG BÓN PHÂN Ủ<br/>(NĂM 2022)
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item['32bkhong'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((tenPhan, idx) => {
                          const kg = item[`khongPhanU_kg_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenPhan}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{kg || '-'}</td>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TYPES.map((tenPhan, idx) => {
                          const tien = item[`khongPhanU_tien_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenPhan}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32ekhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32fkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32gkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32hkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32ikhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32jkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32kkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32lkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32mtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32ntruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item['32otruoc'] || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render Section D (danGa) with comparison table
const renderSectionDComparison = (items) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        D. Sử dụng thức ăn, sức khỏe ĐÀN GÀ và kinh tế SAU và TRƯỚC khi nuôi gà trên đệm lót sinh học dày
      </Title>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: 32 }}>
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
                    Thời điểm
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35a. Số lượng gà (con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    35b. Khối lượng thức ăn (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    35c. Số tiền chi cho thức ăn (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35d. Tiền thuốc thú y (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35e. Giờ dọn dẹp/tuần
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35f. Gà có mắc bệnh?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35g. Sức khỏe (1-10)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35h. Số ngày đạt trọng lượng
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35i. Trọng lượng xuất chuồng (kg/con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35j. Thời gian nuôi (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35k. Phát triển nhanh hơn?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35l. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35m. Tổng thu nhập (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    35n. Đánh giá mùi (0-10)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 2: SAU KHI đệm lót */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff', textAlign: 'center' }}>
                    SAU KHI<br/>đệm lót
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item.soLuongGaTruocDemLot || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_GA_TYPES.map((tenThucAn, idx) => {
                          const kg = item[`truocDemLot_kg_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenThucAn}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{kg || '-'}</td>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_GA_TYPES.map((tenThucAn, idx) => {
                          const tien = item[`truocDemLot_tien_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenThucAn}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.tienThuoc2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.gioDonDep2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.gaBiBenh2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.danhGiaSucKhoe2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.soNgayDatTrongLuong2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.trongLuongXuatChuong2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.tongThoiGianNuoi2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.gaPhatTrienNhanhHon2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.giaBan2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.tongThuNhap2 || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.danhGiaMui2 || '-'}</td>
                </tr>

                {/* Row 1: TRƯỚC KHI đệm lót */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed', textAlign: 'center' }}>
                    TRƯỚC KHI<br/>đệm lót
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>
                    {item.soLuongGaSauDemLot || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_GA_TYPES.map((tenThucAn, idx) => {
                          const kg = item[`sauDemLot_kg_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenThucAn}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{kg || '-'}</td>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>Đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_GA_TYPES.map((tenThucAn, idx) => {
                          const tien = item[`sauDemLot_tien_${idx}`];
                          return (
                            <tr key={idx}>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tenThucAn}</td>
                              <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.tienThuoc || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.gioDonDep || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.gaBiBenh || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.danhGiaSucKhoe || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.soNgayDatTrongLuong || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.trongLuongXuatChuong || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.tongThoiGianNuoi || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.gaPhatTrienNhanhHon || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.giaBan || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.tongThuNhap || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }}>{item.danhGiaMui || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export const NuoiGaRenderer = ({ data }) => {
  if (!data || typeof data !== 'object') {
    return <Empty description="Không có dữ liệu kỹ thuật Nuôi gà" />;
  }

  const sections = [];

  // Section A: SAU KHI sử dụng đệm lót sinh học dày
  if (data.sectionA) {
    sections.push(
      renderArraySection(
        'sectionA', 
        data.sectionA, 
        'A. Quản lý phụ phẩm cây trồng SAU KHI sử dụng đệm lót sinh học dày', 
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
        'B. Quản lý phụ phẩm cây trồng TRƯỚC KHI áp dụng kỹ thuật nuôi gà trên đệm lót sinh học dày (NĂM 2022)', 
        FIELD_LABELS.sectionB
      )
    );
  }

  // Section C: Sử dụng phân ủ từ đệm lót - COMPARISON TABLE
  if (data.phanU) {
    sections.push(renderSectionCComparison(data.phanU));
  }

  // Section D: Thông tin đàn gà - COMPARISON TABLE
  if (data.danGa) {
    sections.push(renderSectionDComparison(data.danGa));
  }

  return sections.length > 0 ? <>{sections}</> : <Empty description="Không có dữ liệu kỹ thuật Nuôi gà" />;
};
