import * as XLSX from 'xlsx';
import dayjs from 'dayjs';
import { 
  calculateColumnWidths, 
  techniqueNameMap,
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
  }
  
  // Add Technique Section A, B headers
  headerRow.push(...techniqueHeaders);
  
  // Add Section C comparison headers (TRƯỚC)
  headerRow.push('Tên vật nuôi');
  headerRow.push('TRƯỚC - 5b. Số lứa', 'TRƯỚC - 5b. Số ngày/lứa', 'TRƯỚC - 5c. Số lượng vật nuôi');
  for (let i = 0; i < 4; i++) { 
    headerRow.push(`TRƯỚC - 6a. Tên ${i+1}`, `TRƯỚC - 6a. Kg ${i+1}`); 
  }
  for (let i = 0; i < 4; i++) { 
    headerRow.push(`TRƯỚC - 6b. Tên ${i+1}`, `TRƯỚC - 6b. Đồng ${i+1}`); 
  }
  headerRow.push('TRƯỚC - 6c. Tiền thuốc', 'TRƯỚC - 6d. Có bệnh', 'TRƯỚC - 6e. Sức khỏe (1-10)', 
                 'TRƯỚC - 6f. Phát triển nhanh', 'TRƯỚC - 6g. Thời gian nuôi', 'TRƯỚC - 6h. Trọng lượng xuất', 
                 'TRƯỚC - 6i. Giá bán', 'TRƯỚC - 6j. Thành tiền', 'TRƯỚC - 6k. Tổng chi phí');
  
  // Add Section C comparison headers (SAU)
  headerRow.push('SAU - 5b. Số lứa', 'SAU - 5b. Số ngày/lứa', 'SAU - 5c. Số lượng vật nuôi');
  for (let i = 0; i < 5; i++) { 
    headerRow.push(`SAU - 6a. Tên ${i+1}`, `SAU - 6a. Kg ${i+1}`); 
  }
  for (let i = 0; i < 5; i++) { 
    headerRow.push(`SAU - 6b. Tên ${i+1}`, `SAU - 6b. Đồng ${i+1}`); 
  }
  headerRow.push('SAU - 6c. Tiền thuốc', 'SAU - 6d. Có bệnh', 'SAU - 6e. Sức khỏe (1-10)', 
                 'SAU - 6f. Phát triển nhanh', 'SAU - 6g. Thời gian nuôi', 'SAU - 6h. Trọng lượng xuất', 
                 'SAU - 6i. Giá bán', 'SAU - 6j. Thành tiền', 'SAU - 6k. Tổng chi phí');
  
  // Add Common Form headers at the end
  headerRow.push(...commonHeaders);
  
  // Build data rows
  const aoa = [headerRow];
  
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
    
    // Section C comparison data
    const c0 = (record.data?.sectionC && Array.isArray(record.data.sectionC) && record.data.sectionC[0]) 
      ? record.data.sectionC[0] 
      : null;
    
    row.push(c0?.tenVatNuoi || '');
    
    // TRƯỚC
    row.push(c0?.soLuaTruocMen || '');
    row.push(c0?.soNgayNuoiTruocMen || '');
    row.push(c0?.soLuongVatNuoiTruoc || '');
    for (let i = 0; i < 4; i++) {
      row.push(c0?.[`truocMen_tenThucAn_${i}`] || '');
      row.push(c0?.[`truocMen_kg_${i}`] || '');
    }
    for (let i = 0; i < 4; i++) {
      row.push(c0?.[`truocMen_tenThucAnTien_${i}`] || '');
      row.push(c0?.[`truocMen_tien_${i}`] || '');
    }
    row.push(c0?.tienThuocTruocMen || '');
    row.push(c0?.vatNuoiBiBenhTruoc || '');
    row.push(c0?.danhGiaSucKhoeTruoc || '');
    row.push(c0?.vatNuoiPhatTrienTruoc || '');
    row.push(c0?.thoiGianNuoiTruoc || '');
    row.push(c0?.trongLuongXuatTruoc || '');
    row.push(c0?.giaBanTruoc || '');
    row.push(c0?.thanhTienTruoc || '');
    row.push(c0?.tongChiPhiTruoc || '');
    
    // SAU
    row.push(c0?.soLuaSauMen || '');
    row.push(c0?.soNgayNuoiSauMen || '');
    row.push(c0?.soLuongVatNuoiSau || '');
    for (let i = 0; i < 5; i++) {
      row.push(c0?.[`sauMen_tenThucAn_${i}`] || '');
      row.push(c0?.[`sauMen_kg_${i}`] || '');
    }
    for (let i = 0; i < 5; i++) {
      row.push(c0?.[`sauMen_tenThucAnTien_${i}`] || '');
      row.push(c0?.[`sauMen_tien_${i}`] || '');
    }
    row.push(c0?.tienThuocSauMen || '');
    row.push(c0?.vatNuoiBiBenhSau || '');
    row.push(c0?.danhGiaSucKhoeSau || '');
    row.push(c0?.vatNuoiPhatTrienSau || '');
    row.push(c0?.thoiGianNuoiSau || '');
    row.push(c0?.trongLuongXuatSau || '');
    row.push(c0?.giaBanSau || '');
    row.push(c0?.thanhTienSau || '');
    row.push(c0?.tongChiPhiSau || '');
    
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
  
  // No merged cells needed for single header row
  
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
  ws['!cols'].push({ wch: 20 }); // Tên vật nuôi
  for (let i = 0; i < 60; i++) { // 28 TRƯỚC + 32 SAU
    ws['!cols'].push({ wch: 18 });
  }
  
  // Common Form columns
  for (let i = 0; i < commonHeaders.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Apply styling with 1 header row
  applyExcelStyling(ws, aoa.slice(1), 1);
  
  // Truncate sheet name to max 31 characters (Excel limit)
  const truncatedName = sheetName.length > 31 ? sheetName.substring(0, 28) + '...' : sheetName;
  XLSX.utils.book_append_sheet(wb, ws, truncatedName);
};
