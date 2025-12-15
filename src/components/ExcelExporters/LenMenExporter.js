import * as XLSX from 'xlsx';
import dayjs from 'dayjs';
import { 
  calculateColumnWidths, 
  techniqueNameMap,
  techniqueFieldLabels,
  extractGeneralInfo,
  extractTechniqueData,
  extractCommonFormData,
  applyExcelStyling,
} from './excelUtils';

/**
 * Export Lên men phụ phẩm technique data to Excel sheet
 * @param {Object} wb - XLSX workbook object
 * @param {Array} records - Array of submission records for this technique
 * @param {string} techType - Technique type slug
 */
export const exportLenMenSheet = (wb, records, techType) => {
  const sheetName = techniqueNameMap[techType] || techType;
  const fieldLabels = techniqueFieldLabels[techType] || {};
  
  // Build single header row
  const headerRow = ['STT', 'Ngày gửi'];
  
  // Add General Info headers
  const generalHeaders = ['Họ tên', 'Năm sinh', 'Số điện thoại', 'Thôn', 'Xã', 'Tỉnh'];
  headerRow.push(...generalHeaders);
  
  // Get technique and common headers from first record
  let techniqueHeaders = [];
  let commonHeaders = [];
  if (records.length > 0 && records[0].data) {
    const techniqueData = extractTechniqueData(records[0].data, techType);
    const commonData = extractCommonFormData(records[0].data);
    techniqueHeaders = Object.keys(techniqueData);
    commonHeaders = Object.keys(commonData);

    const sectionCKeys = [
      'tenVatNuoi',
      'soLuaTruocMen','soLuaSauMen',
      'soNgayNuoiTruocMen','soNgayNuoiSauMen',
      'soLuongVatNuoiTruoc','soLuongVatNuoiSau',
      'sauMen_kg_0','sauMen_kg_1','sauMen_kg_2','sauMen_kg_3','sauMen_kg_4',
      'truocMen_kg_0','truocMen_kg_1','truocMen_kg_2','truocMen_kg_3',
      'sauMen_tien_0','sauMen_tien_1','sauMen_tien_2','sauMen_tien_3','sauMen_tien_4',
      'truocMen_tien_0','truocMen_tien_1','truocMen_tien_2','truocMen_tien_3',
      'tienThuocSauMen','tienThuocTruocMen',
      'vatNuoiBiBenhSau','vatNuoiBiBenhTruoc',
      'danhGiaSucKhoeSau','danhGiaSucKhoeTruoc',
      'vatNuoiPhatTrienSau','vatNuoiPhatTrienTruoc',
      'thoiGianNuoiSau','thoiGianNuoiTruoc',
      'trongLuongXuatSau','trongLuongXuatTruoc',
      'giaBanSau','giaBanTruoc',
      'thanhTienSau','thanhTienTruoc'
    ];

    const sectionCLabels = sectionCKeys
      .map(k => (techniqueFieldLabels[techType] && techniqueFieldLabels[techType][k]) || null)
      .filter(Boolean);

    techniqueHeaders = techniqueHeaders.filter(h => !sectionCLabels.includes(h));
  }
  
  // Add Technique Section A, B headers
  headerRow.push(...techniqueHeaders);
  
  // Add Section C comparison headers based on techniqueFieldLabels order
  // Following the exact order in techniqueFieldLabels['len-men-phu-pham']
  
  // 5a. Tên vật nuôi
  headerRow.push(fieldLabels['tenVatNuoi'] || '5a. Tên vật nuôi sử dụng thức ăn ủ lên men');
  
  // 5b. Số lứa (TRƯỚC -> SAU)
  headerRow.push(fieldLabels['soLuaTruocMen'] || '5b. Số lứa (TRƯỚC)');
  headerRow.push(fieldLabels['soLuaSauMen'] || '5b. Số lứa (SAU)');
  
  // 5b. Số ngày/lứa (TRƯỚC -> SAU)
  headerRow.push(fieldLabels['soNgayNuoiTruocMen'] || '5b. Số ngày/lứa (TRƯỚC)');
  headerRow.push(fieldLabels['soNgayNuoiSauMen'] || '5b. Số ngày/lứa (SAU)');
  
  // 5c. Số lượng vật nuôi (TRƯỚC -> SAU)
  headerRow.push(fieldLabels['soLuongVatNuoiTruoc'] || '5c. Số lượng vật nuôi (TRƯỚC)');
  headerRow.push(fieldLabels['soLuongVatNuoiSau'] || '5c. Số lượng vật nuôi (SAU)');
  
  // 6a. Thức ăn - Kg (SAU 5 items trước, rồi TRƯỚC 4 items - theo thứ tự trong fieldLabels)
  // SAU: 5 loại thức ăn
  for (let i = 0; i < 5; i++) {
    // headerRow.push(`SAU - 6a. Tên thức ăn ${i+1}`);
    headerRow.push(fieldLabels[`sauMen_kg_${i}`] || `SAU - 6a. Kg ${i+1}`);
  }
  // TRƯỚC: 4 loại thức ăn
  for (let i = 0; i < 4; i++) {
    // headerRow.push(`TRƯỚC - 6a. Tên thức ăn ${i+1}`);
    headerRow.push(fieldLabels[`truocMen_kg_${i}`] || `TRƯỚC - 6a. Kg ${i+1}`);
  }
  
  // 6b. Chi phí thức ăn (SAU 5 items trước, rồi TRƯỚC 4 items - theo thứ tự trong fieldLabels)
  // SAU: 5 loại
  for (let i = 0; i < 5; i++) {
    // headerRow.push(`SAU - 6b. Tên thức ăn ${i+1}`);
    headerRow.push(fieldLabels[`sauMen_tien_${i}`] || `SAU - 6b. Đồng ${i+1}`);
  }
  // TRƯỚC: 4 loại
  for (let i = 0; i < 4; i++) {
    // headerRow.push(`TRƯỚC - 6b. Tên thức ăn ${i+1}`);
    headerRow.push(fieldLabels[`truocMen_tien_${i}`] || `TRƯỚC - 6b. Đồng ${i+1}`);
  }
  
  // 6c. Tiền thuốc (SAU -> TRƯỚC theo thứ tự trong fieldLabels)
  headerRow.push(fieldLabels['tienThuocSauMen'] || '6c. Số tiền chi mua thuốc thú y (SAU)');
  headerRow.push(fieldLabels['tienThuocTruocMen'] || '6c. Số tiền chi mua thuốc thú y (TRƯỚC)');
  
  // 6d. Vật nuôi bị bệnh (SAU -> TRƯỚC)
  headerRow.push(fieldLabels['vatNuoiBiBenhSau'] || '6d. Vật nuôi có bị bất kỳ bệnh nào không (SAU)');
  headerRow.push(fieldLabels['vatNuoiBiBenhTruoc'] || '6d. Vật nuôi có bị bất kỳ bệnh nào không (TRƯỚC)');
  
  // 6e. Đánh giá sức khỏe (SAU -> TRƯỚC)
  headerRow.push(fieldLabels['danhGiaSucKhoeSau'] || '6e. Bạn đánh giá sức khỏe vật nuôi như thế nào (SAU)');
  headerRow.push(fieldLabels['danhGiaSucKhoeTruoc'] || '6e. Bạn đánh giá sức khỏe vật nuôi như thế nào (TRƯỚC)');
  
  // 6f. Vật nuôi phát triển nhanh (SAU -> TRƯỚC)
  headerRow.push(fieldLabels['vatNuoiPhatTrienSau'] || '6f. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (SAU)');
  headerRow.push(fieldLabels['vatNuoiPhatTrienTruoc'] || '6f. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (TRƯỚC)');
  
  // 6g. Thời gian nuôi (SAU -> TRƯỚC)
  headerRow.push(fieldLabels['thoiGianNuoiSau'] || '6g. Thời gian nuôi đến khi xuất chuồng (tháng) (SAU)');
  headerRow.push(fieldLabels['thoiGianNuoiTruoc'] || '6g. Thời gian nuôi đến khi xuất chuồng (tháng) (TRƯỚC)');
  
  // 6h. Trọng lượng xuất chuồng (SAU -> TRƯỚC)
  headerRow.push(fieldLabels['trongLuongXuatSau'] || '6h. Trọng lượng trung bình khi xuất chuồng (kg/con) (SAU)');
  headerRow.push(fieldLabels['trongLuongXuatTruoc'] || '6h. Trọng lượng trung bình khi xuất chuồng (kg/con) (TRƯỚC)');
  
  // 6i. Giá bán (SAU -> TRƯỚC)
  headerRow.push(fieldLabels['giaBanSau'] || '6i. Giá bán (đồng/kg) (SAU)');
  headerRow.push(fieldLabels['giaBanTruoc'] || '6i. Giá bán (đồng/kg) (TRƯỚC)');
  
  // 6j. Thành tiền (SAU -> TRƯỚC)
  headerRow.push(fieldLabels['thanhTienSau'] || '6j. Thành tiền (đồng) (SAU)');
  headerRow.push(fieldLabels['thanhTienTruoc'] || '6j. Thành tiền (đồng) (TRƯỚC)');
  
  // Add Common Form headers at the end
  headerRow.push(...commonHeaders);
  
  // Build top-level header row with grouped columns
  const totalCols = headerRow.length;
  const topHeader = new Array(totalCols).fill('');
  
  // Track column positions
  let colIndex = 0;
  
  // Meta columns: STT, Ngày gửi
  const metaStart = colIndex;
  topHeader[colIndex++] = 'Thông tin cơ bản';
  topHeader[colIndex++] = '';
  const metaEnd = colIndex - 1;
  
  // General Info columns: Họ tên, Năm sinh, SĐT, Thôn, Xã, Tỉnh
  const genStart = colIndex;
  topHeader[colIndex++] = 'Thông tin người tham gia';
  for (let i = 1; i < generalHeaders.length; i++) {
    topHeader[colIndex++] = '';
  }
  const genEnd = colIndex - 1;
  
  // Technique columns (Section A & B)
  const techStart = colIndex;
  if (techniqueHeaders.length > 0) {
    topHeader[colIndex++] = 'Kỹ thuật lên men (Section A & B)';
    for (let i = 1; i < techniqueHeaders.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const techEnd = colIndex - 1;
  
  // Section C comparison columns (59 columns total)
  const sectionCStart = colIndex;
  topHeader[colIndex++] = 'So sánh trước/sau khi áp dụng kỹ thuật (Section C)';
  for (let i = 1; i < 59; i++) {
    topHeader[colIndex++] = '';
  }
  const sectionCEnd = colIndex - 1;
  
  // Common Form columns
  const commonStart = colIndex;
  if (commonHeaders.length > 0) {
    topHeader[colIndex++] = 'Câu hỏi chung (Q40-Q70)';
    for (let i = 1; i < commonHeaders.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const commonEnd = colIndex - 1;
  
  // Build data rows with 2-level headers
  const aoa = [topHeader, headerRow];
  
  records.forEach((record, idx) => {
    const row = [];
    
    // STT and Date
    row.push(idx + 1);
    row.push(record.submitted_at ? dayjs(record.submitted_at).format('DD/MM/YYYY HH:mm') : '');
    
    // General Info
    row.push(record.ho_ten || '');
    row.push(record.nam_sinh || '');
    row.push(record.so_dien_thoai || '');
    row.push(record.thon || '');
    row.push(record.xa || '');
    row.push(record.tinh || '');
    
    // Technique data (Sections A, B)
    if (record.data && typeof record.data === 'object') {
      const techniqueData = extractTechniqueData(record.data, techType);
      techniqueHeaders.forEach(header => {
        row.push(techniqueData[header] || '');
      });
    } else {
      techniqueHeaders.forEach(() => row.push(''));
    }
    
    // Section C comparison data - following same order as headers
    const c0 = (record.data?.sectionC && Array.isArray(record.data.sectionC) && record.data.sectionC[0]) 
      ? record.data.sectionC[0] 
      : null;
    
    // 5a. Tên vật nuôi
    row.push(c0?.tenVatNuoi || '');
    
    // 5b. Số lứa (TRƯỚC -> SAU)
    row.push(c0?.soLuaTruocMen || '');
    row.push(c0?.soLuaSauMen || '');
    
    // 5b. Số ngày/lứa (TRƯỚC -> SAU)
    row.push(c0?.soNgayNuoiTruocMen || '');
    row.push(c0?.soNgayNuoiSauMen || '');
    
    // 5c. Số lượng vật nuôi (TRƯỚC -> SAU)
    row.push(c0?.soLuongVatNuoiTruoc || '');
    row.push(c0?.soLuongVatNuoiSau || '');
    
    // 6a. Thức ăn - Kg (SAU 5 items, rồi TRƯỚC 4 items)
    for (let i = 0; i < 5; i++) {
      // row.push(c0?.[`sauMen_tenThucAn_${i}`] || '');
      row.push(c0?.[`sauMen_kg_${i}`] || '');
    }
    for (let i = 0; i < 4; i++) {
      // row.push(c0?.[`truocMen_tenThucAn_${i}`] || '');
      row.push(c0?.[`truocMen_kg_${i}`] || '');
    }
    
    // 6b. Chi phí thức ăn (SAU 5 items, rồi TRƯỚC 4 items)
    for (let i = 0; i < 5; i++) {
      // row.push(c0?.[`sauMen_tenThucAnTien_${i}`] || '');
      row.push(c0?.[`sauMen_tien_${i}`] || '');
    }
    for (let i = 0; i < 4; i++) {
      // row.push(c0?.[`truocMen_tenThucAnTien_${i}`] || '');
      row.push(c0?.[`truocMen_tien_${i}`] || '');
    }
    
    // 6c. Tiền thuốc (SAU -> TRƯỚC)
    row.push(c0?.tienThuocSauMen || '');
    row.push(c0?.tienThuocTruocMen || '');
    
    // 6d. Vật nuôi bị bệnh (SAU -> TRƯỚC)
    row.push(c0?.vatNuoiBiBenhSau || '');
    row.push(c0?.vatNuoiBiBenhTruoc || '');
    
    // 6e. Đánh giá sức khỏe (SAU -> TRƯỚC)
    row.push(c0?.danhGiaSucKhoeSau || '');
    row.push(c0?.danhGiaSucKhoeTruoc || '');
    
    // 6f. Vật nuôi phát triển nhanh (SAU -> TRƯỚC)
    row.push(c0?.vatNuoiPhatTrienSau || '');
    row.push(c0?.vatNuoiPhatTrienTruoc || '');
    
    // 6g. Thời gian nuôi (SAU -> TRƯỚC)
    row.push(c0?.thoiGianNuoiSau || '');
    row.push(c0?.thoiGianNuoiTruoc || '');
    
    // 6h. Trọng lượng xuất chuồng (SAU -> TRƯỚC)
    row.push(c0?.trongLuongXuatSau || '');
    row.push(c0?.trongLuongXuatTruoc || '');
    
    // 6i. Giá bán (SAU -> TRƯỚC)
    row.push(c0?.giaBanSau || '');
    row.push(c0?.giaBanTruoc || '');
    
    // 6j. Thành tiền (SAU -> TRƯỚC)
    row.push(c0?.thanhTienSau || '');
    row.push(c0?.thanhTienTruoc || '');
    
    // Common Form data
    if (record.data && typeof record.data === 'object') {
      const commonData = extractCommonFormData(record.data);
      commonHeaders.forEach(header => {
        row.push(commonData[header] || '');
      });
    } else {
      commonHeaders.forEach(() => row.push(''));
    }
    
    aoa.push(row);
  });
  
  // Create worksheet from array of arrays
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  
  // Define merged cells for top header row (row 0)
  const merges = [];
  
  // Meta columns merge (STT, Ngày gửi)
  if (metaEnd >= metaStart) {
    merges.push({ s: { r: 0, c: metaStart }, e: { r: 0, c: metaEnd } });
  }
  
  // General Info merge
  if (genEnd >= genStart) {
    merges.push({ s: { r: 0, c: genStart }, e: { r: 0, c: genEnd } });
  }
  
  // Technique Section A & B merge
  if (techEnd >= techStart) {
    merges.push({ s: { r: 0, c: techStart }, e: { r: 0, c: techEnd } });
  }
  
  // Section C comparison merge
  if (sectionCEnd >= sectionCStart) {
    merges.push({ s: { r: 0, c: sectionCStart }, e: { r: 0, c: sectionCEnd } });
  }
  
  // Common Form merge
  if (commonEnd >= commonStart) {
    merges.push({ s: { r: 0, c: commonStart }, e: { r: 0, c: commonEnd } });
  }
  
  ws['!merges'] = merges;
  
  // Set column widths
  ws['!cols'] = [];
  ws['!cols'].push({ wch: 5 });   // STT
  ws['!cols'].push({ wch: 18 });  // Ngày gửi
  ws['!cols'].push({ wch: 25 });  // Họ tên
  ws['!cols'].push({ wch: 12 });  // Năm sinh
  ws['!cols'].push({ wch: 15 });  // SĐT
  ws['!cols'].push({ wch: 15 });  // Thôn
  ws['!cols'].push({ wch: 15 });  // Xã
  ws['!cols'].push({ wch: 15 });  // Tỉnh
  
  // Technique columns
  for (let i = 0; i < techniqueHeaders.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Section C comparison columns
  // 1 (tenVatNuoi) + 6 (5b,5b,5c pairs) + 18 (6a SAU 10 + TRƯỚC 8) + 18 (6b SAU 10 + TRƯỚC 8) + 16 (6c-6j 8 pairs) = 59 columns
  for (let i = 0; i < 59; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Common Form columns
  for (let i = 0; i < commonHeaders.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Apply styling with 2 header rows (pass data rows starting from index 2)
  applyExcelStyling(ws, aoa.slice(2), 2);
  
  // Truncate sheet name to max 31 characters (Excel limit)
  const truncatedName = sheetName.length > 31 ? sheetName.substring(0, 28) + '...' : sheetName;
  XLSX.utils.book_append_sheet(wb, ws, truncatedName);
};
