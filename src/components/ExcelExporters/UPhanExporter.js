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
 * Export Ủ phân hữu cơ tại ruộng technique data to Excel sheet with 2-level headers
 * @param {Object} wb - XLSX workbook object
 * @param {Array} records - Array of submission records for this technique
 * @param {string} techType - Technique type slug
 */
export const exportUPhanSheet = (wb, records, techType) => {
  const sheetName = techniqueNameMap[techType] || techType;
  const fieldLabels = techniqueFieldLabels[techType] || {};
  
  // Build single header row
  const headerRow = [];
  
  // Add General Info headers
  const generalHeaders = ['STT', 'Ngày gửi', 'Họ tên', 'Năm sinh', 'Số điện thoại', 'Thôn', 'Xã', 'Tỉnh'];
  headerRow.push(...generalHeaders);
  
  // Get technique and common headers from first record
  let techniqueHeaders = [];
  let commonHeaders = [];
  let sectionAKeys = [];
  let sectionBKeys = [];
  let sectionCKeys = [];
  
  if (records.length > 0 && records[0].data) {
    const techniqueData = extractTechniqueData(records[0].data, techType);
    const commonData = extractCommonFormData(records[0].data);
    techniqueHeaders = Object.keys(techniqueData);
    commonHeaders = Object.keys(commonData);
    
    // Section A: Basic info (14 fields)
    sectionAKeys = [
      'tenPhuPham', 'thangNamBatDau', 'tenPhuPhamTanDung', 'khoiLuongPhuPhamTrenRuong',
      'khoiLuongPhuPhamThuGom', 'tongKhoiLuongPhuPhamSuDung', 'khoiLuongPhanHuuCoThuDuoc',
      'nhungLoaiCayDuocBonPhan', 'tongSoMuaVuBonPhan', 'dienTichCayDuocBonPhan',
      'suDungMayCatNho', 'nhienLieuSuDung', 'chiPhiVatLieuKhac'
    ];
    
    // Section B: Before (6 fields)
    sectionBKeys = [
      'loaiCayTrongTruoc', 'coTrongTruoc', 'dienTichDatTruoc', 
      'tenPhuPhamTruoc', 'khoiLuongPhuPhamTruoc', 'khoiLuongPhuPhamThuGomTruoc'
    ];
    
    // Section C: Crop comparison (11a-11m) KHÔNG vs SAU
    sectionCKeys = [
      '11a',
      '11bTruoc','11cTruoc','truocPhan_tenPhan_0','truocPhan_kg_0','truocPhan_tenPhan_1','truocPhan_kg_1','truocPhan_tenPhan_2','truocPhan_kg_2',
      'truocPhan_tenPhanTien_0','truocPhan_tien_0','truocPhan_tenPhanTien_1','truocPhan_tien_1','truocPhan_tenPhanTien_2','truocPhan_tien_2',
      '11eTruoc','11fTruoc','11gTruoc','11hTruoc','11iTruoc','11jTruoc','11kTruoc','11lTruoc','11mTruoc',
      '11bSau','11cSau','sauPhan_tenPhan_0','sauPhan_kg_0','sauPhan_tenPhan_1','sauPhan_kg_1','sauPhan_tenPhan_2','sauPhan_kg_2',
      'sauPhan_tenPhanTien_0','sauPhan_tien_0','sauPhan_tenPhanTien_1','sauPhan_tien_1','sauPhan_tenPhanTien_2','sauPhan_tien_2',
      '11eSau','11fSau','11gSau','11hSau','11iSau','11jSau','11kSau','11lSau','11mSau'
    ];
  }
  
  // Add Technique Section A & B headers
  sectionAKeys.forEach(key => {
    headerRow.push(fieldLabels[key] || key);
  });
  
  sectionBKeys.forEach(key => {
    headerRow.push(fieldLabels[key] || key);
  });
  
  // Add Section C: Crop comparison headers
  sectionCKeys.forEach(key => {
    headerRow.push(fieldLabels[key] || key);
  });
  
  // Add Common Form headers at the end
  headerRow.push(...commonHeaders);
  
  // Build top-level header row with grouped columns
  const totalCols = headerRow.length;
  const topHeader = new Array(totalCols).fill('');
  
  // Track column positions
  let colIndex = 0;
  
  // General Info columns
  const genStart = colIndex;
  topHeader[colIndex++] = 'Thông tin người tham gia';
  for (let i = 1; i < generalHeaders.length; i++) {
    topHeader[colIndex++] = '';
  }
  const genEnd = colIndex - 1;
  
  // Section A header
  const sectionAStart = colIndex;
  if (sectionAKeys.length > 0) {
    topHeader[colIndex++] = 'A. Nhóm câu hỏi: Quản lý phụ phẩm cây trồng SAU KHI áp dụng kỹ thuật ủ phân hữu cơ tại ruộng';
    for (let i = 1; i < sectionAKeys.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionAEnd = colIndex - 1;
  
  // Section B header
  const sectionBStart = colIndex;
  if (sectionBKeys.length > 0) {
    topHeader[colIndex++] = 'B. Nhóm câu hỏi: Quản lý phụ phẩm cây trồng TRƯỚC KHI (NĂM 2022) áp dụng kỹ thuật ủ phân hữu cơ tại ruộng';
    for (let i = 1; i < sectionBKeys.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionBEnd = colIndex - 1;
  
  // Section C header: Crop comparison
  const sectionCStart = colIndex;
  if (sectionCKeys.length > 0) {
    topHeader[colIndex++] = 'C. Nhóm câu hỏi: Sử dụng phân ủ làm phân bón cây trồng, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng phân ủ hữu cơ';
    for (let i = 1; i < sectionCKeys.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionCEnd = colIndex - 1;
  
  // Common Form header
  const commonStart = colIndex;
  if (commonHeaders.length > 0) {
    topHeader[colIndex++] = 'Thông tin chung';
    for (let i = 1; i < commonHeaders.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const commonEnd = colIndex - 1;
  
  // Build data rows
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
    
    // Technique data (Section A & B) - using arrays from form
    if (record.data && typeof record.data === 'object') {
      // Extract data from sectionA array (first item)
      const sectionA0 = (record.data.sectionA && Array.isArray(record.data.sectionA) && record.data.sectionA[0]) 
        ? record.data.sectionA[0] 
        : null;
      
      // Extract data from sectionB array (first item)
      const sectionB0 = (record.data.sectionB && Array.isArray(record.data.sectionB) && record.data.sectionB[0]) 
        ? record.data.sectionB[0] 
        : null;
      
      // Push Section A data
      sectionAKeys.forEach(key => {
        row.push(sectionA0?.[key] || '');
      });
      
      // Push Section B data
      sectionBKeys.forEach(key => {
        row.push(sectionB0?.[key] || '');
      });
      
      // Section C: Crop comparison data
      const sectionC0 = (record.data.sectionC && Array.isArray(record.data.sectionC) && record.data.sectionC[0]) 
        ? record.data.sectionC[0] 
        : null;
      
      sectionCKeys.forEach(key => {
        row.push(sectionC0?.[key] || '');
      });
    } else {
      sectionAKeys.forEach(() => row.push(''));
      sectionBKeys.forEach(() => row.push(''));
      sectionCKeys.forEach(() => row.push(''));
    }
    
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
  
  // Technique columns (Section A & B)
  for (let i = 0; i < sectionAKeys.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  for (let i = 0; i < sectionBKeys.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Section C columns (Crop comparison)
  for (let i = 0; i < sectionCKeys.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Common Form columns
  for (let i = 0; i < commonHeaders.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Define merged cells for top header
  ws['!merges'] = [];
  
  // Merge General Info header
  if (genEnd >= genStart) {
    ws['!merges'].push({ s: { r: 0, c: genStart }, e: { r: 0, c: genEnd } });
  }
  
  // Merge Section A header
  if (sectionAEnd >= sectionAStart && sectionAKeys.length > 0) {
    ws['!merges'].push({ s: { r: 0, c: sectionAStart }, e: { r: 0, c: sectionAEnd } });
  }
  
  // Merge Section B header
  if (sectionBEnd >= sectionBStart && sectionBKeys.length > 0) {
    ws['!merges'].push({ s: { r: 0, c: sectionBStart }, e: { r: 0, c: sectionBEnd } });
  }
  
  // Merge Section C header
  if (sectionCEnd >= sectionCStart && sectionCKeys.length > 0) {
    ws['!merges'].push({ s: { r: 0, c: sectionCStart }, e: { r: 0, c: sectionCEnd } });
  }
  
  // Merge Common Form header
  if (commonEnd >= commonStart && commonHeaders.length > 0) {
    ws['!merges'].push({ s: { r: 0, c: commonStart }, e: { r: 0, c: commonEnd } });
  }
  
  // Apply styling for 2-row headers
  const headerStyle = {
    font: { bold: true },
    alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
    fill: { fgColor: { rgb: 'FFD3D3D3' } },
    border: {
      top: { style: 'thin', color: { rgb: '000000' } },
      bottom: { style: 'thin', color: { rgb: '000000' } },
      left: { style: 'thin', color: { rgb: '000000' } },
      right: { style: 'thin', color: { rgb: '000000' } }
    }
  };
  
  const subHeaderStyle = {
    font: { bold: true },
    alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
    fill: { fgColor: { rgb: 'FFE0E0E0' } },
    border: {
      top: { style: 'thin', color: { rgb: '000000' } },
      bottom: { style: 'thin', color: { rgb: '000000' } },
      left: { style: 'thin', color: { rgb: '000000' } },
      right: { style: 'thin', color: { rgb: '000000' } }
    }
  };
  
  // Apply styling to top header row (row 0)
  for (let col = 0; col < totalCols; col++) {
    const cellRef = XLSX.utils.encode_cell({ r: 0, c: col });
    if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
    ws[cellRef].s = headerStyle;
  }
  
  // Apply styling to second header row (row 1)
  for (let col = 0; col < totalCols; col++) {
    const cellRef = XLSX.utils.encode_cell({ r: 1, c: col });
    if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
    ws[cellRef].s = subHeaderStyle;
  }
  
  // Apply styling with 2 header rows
  applyExcelStyling(ws, aoa.slice(2), 2);
  
  // Truncate sheet name to max 31 characters (Excel limit)
  const truncatedName = sheetName.length > 31 ? sheetName.substring(0, 28) + '...' : sheetName;
  XLSX.utils.book_append_sheet(wb, ws, truncatedName);
};
