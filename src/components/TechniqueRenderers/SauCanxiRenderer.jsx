import React from 'react';
import { Table, Typography, Empty } from 'antd';

const { Title } = Typography;

// Field labels for Sâu canxi technique
const FIELD_LABELS = {
  sectionA: {
    ngayBatDau: 'Ngày bắt đầu',
    soLuaSâuCanxi: 'Số lứa Sâu canxi đã nuôi',
    soNgayMotLua: 'Số ngày để nuôi một lứa Sâu canxi (TB 45 ngày)',
    tongChiPhiXayDung: 'Tổng chi phí xây dựng khu nuôi Sâu canxi (bao gồm vật liệu và nhân công)',
    chiPhiMuaGiong: 'Chi phí mua giống (trứng Sâu canxi)/tổng số lứa',
    chiPhiDauVaoKhac: 'Chi phí đầu vào/vật liệu khác (cho nuôi sâu canxi)',
    cachSuDungSâuCanxi: 'Cách sử dụng Sâu canxi',
    tenLoaiVatNuoi: 'Tên loài vật nuôi được nuôi bằng Sâu canxi',
    soLuongConVatNuoi: 'Số lượng con vật nuôi/lứa',
    soLuaVatNuoi: 'Số lứa (được cho ăn Sâu canxi)',
    cachSuDungPhanSâuCanxi: 'Cách sử dụng phân Sâu canxi',
    tenCayTrongPhanSâuCanxi: 'Tên những loài cây trồng được bón bằng phân Sâu canxi (1 ô ghi 1 loại cây trồng)',
    tongSoVuTrongPhanSâuCanxi: 'Tổng số vụ trồng (sử dụng phân bón Sâu canxi; số vụ/năm)',
    dienTichCayTrongPhanSâuCanxi: 'Diện tích cây trồng được bón phân Sâu canxi (số sào/vụ)',
  },
  sectionB: {
    loaiPhuPhamThucAn: 'Loại phụ phẩm nông nghiệp làm thức ăn cho Sâu canxi',
    khoiLuongPhuPhamTB: 'Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày',
    soLuongVatNuoi: 'Số lượng từng loại vật nuôi',
    soNgayLuaNuoi: 'Số ngày/lứa nuôi',
    soLuaNuoi: 'Số lứa nuôi',
    tongKhoiLuongPhuPhamSX: 'Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg/ngày)',
    khoiLuongPhuPhamDungChoSâuCanxi: 'Khối lượng phụ phẩm nông nghiệp dùng cho sâu canxi (kg/ngày)',
    tyLePhuPhamDungChoSâuCanxi: 'Tỷ lệ % phụ phẩm nông nghiệp dùng cho sâu canxi',
    dienTichNuoiSâuCanxi: 'Diện tích được sử dụng để nuôi sâu canxi (m2/lứa)',
    chiPhiMuaGiongB: 'Chi phí mua giống (trứng sâu canxi, tính cho 1m2/lứa)',
    soNgayDeNuoiMotLuaB: 'Số ngày để nuôi một lứa sâu canxi (ngày)',
    khoiLuongSâuCanxiThuDuoc: 'Khối lượng sâu canxi thu được (kg/lứa)',
    khoiLuongPhanSâuCanxiThuDuoc: 'Khối lượng phân sâu canxi thu được (kg/lứa)',
    congLaoDong: 'Công lao động (số giờ/ngày)',
  },
  sectionC: {
    tenCayTrong: 'Tên loại cây trồng được bón phân sâu canxi',
    '26bkhong': '26b. Cây được trồng tháng/năm nào? (KHÔNG BÓN)',
    '26ckhong': '26c. Diện tích trồng (sào/vụ) (KHÔNG BÓN)',
    '26bsau': '26b. Cây được trồng tháng/năm nào? (SAU KHI BÓN)',
    '26csau': '26c. Diện tích trồng (sào/vụ) (SAU KHI BÓN)',
    '32ekhong': '26f. Số lần phun thuốc trừ sâu hóa học (KHÔNG BÓN)',
    '32fkhong': '26g. Số lượng thuốc trừ sâu hóa học (bình 15-20l/sào/vụ) (KHÔNG BÓN)',
    '32gkhong': '26h. Số lượng thuốc trừ cỏ (bình 15-20l/sào/vụ) (KHÔNG BÓN)',
    '32hkhong': '26i. Số tiền thuốc trừ sâu hóa học (đồng/sào/vụ) (KHÔNG BÓN)',
    '32ikhong': '26j. Số tiền thuốc trừ cỏ hóa học (đồng/sào/vụ) (KHÔNG BÓN)',
    '32jkhong': '26k. Số tiền công chăm sóc cây trồng (đồng/sào/vụ) (KHÔNG BÓN)',
    '32kkhong': '26l. Số tiền mua hạt giống (đồng/sào/vụ) (KHÔNG BÓN)',
    '32lkhong': '26m. Cây trồng có bị sâu bệnh tấn công (KHÔNG BÓN)',
    '32mtruoc': '26n. Năng suất thu hoạch (kg/sào) (KHÔNG BÓN)',
    '32ntruoc': '26o. Giá bán (đồng/kg) (KHÔNG BÓN)',
    '32otruoc': '26p. Thành tiền (đồng) (KHÔNG BÓN)',
    '32esau': '26f. Số lần phun thuốc trừ sâu hóa học (SAU KHI BÓN)',
    '32fsau': '26g. Số lượng thuốc trừ sâu hóa học (bình 15-20l/sào/vụ) (SAU KHI BÓN)',
    '32gsau': '26h. Số lượng thuốc trừ cỏ (bình 15-20l/sào/vụ) (SAU KHI BÓN)',
    '32hsao': '26i. Số tiền thuốc trừ sâu hóa học (đồng/sào/vụ) (SAU KHI BÓN)',
    '32isau': '26j. Số tiền thuốc trừ cỏ hóa học (đồng/sào/vụ) (SAU KHI BÓN)',
    '32jsau': '26k. Số tiền công chăm sóc cây trồng (đồng/sào/vụ) (SAU KHI BÓN)',
    '32ksau': '26l. Số tiền mua hạt giống (đồng/sào/vụ) (SAU KHI BÓN)',
    '32lsau': '26m. Cây trồng có bị sâu bệnh tấn công (SAU KHI BÓN)',
    '32msau': '26n. Năng suất thu hoạch (kg/sào) (SAU KHI BÓN)',
    '32nsau': '26o. Giá bán (đồng/kg) (SAU KHI BÓN)',
    '32osau': '26p. Thành tiền (đồng) (SAU KHI BÓN)',
  },
  sectionD: {
    loaiVatNuoi: 'Loại vật nuôi',
    '29akhong': '29a. Số con vật nuôi (con/lứa) (KHÔNG SỬ DỤNG SÂU CANXI)',
    '29asau': '29a. Số con vật nuôi (con/lứa) (SAU KHI SỬ DỤNG SÂU CANXI)',
    '29dkhong': '29d. Số tiền thuốc thú y/lứa (đồng) (KHÔNG SỬ DỤNG)',
    '29ekhong': '29e. Vật nuôi có bị bất kỳ bệnh nào không (KHÔNG SỬ DỤNG)',
    '29fkhong': '29f. Đánh giá sức khỏe vật nuôi (1-10) (KHÔNG SỬ DỤNG)',
    '29gkhong': '29g. Vật nuôi phát triển nhanh hơn/lớn hơn (KHÔNG SỬ DỤNG)',
    '29hkhong': '29h. Thời gian nuôi đến xuất chuồng (tháng) (KHÔNG SỬ DỤNG)',
    '29ikhong': '29i. Trọng lượng TB khi xuất chuồng (kg/con) (KHÔNG SỬ DỤNG)',
    '29jkhong': '29j. Giá bán (đồng/kg) (KHÔNG SỬ DỤNG)',
    '29kkhong': '29k. Thành tiền (đồng) (KHÔNG SỬ DỤNG)',
    '29dsau': '29d. Số tiền thuốc thú y/lứa (đồng) (SAU KHI SỬ DỤNG)',
    '29esau': '29e. Vật nuôi có bị bất kỳ bệnh nào không (SAU KHI SỬ DỤNG)',
    '29fsau': '29f. Đánh giá sức khỏe vật nuôi (1-10) (SAU KHI SỬ DỤNG)',
    '29gsau': '29g. Vật nuôi phát triển nhanh hơn/lớn hơn (SAU KHI SỬ DỤNG)',
    '29hsau': '29h. Thời gian nuôi đến xuất chuồng (tháng) (SAU KHI SỬ DỤNG)',
    '29isau': '29i. Trọng lượng TB khi xuất chuồng (kg/con) (SAU KHI SỬ DỤNG)',
    '29jsau': '29j. Giá bán (đồng/kg) (SAU KHI SỬ DỤNG)',
    '29ksau': '29k. Thành tiền (đồng) (SAU KHI SỬ DỤNG)',
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

// Helper function to render Section C with comparison table layout
const renderSectionCComparison = (items, sectionTitle) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div key="sectionC" style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        {sectionTitle}
      </Title>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 32 }}>
          {/* Crop name */}
          {item.tenCayTrong && (
            <div style={{ marginBottom: 16, padding: 12, backgroundColor: '#f0f5ff', borderRadius: 4 }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>
                Cây trồng: {item.tenCayTrong}
              </span>
            </div>
          )}

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
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Tháng/năm trồng
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Diện tích (sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    Khối lượng phân bón (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    Chi phí phân bón (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 100 }}>
                    Số lần phun thuốc trừ sâu
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Thuốc trừ sâu (bình)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Thuốc trừ cỏ (bình)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Chi phí thuốc trừ sâu (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Chi phí thuốc trừ cỏ (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Chi phí công chăm sóc (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Chi phí hạt giống (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Có sâu bệnh?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Năng suất (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: KHÔNG BÓN */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff', whiteSpace: 'nowrap' }}>
                    KHÔNG BÓN<br/>PHÂN SÂU CANXI
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{item['26bkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{item['26ckhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2].map(i => {
                          const tenPhan = item[`khongPhanU_tenPhan_${i}`];
                          const kg = item[`khongPhanU_kg_${i}`];
                          if (!tenPhan && !kg) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenPhan || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{kg || '-'} kg</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2].map(i => {
                          const tenPhan = item[`khongPhanU_tenPhanTien_${i}`];
                          const tien = item[`khongPhanU_tien_${i}`];
                          if (!tenPhan && !tien) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenPhan || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32ekhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32fkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32gkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32hkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32ikhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32jkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32kkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32lkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32mtruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32ntruoc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32otruoc'] || '-'}</td>
                </tr>

                {/* Row 2: SAU KHI BÓN */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed', whiteSpace: 'nowrap' }}>
                    SAU KHI BÓN<br/>PHÂN SÂU CANXI
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{item['26bsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{item['26csau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2, 3].map(i => {
                          const tenPhan = item[`sauPhanU_tenPhan2_${i}`];
                          const kg = item[`sauPhanU_kg2_${i}`];
                          if (!tenPhan && !kg) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenPhan || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{kg || '-'} kg</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2, 3].map(i => {
                          const tenPhan = item[`sauPhanU_tenPhanTien2_${i}`];
                          const tien = item[`sauPhanU_tien2_${i}`];
                          if (!tenPhan && !tien) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenPhan || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32esau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32fsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32gsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32hsao'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32isau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32jsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32ksau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['32lsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32msau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32nsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['32osau'] || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render Section D with comparison table layout
const renderSectionDComparison = (items, sectionTitle) => {
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <div key="sectionD" style={{ marginBottom: 32 }}>
      <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
        {sectionTitle}
      </Title>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 32 }}>
          {/* Animal type */}
          {item.loaiVatNuoi && (
            <div style={{ marginBottom: 16, padding: 12, backgroundColor: '#f0f5ff', borderRadius: 4 }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>
                Loại vật nuôi: {item.loaiVatNuoi}
              </span>
            </div>
          )}

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
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Số con vật nuôi
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    Khối lượng thức ăn (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    Chi phí thức ăn (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Chi phí thuốc thú y (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Có bị bệnh?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Sức khỏe (1-10)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Phát triển nhanh hơn?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Thời gian nuôi (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Trọng lượng (kg/con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: KHÔNG SỬ DỤNG */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff', whiteSpace: 'nowrap' }}>
                    KHÔNG SỬ DỤNG<br/>SÂU CANXI<br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29akhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2].map(i => {
                          const tenThucAn = item[`khongCanxi_tenThucAn_${i}`];
                          const kg = item[`khongCanxi_kg_${i}`];
                          if (!tenThucAn && !kg) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenThucAn || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{kg || '-'} kg</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2].map(i => {
                          const tenThucAn = item[`khongCanxi_tenThucAnTien_${i}`];
                          const tien = item[`khongCanxi_tien_${i}`];
                          if (!tenThucAn && !tien) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenThucAn || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29dkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29ekhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29fkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29gkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29hkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29ikhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29jkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29kkhong'] || '-'}</td>
                </tr>

                {/* Row 2: SAU KHI SỬ DỤNG */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed', whiteSpace: 'nowrap' }}>
                    SAU KHI SỬ DỤNG<br/>SÂU CANXI<br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29asau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2, 3].map(i => {
                          const tenThucAn = item[`sauCanxi_tenThucAn_${i}`];
                          const kg = item[`sauCanxi_kg_${i}`];
                          if (!tenThucAn && !kg) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenThucAn || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{kg || '-'} kg</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', fontSize: '12px' }}>
                      <tbody>
                        {[0, 1, 2, 3].map(i => {
                          const tenThucAn = item[`sauCanxi_tenThucAnTien_${i}`];
                          const tien = item[`sauCanxi_tien_${i}`];
                          if (!tenThucAn && !tien) return null;
                          return (
                            <tr key={i}>
                              <td style={{ padding: '2px 4px' }}>{tenThucAn || '-'}</td>
                              <td style={{ padding: '2px 4px', textAlign: 'right' }}>{tien || '-'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29dsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29esau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29fsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29gsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>{item['29hsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29isau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29jsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'right' }}>{item['29ksau'] || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SauCanxiRenderer = ({ data }) => {
  if (!data || typeof data !== 'object') {
    return <Empty description="Không có dữ liệu kỹ thuật Sâu canxi" />;
  }

  const sections = [];

  if (data.sectionA) {
    sections.push(
      renderArraySection(
        'sectionA', 
        data.sectionA, 
        'A. Nhóm câu hỏi: Loại phụ phẩm cây trồng, vật nuôi, Quản lý phụ phẩm cây trồng vật nuôi và chất thải SAU KHI nuôi Sâu canxi (Từ TRƯỚC đến NAY).', 
        FIELD_LABELS.sectionA
      )
    );
  }

  if (data.sectionB) {
    sections.push(
      renderArraySection(
        'sectionB', 
        data.sectionB, 
        'B. Nhóm câu hỏi: Quản lý sử dụng thức ăn cho Sâu canxi & sản phẩm Sâu canxi thu được (Tính cho 1 LỨA nuôi GẦN ĐÂY NHẤT)', 
        FIELD_LABELS.sectionB
      )
    );
  }

  if (data.sectionC) {
    sections.push(
      renderSectionCComparison(
        data.sectionC,
        'C. Nhóm câu hỏi: Sử dụng phân sâu canxi bón cho cây trồng SAU và TRƯỚC khi nuôi sâu canxi (Tính cho 1 VỤ cây trồng GẦN ĐÂY NHẤT)'
      )
    );
  }

  if (data.sectionD) {
    sections.push(
      renderSectionDComparison(
        data.sectionD,
        'D. Nhóm câu hỏi: Sử dụng sâu canxi làm thức ăn cho vật nuôi SAU và TRƯỚC khi nuôi sâu canxi (Tính cho 1 LỨA nuôi GẦN ĐÂY NHẤT)'
      )
    );
  }

  return sections.length > 0 ? <>{sections}</> : <Empty description="Không có dữ liệu kỹ thuật Sâu canxi" />;
};
