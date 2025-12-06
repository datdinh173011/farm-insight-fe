import React from 'react';
import { Table, Typography, Empty } from 'antd';

const { Title } = Typography;

// Default values for form fields that use disabled inputs
const PHAN_BON_TRUOC_TYPES = ['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác'];
const PHAN_BON_SAU_TYPES = ['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân trùn quế', 'Phân khác'];
const THUC_AN_KHONG_TYPES = ['Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'];
const THUC_AN_SAU_TYPES = ['Trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'];

// Field labels for Trùn quế technique
const FIELD_LABELS = {
  sectionA: {
    ngayBatDau: 'Ngày bắt đầu',
    soLuaTrunQue: 'Số lứa trùn quế đã nuôi',
    soNgayMotLua: 'Số ngày để nuôi một lứa trùn quế (bắt đầu thả sinh khối – thu hoạch, TB 60 ngày)',
    tongChiPhiXayDung: 'Tổng chi phí xây dựng khu nuôi trùn quế (bao gồm vật liệu và nhân công)',
    chiPhiMuaGiong: 'Chi phí mua giống (sinh khối trùn quế)',
    chiPhiDauVaoKhac: 'Chi phí đầu vào/vật liệu khác (cho Trùn quế)',
    cachSuDungTrunQue: 'Cách sử dụng trùn quế',
    tenLoaiVatNuoi: 'Tên loài vật nuôi được nuôi bằng trùn quế',
    soLuongConVatNuoi: 'Số lượng con vật nuôi/lứa',
    soLuaVatNuoi: 'Số lứa (được cho ăn trùn quế)',
    cachSuDungPhanTrunQue: 'Cách sử dụng phân trùn quế',
    tenCayTrongPhanTrunQue: 'Nêu tên những loài cây trồng được bón bằng phân trùn quế (1 ô ghi 1 loại cây trồng)',
    tongSoVuTrongPhanTrunQue: 'Tổng số vụ trồng (sử dụng phân bón trùn quế/vụ; số vụ/năm x số năm)',
    dienTichCayTrongPhanTrunQue: 'Diện tích cây trồng được bón phân trùn quế (số sào/vụ x số vụ/năm)',
  },
  sectionB: {
    loaiPhuPhamThucAn: 'Loại phụ phẩm nông nghiệp làm thức ăn cho trùn quế',
    khoiLuongPhuPhamTB: 'Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày (kg/con/ngày)',
    soLuongVatNuoi: 'Số lượng từng loại vật nuôi',
    soNgayLuaNuoi: 'Số ngày/lứa nuôi',
    soLuaNuoi: 'Số lứa nuôi',
    tongKhoiLuongPhuPhamSX: 'Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg)',
    khoiLuongPhuPhamDungChoTrunQue: 'Khối lượng phụ phẩm nông nghiệp dùng cho trùn quế (kg/ngày)',
    tyLePhuPhamDungChoTrunQue: 'Tỷ lệ % phụ phẩm nông nghiệp dùng cho trùn quế (19g/19f)',
    dienTichNuoiTrunQue: 'Diện tích được sử dụng để nuôi trùn quế (m2/lứa)',
    chiPhiMuaGiongB: 'Chi phí mua giống (sinh khối trùn quế, tính cho 1m2/lứa)',
    soNgayDeNuoiMotLuaB: 'Số ngày để nuôi một lứa trùn quế (ngày)',
    khoiLuongTrunQueThuDuoc: 'Khối lượng trùn quế thu được (kg/lứa)',
    khoiLuongPhanTrunQueThuDuoc: 'Khối lượng phân trùn quế thu được (kg/lứa)',
    congLaoDong: 'Công lao động (số giờ/ngày)',
    gioQuetDonPhanChuongTruoc: 'Khi chưa nuôi trùn quế, trong 1 ngày dành bao nhiêu giờ để quét dọn phân chuồng',
    gioDonPhanChuongSau: 'Khi nuôi trùn quế, 1 ngày dành bao nhiêu giờ để dọn dẹp phân chuồng dùng cho trùn quế',
  },
  sectionC: {
    '20a': 'Nêu tên loại cây trồng được bón phân trùn quế',
    '20btruoc': '20b. Cây được trồng tháng/năm nào? (KHÔNG BÓN)',
    '20ctruoc': '20c. Diện tích trồng (sào/vụ) (KHÔNG BÓN)',
    '20bsau': '20b. Cây được trồng tháng/năm nào? (SAU KHI BÓN)',
    '20csau': '20c. Diện tích trồng (sào/vụ) (SAU KHI BÓN)',
    '20ftruoc': '20f. Số lần phun thuốc trừ sâu hóa học (KHÔNG BÓN)',
    '20gtruoc': '20g. Số lượng thuốc trừ sâu hóa học (bình 15-20l/sào/vụ) (KHÔNG BÓN)',
    '20htruoc': '20h. Số lượng thuốc trừ cỏ (bình 15-20l/sào/vụ) (KHÔNG BÓN)',
    '20itruoc': '20i. Số tiền thuốc trừ sâu hóa học (đồng/sào/vụ) (KHÔNG BÓN)',
    '20jtruoc': '20j. Số tiền thuốc trừ cỏ hóa học (đồng/sào/vụ) (KHÔNG BÓN)',
    '20ktruoc': '20k. Số tiền công chăm sóc cây trồng (đồng/sào/vụ) (KHÔNG BÓN)',
    '20ltruoc': '20l. Số tiền mua hạt giống (đồng/sào/vụ) (KHÔNG BÓN)',
    '20mtruoc': '20m. Cây trồng có bị sâu bệnh tấn công (KHÔNG BÓN)',
    '20ntruoc': '20n. Năng suất thu hoạch (kg/sào) (KHÔNG BÓN)',
    '20otruc': '20o. Giá bán (đồng/kg) (KHÔNG BÓN)',
    '20ptruoc': '20p. Thành tiền (đồng) (KHÔNG BÓN)',
    '20fsau': '20f. Số lần phun thuốc trừ sâu hóa học (SAU KHI BÓN)',
    '20gsau': '20g. Số lượng thuốc trừ sâu hóa học (bình 15-20l/sào/vụ) (SAU KHI BÓN)',
    '20hsau': '20h. Số lượng thuốc trừ cỏ (bình 15-20l/sào/vụ) (SAU KHI BÓN)',
    '20isau': '20i. Số tiền thuốc trừ sâu hóa học (đồng/sào/vụ) (SAU KHI BÓN)',
    '20jsau': '20j. Số tiền thuốc trừ cỏ hóa học (đồng/sào/vụ) (SAU KHI BÓN)',
    '20ksau': '20k. Số tiền công chăm sóc cây trồng (đồng/sào/vụ) (SAU KHI BÓN)',
    '20lsau': '20l. Số tiền mua hạt giống (đồng/sào/vụ) (SAU KHI BÓN)',
    '20msau': '20m. Cây trồng có bị sâu bệnh tấn công (SAU KHI BÓN)',
    '20nsau': '20n. Năng suất thu hoạch (kg/sào) (SAU KHI BÓN)',
    '20osau': '20o. Giá bán (đồng/kg) (SAU KHI BÓN)',
    '20psau': '20p. Thành tiền (đồng) (SAU KHI BÓN)',
  },
  sectionD: {
    '21a': 'Loại vật nuôi',
    '29akhong': '21b. Số con vật nuôi (con/lứa) (KHÔNG SỬ DỤNG TRÙN QUẾ)',
    '29asau': '21b. Số con vật nuôi (con/lứa) (SAU KHI SỬ DỤNG TRÙN QUẾ)',
    '29dkhong': '21e. Số tiền thuốc thú y (đồng) (KHÔNG SỬ DỤNG)',
    '29ekhong': '21f. Vật nuôi có bị bất kỳ bệnh nào không (KHÔNG SỬ DỤNG)',
    '29fkhong': '21g. Đánh giá sức khỏe vật nuôi (1-10) (KHÔNG SỬ DỤNG)',
    '29gkhong': '21h. Vật nuôi phát triển nhanh hơn/lớn hơn (KHÔNG SỬ DỤNG)',
    '29hkhong': '21i. Thời gian nuôi đến xuất chuồng (tháng) (KHÔNG SỬ DỤNG)',
    '29ikhong': '21j. Trọng lượng TB khi xuất chuồng (kg/con) (KHÔNG SỬ DỤNG)',
    '29jkhong': '21k. Giá bán (đồng/kg) (KHÔNG SỬ DỤNG)',
    '29kkhong': '21l. Thành tiền (đồng) (KHÔNG SỬ DỤNG)',
    '29dsau': '21e. Số tiền thuốc thú y (đồng) (SAU KHI SỬ DỤNG)',
    '29esau': '21f. Vật nuôi có bị bất kỳ bệnh nào không (SAU KHI SỬ DỤNG)',
    '29fsau': '21g. Đánh giá sức khỏe vật nuôi (1-10) (SAU KHI SỬ DỤNG)',
    '29gsau': '21h. Vật nuôi phát triển nhanh hơn/lớn hơn (SAU KHI SỬ DỤNG)',
    '29hsau': '21i. Thời gian nuôi đến xuất chuồng (tháng) (SAU KHI SỬ DỤNG)',
    '29isau': '21j. Trọng lượng TB khi xuất chuồng (kg/con) (SAU KHI SỬ DỤNG)',
    '29jsau': '21k. Giá bán (đồng/kg) (SAU KHI SỬ DỤNG)',
    '29ksau': '21l. Thành tiền (đồng) (SAU KHI SỬ DỤNG)',
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
                    20a. Nêu tên loại cây trồng được bón phân trùn quế
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20b. Cây được trồng tháng/năm nào?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20c. Diện tích trồng (sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    20d. Tổng số kg của từng loại phân bón (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    20e. Số tiền đã chi cho mỗi loại phân bón (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20f. Số lần phun thuốc trừ sâu hóa học
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20g. Số lượng thuốc trừ sâu hóa học (bình 15-20l/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20h. Số lượng thuốc trừ cỏ (bình 15-20l/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20i. Số tiền thuốc trừ sâu hóa học (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20j. Số tiền thuốc trừ cỏ hóa học (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20k. Số tiền công chăm sóc (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20l. Số tiền mua hạt giống (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20m. Cây trồng có bị sâu bệnh tấn công
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20n. Năng suất thu hoạch (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20o. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20p. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: SAU KHI BÓN PHÂN TRÙN QUẾ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI BÓN<br/>PHÂN TRÙN QUẾ
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }} rowSpan={2}>
                    {item['20a'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['20bsau'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['20csau'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_SAU_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`khongPhan_kg_${idx}`] || '-'}
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_SAU_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`khongPhan_tien_${idx}`] || '-'}
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
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20osau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20psau'] || '-'}</td>
                </tr>

                {/* Row 2: KHÔNG BÓN PHÂN TRÙN QUẾ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG BÓN<br/>PHÂN TRÙN QUẾ
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['20btruoc'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['20ctruoc'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TRUOC_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PHAN_BON_TRUOC_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`sauPhan_tien_${idx}`] || '-'}
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
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20otruc'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['20ptruoc'] || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render Section D comparison table
const renderSectionDComparison = (items, sectionTitle) => {
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
                    21a. Loại vật nuôi
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21b. Số con vật nuôi (số con/lứa)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    21c. Tổng số kg của từng loại thức ăn cho lứa nuôi gần đây (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    21d. Số tiền đã chi cho mỗi loại thức ăn cho lứa nuôi gần đây (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21e. Số tiền đã chi cho mua thuốc thú y
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21f. Vật nuôi có bị bất kỳ bệnh nào không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21g. Bạn đánh giá sức khỏe vật nuôi như thế nào (1-10)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21h. Vật nuôi có phát triển nhanh hơn và/ hoặc lớn hơn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21i. Thời gian nuôi đến khi xuất chuồng (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21j. Trọng lượng trung bình khi xuất chuồng (kg/con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21k. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21l. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: SAU KHI SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI SỬ DỤNG<br/>TRÙN QUẾ<br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center' }} rowSpan={2}>
                    {item['21a'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['29asau'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_SAU_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`sauCanxi_kg_${idx}`] || '-'}
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_SAU_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`sauCanxi_tien_${idx}`] || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29dsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29esau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29fsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29gsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29hsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29isau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29jsau'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29ksau'] || '-'}</td>
                </tr>

                {/* Row 2: KHÔNG SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG SỬ DỤNG<br/>TRÙN QUẾ<br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    {item['29akhong'] || '-'}
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_KHONG_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`khongCanxi_kg_${idx}`] || '-'}
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {THUC_AN_KHONG_TYPES.map((defaultName, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {defaultName}
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px' }}>
                              {item[`khongCanxi_tien_${idx}`] || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29dkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29ekhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29fkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29gkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29hkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29ikhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29jkhong'] || '-'}</td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>{item['29kkhong'] || '-'}</td>
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

export const TrunQueRenderer = ({ data }) => {
  if (!data || typeof data !== 'object') {
    return <Empty description="Không có dữ liệu kỹ thuật Trùn quế" />;
  }

  const sections = [];

  if (data.sectionA) {
    sections.push(
      renderArraySection(
        'sectionA', 
        data.sectionA, 
        'A. Quản lý phụ phẩm SAU KHI nuôi trùn quế', 
        FIELD_LABELS.sectionA
      )
    );
  }

  if (data.sectionB) {
    sections.push(
      renderArraySection(
        'sectionB', 
        data.sectionB, 
        'B. Quản lý thức ăn cho trùn quế', 
        FIELD_LABELS.sectionB
      )
    );
  }

  if (data.sectionC) {
    sections.push(
      renderSectionCComparison(
        data.sectionC, 
        'C. Sử dụng phân trùn quế'
      )
    );
  }

  if (data.sectionD) {
    sections.push(
      renderSectionDComparison(
        data.sectionD, 
        'D. Sử dụng trùn quế làm thức ăn'
      )
    );
  }

  return sections.length > 0 ? <>{sections}</> : <Empty description="Không có dữ liệu kỹ thuật Trùn quế" />;
};
