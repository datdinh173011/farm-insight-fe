import React from 'react';
import { Descriptions, Typography, Divider, Table, Empty } from 'antd';
import { LenMenRenderer } from './TechniqueRenderers/LenMenRenderer';
import { NuoiGaRenderer } from './TechniqueRenderers/NuoiGaRenderer';
import { SauCanxiRenderer } from './TechniqueRenderers/SauCanxiRenderer';
import { TrunQueRenderer } from './TechniqueRenderers/TrunQueRenderer';
import { UPhanRenderer } from './TechniqueRenderers/UPhanRenderer';
import { GocRaRenderer } from './TechniqueRenderers/GocRaRenderer';

const { Title, Text } = Typography;

// Component để render dữ liệu chi tiết cho từng loại kỹ thuật
export const TechniqueDataRenderer = ({ data, techniqueType }) => {
  console.log('🔍 TechniqueDataRenderer - Original data:', data);
  console.log('🔍 TechniqueDataRenderer - techniqueType:', techniqueType);
  
  if (!data || typeof data !== 'object') {
    console.log('❌ No data or invalid data type');
    return <Empty description="Không có dữ liệu" />;
  }

  // Map technique type to Vietnamese key in data object
  const techniqueKeyMap = {
    'len-men-phu-pham': 'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi',
    'nuoi-ga-dem-lot': 'Nuôi gà trên đệm lót sinh học',
    'nuoi-sau-canxi': 'Nuôi sâu canxi',
    'nuoi-trun-que': 'Nuôi trùn quế',
    'u-phan-huu-co-tai-ruong': 'Ủ phân hữu cơ tại ruộng',
    'xu-ly-goc-ra-che-pham': 'Xử lý gốc rạ bằng chế phẩm sinh học'
  };

  // Get technique-specific data from nested object
  const techniqueKey = techniqueKeyMap[techniqueType];
  const techniqueData = techniqueKey && data[techniqueKey] ? data[techniqueKey] : data;
  
  console.log('🔑 Technique key:', techniqueKey);
  console.log('📦 Technique data:', techniqueData);
  
  if (!techniqueData || (typeof techniqueData === 'object' && Object.keys(techniqueData).length === 0)) {
    console.log('❌ No technique data found');
    return <Empty description={`Không có dữ liệu kỹ thuật ${techniqueKey || techniqueType}`} />;
  }

  // Helper function to render array sections (dynamic instances)
  const renderArraySection = (sectionKey, items, sectionTitle, fieldLabels = {}) => {
    if (!items || !Array.isArray(items) || items.length === 0) return null;

    return (
      <div key={sectionKey} style={{ marginBottom: 32 }}>
        <Title level={5} style={{ color: '#1890ff', marginBottom: 16 }}>
          {sectionTitle} ({items.length} mục)
        </Title>
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: 16,
              padding: 16,
              background: idx % 2 === 0 ? '#fafafa' : '#fff',
              border: '1px solid #e8e8e8',
              borderRadius: 4,
            }}
          >
            <Text strong style={{ fontSize: 15, color: '#1890ff' }}>
              Mục {idx + 1}
            </Text>
            <Descriptions column={1} size="small" style={{ marginTop: 12 }} bordered>
              {Object.entries(item).map(([key, value]) => {
                // Get question label from fieldLabels, fallback to key
                const label = fieldLabels[key] || key;
                let displayValue = value;

                // Handle nested objects or arrays
                if (typeof value === 'object' && value !== null) {
                  displayValue = JSON.stringify(value, null, 2);
                } else if (value === null || value === undefined || value === '') {
                  displayValue = '-';
                } else {
                  displayValue = String(value);
                }

                return (
                  <Descriptions.Item 
                    key={key} 
                    label={<span style={{ fontWeight: 600, color: '#262626' }}>{label}</span>}
                    labelStyle={{ backgroundColor: '#f5f5f5', width: '40%' }}
                  >
                    {displayValue}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </div>
        ))}
      </div>
    );
  };

  // Helper function to render table data sections
  const renderTableSection = (sectionKey, sectionData, sectionTitle) => {
    if (!sectionData || typeof sectionData !== 'object') return null;

    const entries = Object.entries(sectionData);
    if (entries.length === 0) return null;

    return (
      <div key={sectionKey} style={{ marginBottom: 32 }}>
        <Title level={5} style={{ color: '#52c41a', marginBottom: 16 }}>
          {sectionTitle}
        </Title>
        <Descriptions column={2} size="small" bordered>
          {entries.map(([key, value]) => {
            let displayValue = value;
            if (typeof value === 'object' && value !== null) {
              displayValue = JSON.stringify(value, null, 2);
            } else if (value === null || value === undefined || value === '') {
              displayValue = '-';
            } else {
              displayValue = String(value);
            }

            return (
              <Descriptions.Item key={key} label={key}>
                {displayValue}
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      </div>
    );
  };

  // Render based on technique type
  const renderByTechniqueType = () => {
    console.log('🎯 renderByTechniqueType - techniqueType:', techniqueType);
    
    switch (techniqueType) {
      case 'len-men-phu-pham':
        console.log('✅ Rendering LenMenRenderer with data:', techniqueData);
        return <LenMenRenderer data={techniqueData} />;
      case 'nuoi-ga-dem-lot':
        console.log('✅ Rendering NuoiGaRenderer with data:', techniqueData);
        return <NuoiGaRenderer data={techniqueData} />;
      case 'nuoi-sau-canxi':
        console.log('✅ Rendering SauCanxiRenderer with data:', techniqueData);
        return <SauCanxiRenderer data={techniqueData} />;
      case 'nuoi-trun-que':
        console.log('✅ Rendering TrunQueRenderer with data:', techniqueData);
        return <TrunQueRenderer data={techniqueData} />;
      case 'u-phan-huu-co-tai-ruong':
        console.log('✅ Rendering UPhanRenderer with data:', techniqueData);
        return <UPhanRenderer data={techniqueData} />;
      case 'xu-ly-goc-ra-che-pham':
        console.log('✅ Rendering GocRaRenderer with data:', techniqueData);
        return <GocRaRenderer data={techniqueData} />;
      default:
        console.log('⚠️ Using renderGenericData for techniqueType:', techniqueType);
        return renderGenericData(techniqueData);
    }
  };

  const renderGenericData = (data) => {
    const sections = [];
    
    Object.keys(data).forEach((key) => {
      const value = data[key];
      
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        sections.push(renderArraySection(key, value, key, {}));
      } else if (typeof value === 'object' && value !== null) {
        sections.push(renderTableSection(key, value, key));
      }
    });

    if (sections.length === 0) {
      return (
        <Descriptions column={2} size="small" bordered>
          {Object.entries(data).map(([key, value]) => (
            <Descriptions.Item key={key} label={key}>
              {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value || '-')}
            </Descriptions.Item>
          ))}
        </Descriptions>
      );
    }

    return sections;
  };

  // Render common questions section
  const renderCommonQuestions = (data) => {
    const commonQuestions = {};
    const commonKeys = [
      'xulyPhuPhamTruoc', 'xulyPhuPhamSau', 
      'biogasGasPercent', 'biogasPhanPercent', 'biogasNgayXaKhi',
      'coTrongLua', 
      'xulyGocRaTruoc', 'xulyGocRaSau',
      'coNuoiDongVat',
      'xulyPhanTruoc', 'xulyPhanSau',
      'biogasPhanGasPercent', 'biogasPhanPhanPercent', 'biogasPhanNgayXaKhi',
      'kyThuatDeHayKho',
      'ykienKyThuat_0', 'ykienKyThuat_1', 'ykienKyThuat_2', 'ykienKyThuat_3', 'ykienKyThuat_4',
      'suKienThamGia', 'loiIch1', 'loiIch2', 'lyDoKhongThamGia',
      'soNguoiChiaSeKyThuat', 'duDinhChiaSe',
      'tyLeHoApDung', 'bietDanhHieuXanh', 'muonThamGiaXanh',
      'thuNhap2025', 'nguonThuNhap', 'trinhDoHocVan',
    ];

    // Extract common question data
    Object.keys(data).forEach(key => {
      if (commonKeys.includes(key) || 
          key.startsWith('hoatDong_') || 
          key.startsWith('truyenThong_') ||
          key.startsWith('ykienKyThuat_') ||
          key.startsWith('khaNangTiepTuc_') ||
          key.startsWith('matHapDanNhat_') ||
          key.startsWith('matHapDanHai_') ||
          key.startsWith('yeuToQuanTrong_') ||
          key.startsWith('chapThuan_')) {
        commonQuestions[key] = data[key];
      }
    });

    if (Object.keys(commonQuestions).length === 0) return null;

    const yKienMap = {
      1: 'Không đồng ý',
      2: 'Có phần không đồng ý',
      3: 'Không đồng ý cũng không phản đối',
      4: 'Có phần đồng ý',
      5: 'Hoàn toàn đồng ý',
      6: 'Không biết kỹ thuật này'
    };

    // Render Question 40: Xử lý phụ phẩm cây trồng as table
    const renderXuLyPhuPhamTable = () => {
      if (!commonQuestions.xulyPhuPhamTruoc && !commonQuestions.xulyPhuPhamSau) return null;

      const methods = [
        "Vứt bỏ trong vườn hoặc cánh đồng", "Đốt", "Đưa đến bãi tập kết chôn lấp",
        "Chôn, đầy hố có lấp đất", "Bán", "Đem cho người khác",
        "Ủ phân hữu cơ không ống khí", "Ủ phân hữu cơ có ống khí",
        "Cho vật nuôi ăn trực tiếp", "Lên men làm thức ăn chăn nuôi",
        "Làm thức ăn cho sâu canxi", "Làm thức ăn cho trùn quế",
        "Làm lớp lót nuôi gà trên đệm lót sinh học dày", "Khác (chỉ định phương pháp)",
        "Cho vào hố Biogas tạo khí sinh học"
      ];

      const truocData = commonQuestions.xulyPhuPhamTruoc || [];
      const sauData = commonQuestions.xulyPhuPhamSau || [];

      return (
        <div key="xulyPhuPham" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            40. Xử lý phụ phẩm cây trồng (%)
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Phương pháp xử lý
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 140 }}>
                    TRƯỚC khi tham gia (%)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 140 }}>
                    SAU khi tham gia (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method, idx) => {
                  const truocVal = truocData[idx] || 0;
                  const sauVal = sauData[idx] || 0;
                  // Only show rows with values
                  if (truocVal === 0 && sauVal === 0) return null;
                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{method}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {truocVal > 0 ? truocVal : '-'}
                      </td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {sauVal > 0 ? sauVal : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Biogas sub-questions */}
          {(commonQuestions.biogasGasPercent || commonQuestions.biogasPhanPercent || commonQuestions.biogasNgayXaKhi) && (
            <div style={{ marginTop: 12, paddingLeft: 16, borderLeft: '3px solid #722ed1' }}>
              <Text strong style={{ color: '#722ed1' }}>Nếu xử lý bằng hố Biogas:</Text>
              <Descriptions column={1} size="small" bordered style={{ marginTop: 8 }}>
                {commonQuestions.biogasGasPercent && (
                  <Descriptions.Item 
                    label={<span style={{ fontWeight: 600 }}>Ước lượng % lượng gas dùng nấu ăn/sưởi ấm</span>}
                    labelStyle={{ backgroundColor: '#f5f5f5', width: '60%' }}
                  >
                    {commonQuestions.biogasGasPercent}%
                  </Descriptions.Item>
                )}
                {commonQuestions.biogasPhanPercent && (
                  <Descriptions.Item 
                    label={<span style={{ fontWeight: 600 }}>Ước tính % phân vật nuôi cho vào hố Biogas/Tổng phân chuồng thu gom</span>}
                    labelStyle={{ backgroundColor: '#f5f5f5', width: '60%' }}
                  >
                    {commonQuestions.biogasPhanPercent}%
                  </Descriptions.Item>
                )}
                {commonQuestions.biogasNgayXaKhi && (
                  <Descriptions.Item 
                    label={<span style={{ fontWeight: 600 }}>Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần?</span>}
                    labelStyle={{ backgroundColor: '#f5f5f5', width: '60%' }}
                  >
                    {commonQuestions.biogasNgayXaKhi}
                  </Descriptions.Item>
                )}
              </Descriptions>
            </div>
          )}
        </div>
      );
    };

    // Render Question 42: Xử lý gốc rạ as table
    const renderXuLyGocRaTable = () => {
      if (!commonQuestions.xulyGocRaTruoc && !commonQuestions.xulyGocRaSau) return null;

      const gocRaMethods = ["Đốt", "Vùi trong nước", "Chôn xuống đất", "Sử dụng chế phẩm sinh học", "Khác (Ghi rõ)"];
      const truocData = commonQuestions.xulyGocRaTruoc || [];
      const sauData = commonQuestions.xulyGocRaSau || [];

      return (
        <div key="xulyGocRa" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            42. Xử lý gốc rạ (%)
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Phương pháp xử lý
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 140 }}>
                    TRƯỚC khi tham gia (%)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 140 }}>
                    SAU khi tham gia (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {gocRaMethods.map((method, idx) => {
                  const truocVal = truocData[idx] || 0;
                  const sauVal = sauData[idx] || 0;
                  if (truocVal === 0 && sauVal === 0) return null;
                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{method}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {truocVal > 0 ? truocVal : '-'}
                      </td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {sauVal > 0 ? sauVal : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // Render Question 44: Xử lý phân gia súc as table
    const renderXuLyPhanTable = () => {
      if (!commonQuestions.xulyPhanTruoc && !commonQuestions.xulyPhanSau) return null;

      const phanMethods = [
        "Ủ phân", "Xả bằng nước ra khu vực xung quanh", "Chôn xuống đất",
        "Bán cho người khác", "Lưu trữ trong hố tự hoại",
        "Làm thức ăn cho sâu canxi", "Làm thức ăn cho trùn quế",
        "Khác (Ghi rõ)", "Sử dụng cho hầm Biogas"
      ];
      const truocData = commonQuestions.xulyPhanTruoc || [];
      const sauData = commonQuestions.xulyPhanSau || [];

      return (
        <div key="xulyPhan" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            44. Xử lý phân gia súc (%)
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Phương pháp xử lý
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 140 }}>
                    TRƯỚC khi tham gia (%)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 140 }}>
                    SAU khi tham gia (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {phanMethods.map((method, idx) => {
                  const truocVal = truocData[idx] || 0;
                  const sauVal = sauData[idx] || 0;
                  if (truocVal === 0 && sauVal === 0) return null;
                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{method}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {truocVal > 0 ? truocVal : '-'}
                      </td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {sauVal > 0 ? sauVal : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Biogas sub-questions for Phân */}
          {(commonQuestions.biogasPhanGasPercent || commonQuestions.biogasPhanPhanPercent || commonQuestions.biogasPhanNgayXaKhi) && (
            <div style={{ marginTop: 12, paddingLeft: 16, borderLeft: '3px solid #722ed1' }}>
              <Text strong style={{ color: '#722ed1' }}>Nếu xử lý bằng hầm Biogas:</Text>
              <Descriptions column={1} size="small" bordered style={{ marginTop: 8 }}>
                {commonQuestions.biogasPhanGasPercent && (
                  <Descriptions.Item 
                    label={<span style={{ fontWeight: 600 }}>Ước lượng % lượng gas dùng nấu ăn/sưởi ấm</span>}
                    labelStyle={{ backgroundColor: '#f5f5f5', width: '60%' }}
                  >
                    {commonQuestions.biogasPhanGasPercent}%
                  </Descriptions.Item>
                )}
                {commonQuestions.biogasPhanPhanPercent && (
                  <Descriptions.Item 
                    label={<span style={{ fontWeight: 600 }}>Ước tính % phân vật nuôi cho vào hố Biogas</span>}
                    labelStyle={{ backgroundColor: '#f5f5f5', width: '60%' }}
                  >
                    {commonQuestions.biogasPhanPhanPercent}%
                  </Descriptions.Item>
                )}
                {commonQuestions.biogasPhanNgayXaKhi && (
                  <Descriptions.Item 
                    label={<span style={{ fontWeight: 600 }}>Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần?</span>}
                    labelStyle={{ backgroundColor: '#f5f5f5', width: '60%' }}
                  >
                    {commonQuestions.biogasPhanNgayXaKhi}
                  </Descriptions.Item>
                )}
              </Descriptions>
            </div>
          )}
        </div>
      );
    };

    // Render Questions 51-53: Hoạt động liên quan as table
    const renderHoatDongTable = () => {
      const hoatDongKeys = Object.keys(commonQuestions).filter(key => key.startsWith('hoatDong_'));
      if (hoatDongKeys.length === 0) return null;

      const activities = [
        "Được Dự án hỗ trợ về con giống/vật tư để xây dựng mô hình",
        "Tham gia lớp tập huấn giảng viên nguồn (TOT)",
        "Tham gia lớp tập huấn nông dân (FFS)",
        "Các buổi sinh hoạt của các hợp tác xã, các chi, tổ hội nông dân nghề nghiệp, các câu lạc bộ nông dân",
        "Hội nghị truyền thông/ Sự kiện tuyên truyền/ Hội thi",
        "Các chuyến tham quan học tập, chia sẻ kinh nghiệm",
        "Một người nông dân khác đã hướng dẫn tôi về kỹ thuật"
      ];

      const anhHuongMap = {
        1: 'Không ảnh hưởng',
        2: 'Ít ảnh hưởng (1-30%)',
        3: 'Ảnh hưởng trung bình (31-50%)',
        4: 'Ảnh hưởng cao (51-70%)',
        5: 'Ảnh hưởng rất cao (>71%)'
      };

      return (
        <div key="hoatDong" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            51-53. Hoạt động liên quan xử lý chất thải
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Hoạt động
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 100 }}>
                    Đã nghe nói
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 100 }}>
                    Đã tham dự
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    Ảnh hưởng đến quyết định
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, idx) => {
                  const ngheNoi = commonQuestions[`hoatDong_${idx}_ngheNoi`];
                  const thamDu = commonQuestions[`hoatDong_${idx}_thamDu`];
                  const anhHuong = commonQuestions[`hoatDong_${idx}_anhHuong`];
                  
                  // Only show if at least one field has data
                  if (!ngheNoi && !thamDu && !anhHuong) return null;

                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{activity}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {ngheNoi === 'Đúng' ? '✓' : ngheNoi === 'KHÔNG' ? '✗' : '-'}
                      </td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {thamDu === 'Đúng' ? '✓' : thamDu === 'KHÔNG' ? '✗' : '-'}
                      </td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {anhHuong ? anhHuongMap[anhHuong] || anhHuong : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // Render Questions 57-58: Truyền thông as table
    const renderTruyenThongTable = () => {
      const truyenThongKeys = Object.keys(commonQuestions).filter(key => key.startsWith('truyenThong_'));
      if (truyenThongKeys.length === 0) return null;

      const mediaTypes = [
        "Băng rôn/ Áp phích/ Lịch tuyên truyền",
        "Loa phát thanh của làng/xã",
        "Tài liệu kỹ thuật về phương pháp xử lý rác thải thân thiện với môi trường",
        "Bài viết trên mạng xã hội",
        "Video trên mạng xã hội",
        "Thông tin trên trang web Hội Nông dân",
        "Thông tin trên tivi",
        "Thông tin trên báo",
        "Thông tin qua đài phát thanh",
        "Người khác trong cộng đồng đã áp dụng và có kết quả tốt"
      ];

      const anhHuongMap = {
        1: 'Không ảnh hưởng',
        2: 'Ít ảnh hưởng (1-30%)',
        3: 'Ảnh hưởng trung bình (31-50%)',
        4: 'Ảnh hưởng cao (51-70%)',
        5: 'Ảnh hưởng rất cao (>71%)'
      };

      return (
        <div key="truyenThong" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            57-58. Phương tiện truyền thông
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Phương tiện
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 140 }}>
                    Đã nghe/nhìn thấy
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    Ảnh hưởng đến quyết định
                  </th>
                </tr>
              </thead>
              <tbody>
                {mediaTypes.map((media, idx) => {
                  const ngheNoi = commonQuestions[`truyenThong_${idx}_ngheNoi`];
                  const anhHuong = commonQuestions[`truyenThong_${idx}_anhHuong`];
                  
                  if (!ngheNoi && !anhHuong) return null;

                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{media}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {ngheNoi === 'Đúng' ? '✓' : ngheNoi === 'KHÔNG' ? '✗' : '-'}
                      </td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {anhHuong ? anhHuongMap[anhHuong] || anhHuong : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // Render Question 59: Khả năng tiếp tục sử dụng as table
    const renderKhaNangTiepTucTable = () => {
      const khaNangKeys = Object.keys(commonQuestions).filter(key => key.startsWith('khaNangTiepTuc_'));
      if (khaNangKeys.length === 0) return null;

      const methods = [
        "Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
        "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
        "Xử lý gốc rạ bằng chế phẩm sinh học",
        "Nuôi trùn quế",
        "Nuôi sâu canxi",
        "Nuôi gà trên đệm lót sinh học dày"
      ];

      const khaNangMap = {
        1: 'Tiếp tục',
        2: 'Có thể tiếp tục',
        3: 'Khó tiếp tục',
        4: 'Rất khó tiếp tục',
        5: 'Từng áp dụng nhưng dừng lại',
        6: 'Không tiếp tục'
      };

      return (
        <div key="khaNangTiepTuc" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            59. Khả năng tiếp tục sử dụng các phương pháp
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Phương pháp
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    Khả năng tiếp tục
                  </th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method, idx) => {
                  const value = commonQuestions[`khaNangTiepTuc_${idx}`];
                  if (!value) return null;

                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{method}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {khaNangMap[value] || value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // Render Question 62: Khía cạnh hấp dẫn as table
    const renderKhiaCanHapDanTable = () => {
      const hapDanKeys = Object.keys(commonQuestions).filter(key => 
        key.startsWith('matHapDanNhat_') || key.startsWith('matHapDanHai_')
      );
      if (hapDanKeys.length === 0) return null;

      const methods = [
        "Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
        "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
        "Xử lý gốc rạ bằng chế phẩm sinh học",
        "Nuôi trùn quế",
        "Nuôi sâu canxi",
        "Nuôi gà trên đệm lót sinh học dày"
      ];

      const khiaCanMap = {
        1: 'Giảm chi phí phân bón/thức ăn',
        2: 'Giảm chi phí thuốc trừ sâu/thuốc',
        3: 'Giảm thời gian',
        4: 'Giảm lao động',
        5: 'Tăng năng suất cây trồng / Vật nuôi phát triển lớn hơn',
        6: 'Giảm sâu bệnh',
        7: 'Tăng chất lượng sản phẩm',
        8: 'Cây trồng/vật nuôi phát triển nhanh hơn',
        9: 'Giảm mùi hôi từ phân chuồng',
        10: 'Cải thiện vệ sinh môi trường',
        11: 'Giảm ô nhiễm đất/nước'
      };

      return (
        <div key="khiaCanHapDan" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            62. Khía cạnh hấp dẫn của từng kỹ thuật
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Kỹ thuật
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 220 }}>
                    Mặt hấp dẫn nhất
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 220 }}>
                    Mặt hấp dẫn thứ hai
                  </th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method, idx) => {
                  const nhat = commonQuestions[`matHapDanNhat_${idx}`];
                  const hai = commonQuestions[`matHapDanHai_${idx}`];
                  
                  if (!nhat && !hai) return null;

                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{method}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>
                        {nhat ? khiaCanMap[nhat] || nhat : '-'}
                      </td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>
                        {hai ? khiaCanMap[hai] || hai : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // Render Question 63: Yếu tố quan trọng as table
    const renderYeuToQuanTrongTable = () => {
      const yeuToKeys = Object.keys(commonQuestions).filter(key => key.startsWith('yeuToQuanTrong_'));
      if (yeuToKeys.length === 0) return null;

      const factors = [
        "Tác động đến môi trường",
        "Tác động đến cộng đồng xung quanh",
        "Ý kiến của cộng đồng",
        "Dễ dàng (tốn ít công sức)",
        "Chi phí",
        "Tác động đến vệ sinh và sức khỏe",
        "Phương pháp xử lý rác thải mà người khác áp dụng",
        "Sạch sẽ và gọn gàng của trang trại",
        "Mùi của chất thải gây ra"
      ];

      const quanTrongMap = {
        1: 'Không quan trọng',
        2: 'Quan trọng',
        3: 'Rất quan trọng'
      };

      return (
        <div key="yeuToQuanTrong" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            63. Yếu tố quan trọng khi xử lý chất thải
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 320 }}>
                    Yếu tố
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    Mức độ quan trọng
                  </th>
                </tr>
              </thead>
              <tbody>
                {factors.map((factor, idx) => {
                  const value = commonQuestions[`yeuToQuanTrong_${idx}`];
                  if (!value) return null;

                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{factor}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {quanTrongMap[value] || value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // Render Question 65: Sự chấp thuận as table
    const renderChapThuanTable = () => {
      const chapThuanKeys = Object.keys(commonQuestions).filter(key => key.startsWith('chapThuan_'));
      if (chapThuanKeys.length === 0) return null;

      const methods = [
        "Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
        "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
        "Xử lý gốc rạ bằng chế phẩm sinh học",
        "Nuôi trùn quế",
        "Nuôi sâu canxi",
        "Nuôi gà trên đệm lót sinh học dày"
      ];

      const chapThuanMap = {
        1: 'Không ủng hộ',
        2: 'Ủng hộ ít',
        3: 'Ủng hộ nhiều',
        4: 'Hoàn toàn ủng hộ'
      };

      return (
        <div key="chapThuan" style={{ marginBottom: 24 }}>
          <Title level={5} style={{ color: '#722ed1', marginBottom: 12 }}>
            65. Sự chấp thuận các phương pháp
          </Title>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'left', fontWeight: 600, minWidth: 280 }}>
                    Phương pháp
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    Mức độ ủng hộ
                  </th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method, idx) => {
                  const value = commonQuestions[`chapThuan_${idx}`];
                  if (!value) return null;

                  return (
                    <tr key={idx}>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px' }}>{method}</td>
                      <td style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center' }}>
                        {chapThuanMap[value] || value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // Helper function to render a single simple question
    const renderSimpleQuestion = (key, label, valueMap = null, formatter = null, isArray = false) => {
      // Check if the value exists in commonQuestions
      const value = commonQuestions[key];
      if (value === null || value === undefined || value === '') return null;

      let displayValue = value;

      // Apply value mapping if provided
      if (valueMap && !isArray) {
        displayValue = valueMap[displayValue] || displayValue;
      } else if (isArray && Array.isArray(displayValue) && valueMap) {
        displayValue = displayValue.map(v => valueMap[v] || v).join(', ');
      } else if (formatter) {
        displayValue = formatter(displayValue);
      } else if (typeof displayValue === 'object' && displayValue !== null && !Array.isArray(displayValue)) {
        displayValue = JSON.stringify(displayValue, null, 2);
      } else {
        displayValue = String(displayValue);
      }

      return (
        <div key={key} style={{ marginBottom: 16 }}>
          <Descriptions column={1} size="small" bordered>
            <Descriptions.Item 
              label={<span style={{ fontWeight: 600, color: '#722ed1' }}>{label}</span>}
              labelStyle={{ backgroundColor: '#f5f5f5', width: '60%' }}
            >
              {displayValue}
            </Descriptions.Item>
          </Descriptions>
        </div>
      );
    };

    // Render other simple questions
    const renderOtherQuestions = () => {
      const otherKeys = Object.keys(commonQuestions).filter(key => 
        !key.startsWith('xulyPhuPham') && 
        !key.startsWith('biogas') &&
        !key.startsWith('xulyGocRa') &&
        !key.startsWith('xulyPhan') &&
        !key.startsWith('hoatDong_') &&
        !key.startsWith('truyenThong_') &&
        !key.startsWith('khaNangTiepTuc_') &&
        !key.startsWith('matHapDan') &&
        !key.startsWith('yeuToQuanTrong_') &&
        !key.startsWith('chapThuan_')
      );

      if (otherKeys.length === 0) return null;

      const questionLabels = {
        'coTrongLua': '41. Gia đình bạn có trồng Lúa không?',
        'coNuoiDongVat': '43. Gia đình bạn có nuôi động vật nào không?',
        'kyThuatDeHayKho': '45. Kỹ thuật đó thực hiện dễ hay khó (1 cực kỳ dễ, 10 cực kỳ khó)',
        'ykienKyThuat_0': '46. Thực hiện đúng kỹ thuật sẽ giúp tăng lợi nhuận',
        'ykienKyThuat_1': '47. Thực hiện đúng kỹ thuật sẽ giúp giảm chi phí',
        'ykienKyThuat_2': '48. Thực hiện đúng kỹ thuật sẽ giúp giảm khối lượng công việc',
        'ykienKyThuat_3': '49. Thực hiện đúng kỹ thuật sẽ tốt cho môi trường',
        'ykienKyThuat_4': '50. Thực hiện đúng kỹ thuật sẽ giúp cải thiện chất lượng đất',
        'suKienThamGia': '54. Bạn sẽ tham gia sự kiện nào?',
        'loiIch1': '55. Lợi ích quan trọng nhất từ sự kiện',
        'loiIch2': '55. Lợi ích quan trọng thứ hai từ sự kiện',
        'lyDoKhongThamGia': '56. Nếu không tham gia hoạt động nào, hãy nêu lý do',
        'soNguoiChiaSeKyThuat': '60. Đã chia sẻ kỹ thuật với bao nhiêu người?',
        'duDinhChiaSe': '61. Có dự định chia sẻ kỹ thuật với hàng xóm, bạn bè?',
        'tyLeHoApDung': '64. Tỷ lệ hộ gia đình trong thôn áp dụng kỹ thuật (%)',
        'bietDanhHieuXanh': '66. Bạn có biết đến danh hiệu "Người gìn giữ tương lai xanh"?',
        'muonThamGiaXanh': '67. Bạn có muốn tham gia nhóm "Người gìn giữ tương lai xanh"?',
        'thuNhap2025': '68. Thu nhập trung bình hàng tháng năm 2025 (đồng)',
        'nguonThuNhap': '69. Nguồn thu nhập của hộ gia đình',
        'trinhDoHocVan': '70. Trình độ học vấn',
      };

      const duDinhChiaSeMap = {
        'ratCoThe': 'Rất có thể',
        'coThe': 'Có thể',
        'khoXayRa': 'Khó xảy ra',
        'ratKhoXayRa': 'Rất khó xảy ra'
      };

      const danhHieuXanhMap = {
        'nhomXanh': 'Tôi thuộc nhóm "Người gìn giữ tương lai xanh"',
        'daNghe': 'Tôi đã nghe nói về nó, nhưng tôi không tham gia',
        'khongBiet': 'Tôi không biết'
      };

      const nguonThuNhapMap = {
        'trongTrot': 'Trồng trọt',
        'chanNuoi': 'Chăn nuôi gia súc/gia cầm/Cá',
        'congNhan': 'Làm việc tại công ty',
        'doanhNghiep': 'Điều hành doanh nghiệp',
        'khac': 'Khác'
      };

      const trinhDoMap = {
        'tieuHoc': 'Tiểu học',
        'thcs': 'Trung học cơ sở',
        'thpt': 'Trung học phổ thông',
        'trungCap': 'Trung cấp',
        'caoDangDaiHoc': 'Cao đẳng/Đại học trở lên'
      };

      return (
        <Descriptions column={1} size="small" bordered style={{ marginTop: 16 }}>
          {otherKeys.map(key => {
            let displayValue = commonQuestions[key];
            const label = questionLabels[key] || key;

            if (key.startsWith('ykienKyThuat_') && typeof displayValue === 'number') {
              displayValue = yKienMap[displayValue] || displayValue;
            } else if (key === 'duDinhChiaSe') {
              displayValue = duDinhChiaSeMap[displayValue] || displayValue;
            } else if (key === 'bietDanhHieuXanh') {
              displayValue = danhHieuXanhMap[displayValue] || displayValue;
            } else if (key === 'muonThamGiaXanh') {
              displayValue = displayValue === 'co' ? 'Có' : displayValue === 'khong' ? 'Không' : displayValue;
            } else if (key === 'nguonThuNhap' && Array.isArray(displayValue)) {
              displayValue = displayValue.map(v => nguonThuNhapMap[v] || v).join(', ');
            } else if (key === 'trinhDoHocVan') {
              displayValue = trinhDoMap[displayValue] || displayValue;
            } else if (key === 'thuNhap2025' && displayValue) {
              displayValue = new Intl.NumberFormat('vi-VN').format(displayValue) + ' đồng';
            } else if (key === 'tyLeHoApDung' && displayValue) {
              displayValue = displayValue + '%';
            } else if (typeof displayValue === 'object' && displayValue !== null) {
              displayValue = JSON.stringify(displayValue, null, 2);
            } else if (displayValue === null || displayValue === undefined || displayValue === '') {
              displayValue = '-';
            } else {
              displayValue = String(displayValue);
            }

            return (
              <Descriptions.Item 
                key={key} 
                label={<span style={{ fontWeight: 600, color: '#262626' }}>{label}</span>}
                labelStyle={{ backgroundColor: '#f5f5f5', width: '50%' }}
              >
                {displayValue}
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      );
    };

    return (
      <div style={{ marginBottom: 32 }}>
        <Title level={4} style={{ color: '#722ed1', marginBottom: 16 }}>
          Phần câu hỏi chung (Common Questions)
        </Title>
        {renderXuLyPhuPhamTable()}
        {/* Render câu 41, 43 */}
        {renderSimpleQuestion('coTrongLua', '41. Gia đình bạn có trồng Lúa không?')}
        {renderXuLyGocRaTable()}
        {renderSimpleQuestion('coNuoiDongVat', '43. Gia đình bạn có nuôi động vật nào không?')}
        {renderXuLyPhanTable()}
        {/* Render câu 45 */}
        {renderSimpleQuestion('kyThuatDeHayKho', '45. Kỹ thuật đó thực hiện dễ hay khó (1 cực kỳ dễ, 10 cực kỳ khó)')}
        {/* Render câu 46-50 */}
        {renderSimpleQuestion('ykienKyThuat_0', '46. Thực hiện đúng kỹ thuật sẽ giúp tăng lợi nhuận', yKienMap)}
        {renderSimpleQuestion('ykienKyThuat_1', '47. Thực hiện đúng kỹ thuật sẽ giúp giảm chi phí', yKienMap)}
        {renderSimpleQuestion('ykienKyThuat_2', '48. Thực hiện đúng kỹ thuật sẽ giúp giảm khối lượng công việc', yKienMap)}
        {renderSimpleQuestion('ykienKyThuat_3', '49. Thực hiện đúng kỹ thuật sẽ tốt cho môi trường', yKienMap)}
        {renderSimpleQuestion('ykienKyThuat_4', '50. Thực hiện đúng kỹ thuật sẽ giúp cải thiện chất lượng đất', yKienMap)}
        {renderHoatDongTable()}
        {/* Render câu 54, 55, 56 */}
        {renderSimpleQuestion('suKienThamGia', '54. Bạn sẽ tham gia sự kiện nào?', {
          'hoTroGiongVatTu': 'Được Dự án hỗ trợ về con giống/vật tư để xây dựng mô hình',
          'tot': 'Tham gia lớp tập huấn giảng viên nguồn (TOT)',
          'ffs': 'Tham gia lớp tập huấn nông dân (FFS)',
          'farmerGroup': 'Các buổi sinh hoạt của các hợp tác xã, các chi, tổ hội nông dân nghề nghiệp, các câu lạc bộ nông dân',
          'event': 'Hội nghị truyền thông/ Sự kiện tuyên truyền/ Hội thi',
          'exchange': 'Các chuyến tham quan học tập, chia sẻ kinh nghiệm',
          'peer': 'Một người nông dân khác đã hướng dẫn tôi về kỹ thuật'
        })}
        {renderSimpleQuestion('loiIch1', '55. Lợi ích quan trọng nhất từ sự kiện', {
          'hocMoi': 'Học một cái gì đó mới',
          'giaoLuu': 'Giao lưu với các thành viên trong cộng đồng',
          'phuongPhapQuanTrong': 'Phương pháp rất quan trọng',
          'tietKiemThoiGian': 'Tiết kiệm thời gian',
          'giamKhoiLuong': 'Giảm khối lượng công việc',
          'tietKiemTien': 'Tiết kiệm tiền',
          'tangThuNhap': 'Tăng thu nhập',
          'giupSachSe': 'Giữ trang trại sạch sẽ',
          'giamMuiHoi': 'Giảm mùi hôi',
          'tangNangSuat': 'Tăng năng suất cây trồng',
          'giamSauBenh': 'Giảm sâu bệnh',
          'baoVeMoiTruong': 'Bảo vệ môi trường',
          'khac': 'Khác'
        })}
        {renderSimpleQuestion('loiIch2', '55. Lợi ích quan trọng thứ hai từ sự kiện', {
          'hocMoi': 'Học một cái gì đó mới',
          'giaoLuu': 'Giao lưu với các thành viên trong cộng đồng',
          'phuongPhapQuanTrong': 'Phương pháp rất quan trọng',
          'tietKiemThoiGian': 'Tiết kiệm thời gian',
          'giamKhoiLuong': 'Giảm khối lượng công việc',
          'tietKiemTien': 'Tiết kiệm tiền',
          'tangThuNhap': 'Tăng thu nhập',
          'giupSachSe': 'Giữ trang trại sạch sẽ',
          'giamMuiHoi': 'Giảm mùi hôi',
          'tangNangSuat': 'Tăng năng suất cây trồng',
          'giamSauBenh': 'Giảm sâu bệnh',
          'baoVeMoiTruong': 'Bảo vệ môi trường',
          'khac': 'Khác'
        })}
        {renderSimpleQuestion('lyDoKhongThamGia', '56. Nếu không tham gia hoạt động nào, hãy nêu lý do', {
          'khongBiet': 'Không biết về chúng',
          'khongLienQuan': 'Không liên quan đến tôi',
          'viTri': 'Vị trí không thuận tiện',
          'thoiGian': 'Thời gian không thuận tiện',
          'trachNhiem': 'Trách nhiệm khác',
          'khongChacChan': 'Không chắc chắn sự kiện này là về cái gì',
          'daBiet': 'Tôi đã biết về thông tin được truyền đạt',
          'khac': 'Khác'
        })}
        {renderTruyenThongTable()}
        {renderKhaNangTiepTucTable()}
        {/* Render câu 60, 61 */}
        {renderSimpleQuestion('soNguoiChiaSeKyThuat', '60. Đã chia sẻ kỹ thuật với bao nhiêu người?')}
        {renderSimpleQuestion('duDinhChiaSe', '61. Có dự định chia sẻ kỹ thuật với hàng xóm, bạn bè?', {
          'ratCoThe': 'Rất có thể',
          'coThe': 'Có thể',
          'khoXayRa': 'Khó xảy ra',
          'ratKhoXayRa': 'Rất khó xảy ra'
        })}
        {renderKhiaCanHapDanTable()}
        {renderYeuToQuanTrongTable()}
        {/* Render câu 64 */}
        {renderSimpleQuestion('tyLeHoApDung', '64. Tỷ lệ hộ gia đình trong thôn áp dụng kỹ thuật (%)', null, (val) => val + '%')}
        {renderChapThuanTable()}
        {/* Render câu 66, 67 */}
        {renderSimpleQuestion('bietDanhHieuXanh', '66. Bạn có biết đến danh hiệu "Người gìn giữ tương lai xanh"?', {
          'nhomXanh': 'Tôi thuộc nhóm "Người gìn giữ tương lai xanh"',
          'daNghe': 'Tôi đã nghe nói về nó, nhưng tôi không tham gia',
          'khongBiet': 'Tôi không biết'
        })}
        {renderSimpleQuestion('muonThamGiaXanh', '67. Bạn có muốn tham gia nhóm "Người gìn giữ tương lai xanh"?', {
          'co': 'Có',
          'khong': 'Không'
        })}
        {/* Render câu 68, 69, 70 */}
        {renderSimpleQuestion('thuNhap2025', '68. Thu nhập trung bình hàng tháng năm 2025', null, (val) => new Intl.NumberFormat('vi-VN').format(val) + ' đồng')}
        {renderSimpleQuestion('nguonThuNhap', '69. Nguồn thu nhập của hộ gia đình', {
          'trongTrot': 'Trồng trọt',
          'chanNuoi': 'Chăn nuôi gia súc/gia cầm/Cá',
          'congNhan': 'Làm việc tại công ty',
          'doanhNghiep': 'Điều hành doanh nghiệp',
          'khac': 'Khác'
        }, null, true)}
        {renderSimpleQuestion('trinhDoHocVan', '70. Trình độ học vấn', {
          'tieuHoc': 'Tiểu học',
          'thcs': 'Trung học cơ sở',
          'thpt': 'Trung học phổ thông',
          'trungCap': 'Trung cấp',
          'caoDangDaiHoc': 'Cao đẳng/Đại học trở lên'
        })}
      </div>
    );
  };

  return (
    <div style={{ maxHeight: '70vh', overflow: 'auto' }}>
      {renderByTechniqueType()}
      {renderCommonQuestions(data)}
    </div>
  );
};
