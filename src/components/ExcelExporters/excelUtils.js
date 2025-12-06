// Shared utilities for Excel export functionality

// Field label mapping for common questions - Full question text
export const fieldLabelMap = {
  // Câu 40: Xử lý phụ phẩm
  'xulyPhuPhamTruoc': '40. Xử lý phụ phẩm - Trước khi tham gia mô hình',
  'xulyPhuPhamSau': '40. Xử lý phụ phẩm - Sau khi tham gia mô hình',
  'biogasGasPercent': '40. Biogas - Ước lượng % lượng gas dùng nấu ăn/sưởi ấm',
  'biogasPhanPercent': '40. Biogas - Ước tính % phân vật nuôi cho vào hố Biogas/Tổng phân chuồng thu gom',
  'biogasNgayXaKhi': '40. Biogas - Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần',
  
  // Câu 41
  'coTrongLua': '41. Gia đình bạn có trồng Lúa không?',
  
  // Câu 42: Xử lý gốc rạ
  'xulyGocRaTruoc': '42. Xử lý gốc rạ - Trước khi tham gia mô hình',
  'xulyGocRaSau': '42. Xử lý gốc rạ - Sau khi tham gia mô hình',
  
  // Câu 43
  'coNuoiDongVat': '43. Gia đình bạn có nuôi động vật nào không?',
  
  // Câu 44: Xử lý phân gia súc
  'xulyPhanTruoc': '44. Xử lý phân gia súc - Trước khi tham gia mô hình',
  'xulyPhanSau': '44. Xử lý phân gia súc - Sau khi tham gia mô hình',
  'biogasPhanGasPercent': '44. Hầm Biogas - Ước lượng % lượng gas dùng nấu ăn/sưởi ấm',
  'biogasPhanPhanPercent': '44. Hầm Biogas - Ước tính % phân vật nuôi cho vào hố Biogas/Tổng phân chuồng thu gom',
  'biogasPhanNgayXaKhi': '44. Hầm Biogas - Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần',
  
  // Câu 45
  'kyThuatDeHayKho': '45. Kỹ thuật đó thực hiện dễ hay khó (1 cực kỳ dễ, 10 cực kỳ khó)',
  
  // Câu 46-50
  'ykienKyThuat_0': '46. Thực hiện đúng kỹ thuật sẽ giúp tăng lợi nhuận',
  'ykienKyThuat_1': '47. Thực hiện đúng kỹ thuật sẽ giúp giảm chi phí',
  'ykienKyThuat_2': '48. Thực hiện đúng kỹ thuật sẽ giúp giảm khối lượng công việc',
  'ykienKyThuat_3': '49. Thực hiện đúng kỹ thuật sẽ tốt cho môi trường',
  'ykienKyThuat_4': '50. Thực hiện đúng kỹ thuật sẽ giúp cải thiện chất lượng đất',
  
  // Câu 54
  'suKienThamGia': '54. Bạn sẽ tham gia sự kiện nào?',
  
  // Câu 55
  'loiIch1': '55. Lợi ích quan trọng nhất của các sự kiện đã tham dự',
  'loiIch2': '55. Lợi ích quan trọng thứ hai của các sự kiện đã tham dự',
  
  // Câu 56
  'lyDoKhongThamGia': '56. Nếu không tham gia hoạt động nào, hãy nêu lý do',
  
  // Câu 60
  'soNguoiChiaSeKyThuat': '60. Bạn đã từng chia sẻ kỹ thuật này với bao nhiêu người? (0=chưa từng chia sẻ)',
  
  // Câu 61
  'duDinhChiaSe': '61. Trong tương lai, bạn có dự định chia sẻ những kỹ thuật này với hàng xóm, bạn bè và người thân không?',
  
  // Câu 64
  'tyLeHoApDung': '64. Theo bạn, hiện nay tỷ lệ hộ gia đình trong thôn áp dụng kỹ thuật như bạn là bao nhiêu?',
  
  // Câu 66
  'bietDanhHieuXanh': '66. Bạn có biết đến tên gọi/ danh hiệu "Người gìn giữ tương lai xanh" không?',
  
  // Câu 67
  'muonThamGiaXanh': '67. Bạn có muốn tham gia nhóm "Người gìn giữ tương lai xanh" không?',
  
  // Câu 68
  'thuNhap2025': '68. Ước tính thu nhập trung bình hàng tháng trong năm 2025 của hộ gia đình (đồng)',
  
  // Câu 69
  'nguonThuNhap': '69. Nguồn thu nhập của hộ gia đình bạn từ đâu?',
  
  // Câu 70
  'trinhDoHocVan': '70. Trình độ học vấn của bạn?',
};

// Section name mapping
export const sectionNameMap = {
  'sectionA': 'Section A',
  'sectionB': 'Section B',
  'sectionC': 'Section C',
  'sectionD': 'Section D',
};

// Map technique slugs to readable names
export const techniqueNameMap = {
  'len-men-phu-pham': 'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi',
  'nuoi-ga-dem-lot': 'Nuôi gà trên đệm lót sinh học',
  'nuoi-sau-canxi': 'Nuôi sâu canxi',
  'nuoi-trun-que': 'Nuôi trùn quế',
  'u-phan-huu-co-tai-ruong': 'Ủ phân hữu cơ tại ruộng',
  'xu-ly-goc-ra-che-pham': 'Xử lý gốc rạ bằng chế phẩm sinh học',
};

/**
 * Helper function to create readable label from field key
 * @param {string} key - The field key to convert
 * @returns {string} Human-readable label
 */
export const createFieldLabel = (key) => {
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
    
    // Convert camelCase and Vietnamese field names to readable format
    const cleanFieldName = fieldName
      // Keep Vietnamese characters intact
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/_/g, ' ') // Replace underscores with spaces
      .trim()
      .replace(/\s+/g, ' ') // Remove multiple spaces
      // Capitalize first letter of each word
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
      // Fix common Vietnamese words that were incorrectly lowercased
      .replace(/\bsâu\b/gi, 'Sâu')
      .replace(/\bcanxi\b/gi, 'canxi')
      .replace(/\btrùn\b/gi, 'trùn')
      .replace(/\bquế\b/gi, 'quế')
      .replace(/\bgà\b/gi, 'gà')
      .replace(/\bđệm\b/gi, 'đệm')
      .replace(/\blót\b/gi, 'lót')
      .replace(/\blúa\b/gi, 'lúa')
      .replace(/\brạ\b/gi, 'rạ')
      .replace(/\bgốc\b/gi, 'gốc')
      .replace(/\bphân\b/gi, 'phân')
      .replace(/\bhữu\b/gi, 'hữu')
      .replace(/\bcơ\b/gi, 'cơ')
      .replace(/\bng[aà]y\b/gi, match => match.toLowerCase())
      .replace(/\bsố\b/gi, 'số')
      .replace(/\blứa\b/gi, 'lứa')
      .replace(/\btổng\b/gi, 'tổng')
      .replace(/\bchi\s*phí\b/gi, 'chi phí')
      .replace(/\bkhối\s*lượng\b/gi, 'khối lượng')
      .replace(/\bdiện\s*tích\b/gi, 'diện tích')
      .replace(/\bvật\s*nuôi\b/gi, 'vật nuôi')
      .replace(/\bcây\s*trồng\b/gi, 'cây trồng')
      .replace(/\bphụ\s*phẩm\b/gi, 'phụ phẩm')
      .replace(/\bgiống\b/gi, 'giống')
      .replace(/\bvụ\b/gi, 'vụ')
      .replace(/\blao\s*động\b/gi, 'lao động')
      .replace(/\bnông\s*nghiệp\b/gi, 'nông nghiệp')
      .replace(/\bsản\s*xuất\b/gi, 'sản xuất')
      .replace(/\bthức\s*ăn\b/gi, 'thức ăn');
    
    return `${sectionLabel} - Phần ${partNumber} - ${cleanFieldName}`;
  }

  // Parse nested field: field.subfield
  const dotMatch = key.match(/^([^.]+)\.(.+)$/);
  if (dotMatch) {
    const [, parent, child] = dotMatch;
    const cleanParent = parent
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
      
    const cleanChild = child
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
      
    return `${cleanParent} - ${cleanChild}`;
  }

  // Default: clean up underscores and camelCase while preserving Vietnamese
  const cleaned = key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/_/g, ' ') // Replace underscores with spaces
    .trim()
    .replace(/\s+/g, ' ') // Remove multiple spaces
    // Capitalize first letter of each word
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    // Fix common Vietnamese words
    .replace(/\bsâu\b/gi, 'Sâu')
    .replace(/\bcanxi\b/gi, 'canxi')
    .replace(/\btrùn\b/gi, 'trùn')
    .replace(/\bquế\b/gi, 'quế')
    .replace(/\bgà\b/gi, 'gà')
    .replace(/\bng[aà]y\b/gi, match => match.toLowerCase())
    .replace(/\bsố\b/gi, 'số')
    .replace(/\blứa\b/gi, 'lứa')
    .replace(/\bchi\s*phí\b/gi, 'chi phí')
    .replace(/\bkhối\s*lượng\b/gi, 'khối lượng')
    .replace(/\bdiện\s*tích\b/gi, 'diện tích');
    
  return cleaned;
};

/**
 * Helper function to flatten data into single row with human-readable labels
 * @param {Object} data - The nested data object to flatten
 * @returns {Object} Flattened object with readable labels as keys
 */
export const flattenDataForExcel = (data) => {
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

/**
 * Apply beautiful styling to Excel worksheet
 * @param {Object} worksheet - XLSX worksheet object
 * @param {Array} sheetData - Array of row objects
 */
export const applyExcelStyling = (worksheet, sheetData) => {
  if (!sheetData || sheetData.length === 0) return;

  const range = worksheet['!ref'];
  if (!range) return;

  const decode = (cell) => {
    const match = cell.match(/([A-Z]+)(\d+)/);
    return match ? { col: match[1], row: parseInt(match[2]) } : null;
  };

  // Get the number of columns
  const headers = Object.keys(sheetData[0]);
  const numCols = headers.length;
  const numRows = sheetData.length + 1; // +1 for header row

  // Helper to convert column number to letter (0 = A, 1 = B, etc.)
  const colToLetter = (num) => {
    let letter = '';
    while (num >= 0) {
      letter = String.fromCharCode((num % 26) + 65) + letter;
      num = Math.floor(num / 26) - 1;
    }
    return letter;
  };

  // Style for header row (row 1)
  const headerStyle = {
    font: { 
      name: 'Arial', 
      sz: 11, 
      bold: true, 
      color: { rgb: 'FFFFFF' } 
    },
    fill: { 
      fgColor: { rgb: '4472C4' } // Blue background
    },
    alignment: { 
      horizontal: 'center', 
      vertical: 'center', 
      wrapText: true 
    },
    border: {
      top: { style: 'thin', color: { rgb: '000000' } },
      bottom: { style: 'thin', color: { rgb: '000000' } },
      left: { style: 'thin', color: { rgb: '000000' } },
      right: { style: 'thin', color: { rgb: '000000' } }
    }
  };

  // Style for data rows (alternating colors)
  const dataStyleEven = {
    font: { name: 'Arial', sz: 10 },
    fill: { fgColor: { rgb: 'FFFFFF' } }, // White
    alignment: { vertical: 'center', wrapText: true },
    border: {
      top: { style: 'thin', color: { rgb: 'D3D3D3' } },
      bottom: { style: 'thin', color: { rgb: 'D3D3D3' } },
      left: { style: 'thin', color: { rgb: 'D3D3D3' } },
      right: { style: 'thin', color: { rgb: 'D3D3D3' } }
    }
  };

  const dataStyleOdd = {
    font: { name: 'Arial', sz: 10 },
    fill: { fgColor: { rgb: 'F2F2F2' } }, // Light gray
    alignment: { vertical: 'center', wrapText: true },
    border: {
      top: { style: 'thin', color: { rgb: 'D3D3D3' } },
      bottom: { style: 'thin', color: { rgb: 'D3D3D3' } },
      left: { style: 'thin', color: { rgb: 'D3D3D3' } },
      right: { style: 'thin', color: { rgb: 'D3D3D3' } }
    }
  };

  // Apply styles to all cells
  for (let col = 0; col < numCols; col++) {
    const colLetter = colToLetter(col);
    
    for (let row = 1; row <= numRows; row++) {
      const cellRef = `${colLetter}${row}`;
      
      if (!worksheet[cellRef]) {
        worksheet[cellRef] = { t: 's', v: '' };
      }

      if (row === 1) {
        // Header row
        worksheet[cellRef].s = headerStyle;
      } else {
        // Data rows - alternating colors
        worksheet[cellRef].s = (row % 2 === 0) ? dataStyleEven : dataStyleOdd;
      }
    }
  }

  // Set row heights
  if (!worksheet['!rows']) worksheet['!rows'] = [];
  worksheet['!rows'][0] = { hpt: 30 }; // Header row height
  for (let i = 1; i < numRows; i++) {
    worksheet['!rows'][i] = { hpt: 20 }; // Data row height
  }
};

/**
 * Auto-size columns based on content
 * @param {Array} sheetData - Array of row objects
 * @returns {Array} Column width configurations
 */
export const calculateColumnWidths = (sheetData) => {
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
  }
  return colWidths;
};

/**
 * Truncate sheet name to Excel's 31 character limit
 * @param {string} name - The sheet name
 * @returns {string} Truncated name
 */
export const truncateSheetName = (name) => {
  return name.length > 31 ? name.substring(0, 28) + '...' : name;
};

/**
 * Extract general info data from record
 * @param {Object} record - The submission record
 * @returns {Object} General info fields with readable labels
 */
export const extractGeneralInfo = (record) => {
  return {
    'Họ tên': record.ho_ten || '',
    'Năm sinh': record.nam_sinh || '',
    'Số điện thoại': record.so_dien_thoai || '',
    'Thôn': record.thon || '',
    'Xã': record.xa || '',
    'Tỉnh': record.tinh || '',
  };
};

/**
 * Extract common form questions (câu 40-70) from data
 * @param {Object} data - The submission data object
 * @returns {Object} Common questions with readable labels
 */
export const extractCommonFormData = (data) => {
  const commonData = {};
  
  if (!data) return commonData;
  
  // List of common question field names (actual field names used in CommonForm)
  const commonFieldNames = [
    // Câu 40-44
    'xulyPhuPhamTruoc', 'xulyPhuPhamSau', 'biogasGasPercent', 'biogasPhanPercent', 'biogasNgayXaKhi',
    'coTrongLua', 'xulyGocRaTruoc', 'xulyGocRaSau', 'coNuoiDongVat',
    'xulyPhanTruoc', 'xulyPhanSau', 'biogasPhanGasPercent', 'biogasPhanPhanPercent', 'biogasPhanNgayXaKhi',
    
    // Câu 45-50
    'kyThuatDeHayKho', 'ykienKyThuat_0', 'ykienKyThuat_1', 'ykienKyThuat_2', 'ykienKyThuat_3', 'ykienKyThuat_4',
    
    // Câu 54-56
    'suKienThamGia', 'loiIch1', 'loiIch2', 'lyDoKhongThamGia',
    
    // Câu 60-61
    'soNguoiChiaSeKyThuat', 'duDinhChiaSe',
    
    // Câu 64, 66-70
    'tyLeHoApDung', 'bietDanhHieuXanh', 'muonThamGiaXanh', 'thuNhap2025', 'nguonThuNhap', 'trinhDoHocVan',
  ];
  
  // Extract basic common fields
  commonFieldNames.forEach(fieldName => {
    if (data[fieldName] !== undefined) {
      const label = fieldLabelMap[fieldName] || fieldName;
      // Handle arrays and objects
      if (typeof data[fieldName] === 'object' && data[fieldName] !== null) {
        commonData[label] = JSON.stringify(data[fieldName]);
      } else {
        commonData[label] = data[fieldName] || '';
      }
    }
  });
  
  // Câu 51-53: Hoạt động liên quan xử lý chất thải
  const hoatDongLabels = [
    "Được Dự án hỗ trợ về con giống/vật tư để xây dựng mô hình",
    "Tham gia lớp tập huấn giảng viên nguồn (TOT)",
    "Tham gia lớp tập huấn nông dân (FFS)",
    "Các buổi sinh hoạt của các hợp tác xã, các chi, tổ hội nông dân nghề nghiệp, các câu lạc bộ nông dân",
    "Hội nghị truyền thông/ Sự kiện tuyên truyền/ Hội thi",
    "Các chuyến tham quan học tập, chia sẻ kinh nghiệm",
    "Một người nông dân khác đã hướng dẫn tôi về kỹ thuật"
  ];
  
  for (let idx = 0; idx < 7; idx++) {
    const hoatDongName = hoatDongLabels[idx] || `Hoạt động ${idx + 1}`;
    
    if (data[`hoatDong_${idx}_ngheNoi`] !== undefined) {
      commonData[`51. ${hoatDongName} - Đã nghe nói về nó`] = data[`hoatDong_${idx}_ngheNoi`] || '';
    }
    if (data[`hoatDong_${idx}_thamDu`] !== undefined) {
      commonData[`52. ${hoatDongName} - Đã tham dự`] = data[`hoatDong_${idx}_thamDu`] || '';
    }
    if (data[`hoatDong_${idx}_anhHuong`] !== undefined) {
      commonData[`53. ${hoatDongName} - Ảnh hưởng đến quyết định áp dụng kỹ thuật`] = data[`hoatDong_${idx}_anhHuong`] || '';
    }
  }
  
  // Câu 57-58: Truyền thông
  const truyenThongLabels = [
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
  
  for (let idx = 0; idx < 10; idx++) {
    const truyenThongName = truyenThongLabels[idx] || `Phương tiện ${idx + 1}`;
    
    if (data[`truyenThong_${idx}_ngheNoi`] !== undefined) {
      commonData[`57. ${truyenThongName} - Đã nghe nói hoặc nhìn thấy nó`] = data[`truyenThong_${idx}_ngheNoi`] || '';
    }
    if (data[`truyenThong_${idx}_anhHuong`] !== undefined) {
      commonData[`58. ${truyenThongName} - Ảnh hưởng đến quyết định áp dụng kỹ thuật`] = data[`truyenThong_${idx}_anhHuong`] || '';
    }
  }
  
  // Câu 59: Khả năng tiếp tục
  const khaNangTiepTucLabels = [
    "Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
    "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
    "Xử lý gốc rạ bằng chế phẩm sinh học",
    "Nuôi trùn quế",
    "Nuôi sâu canxi",
    "Nuôi gà trên đệm lót sinh học dày"
  ];
  
  for (let idx = 0; idx < 6; idx++) {
    if (data[`khaNangTiepTuc_${idx}`] !== undefined) {
      const phuongPhap = khaNangTiepTucLabels[idx] || `Phương pháp ${idx + 1}`;
      commonData[`59. Khả năng tiếp tục sử dụng - ${phuongPhap}`] = data[`khaNangTiepTuc_${idx}`] || '';
    }
  }
  
  // Câu 62: Mặt hấp dẫn
  const kyThuatLabels = [
    "Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
    "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
    "Xử lý gốc rạ bằng chế phẩm sinh học",
    "Nuôi trùn quế",
    "Nuôi sâu canxi",
    "Nuôi gà trên đệm lót sinh học dày"
  ];
  
  for (let idx = 0; idx < 6; idx++) {
    const kyThuat = kyThuatLabels[idx] || `Kỹ thuật ${idx + 1}`;
    
    if (data[`matHapDanNhat_${idx}`] !== undefined) {
      commonData[`62. ${kyThuat} - Mặt hấp dẫn nhất`] = data[`matHapDanNhat_${idx}`] || '';
    }
    if (data[`matHapDanHai_${idx}`] !== undefined) {
      commonData[`62. ${kyThuat} - Mặt hấp dẫn thứ hai`] = data[`matHapDanHai_${idx}`] || '';
    }
  }
  
  // Câu 63: Yếu tố quan trọng
  const yeuToLabels = [
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
  
  for (let idx = 0; idx < 9; idx++) {
    if (data[`yeuToQuanTrong_${idx}`] !== undefined) {
      const yeuTo = yeuToLabels[idx] || `Yếu tố ${idx + 1}`;
      commonData[`63. Mức độ quan trọng - ${yeuTo}`] = data[`yeuToQuanTrong_${idx}`] || '';
    }
  }
  
  // Câu 65: Chấp thuận
  const phuongPhapLabels = [
    "Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
    "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
    "Xử lý gốc rạ bằng chế phẩm sinh học",
    "Nuôi trùn quế",
    "Nuôi sâu canxi",
    "Nuôi gà trên đệm lót sinh học dày"
  ];
  
  for (let idx = 0; idx < 6; idx++) {
    if (data[`chapThuan_${idx}`] !== undefined) {
      const phuongPhap = phuongPhapLabels[idx] || `Phương pháp ${idx + 1}`;
      commonData[`65. Mức độ ủng hộ - ${phuongPhap}`] = data[`chapThuan_${idx}`] || '';
    }
  }
  
  return commonData;
};

/**
 * Extract technique-specific data (sections A, B, C, D) from data
 * @param {Object} data - The submission data object
 * @returns {Object} Technique data with readable labels
 */
export const extractTechniqueData = (data) => {
  const techniqueData = {};
  
  if (!data) return techniqueData;
  
  // Extract only section data (A, B, C, D)
  const sections = ['sectionA', 'sectionB', 'sectionC', 'sectionD'];
  
  sections.forEach(sectionKey => {
    if (data[sectionKey] && Array.isArray(data[sectionKey])) {
      data[sectionKey].forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          Object.keys(item).forEach(subKey => {
            const arrayKey = `${sectionKey}[${index}].${subKey}`;
            const subValue = item[subKey];
            const label = createFieldLabel(arrayKey);
            
            if (typeof subValue === 'object' && subValue !== null && !Array.isArray(subValue)) {
              // Nested object
              Object.keys(subValue).forEach(subSubKey => {
                const nestedLabel = createFieldLabel(`${arrayKey}.${subSubKey}`);
                techniqueData[nestedLabel] = subValue[subSubKey] || '';
              });
            } else if (Array.isArray(subValue)) {
              techniqueData[label] = JSON.stringify(subValue);
            } else {
              techniqueData[label] = subValue || '';
            }
          });
        }
      });
    }
  });
  
  return techniqueData;
};
