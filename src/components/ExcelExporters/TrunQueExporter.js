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
 * Export Nuôi trùn quế technique data to Excel sheet with 2-level headers
 * @param {Object} wb - XLSX workbook object
 * @param {Array} records - Array of submission records for this technique
 * @param {string} techType - Technique type slug
 */
export const exportTrunQueSheet = (wb, records, techType) => {
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
  let sectionDKeys = [];
  
  if (records.length > 0 && records[0].data) {
    const techniqueData = extractTechniqueData(records[0].data, techType);
    const commonData = extractCommonFormData(records[0].data);
    techniqueHeaders = Object.keys(techniqueData);
    commonHeaders = Object.keys(commonData);
    
    // Section A: Basic info (18a-18n)
    sectionAKeys = [
      'ngayBatDau', 'soLuaTrunQue', 'soNgayMotLua', 'tongChiPhiXayDung', 'chiPhiMuaGiong', 'chiPhiDauVaoKhac', 'cachSuDungTrunQue', 'tenLoaiVatNuoi', 'soLuongConVatNuoi', 'soLuaVatNuoi', 'cachSuDungPhanTrunQue', 'tenCayTrongPhanTrunQue', 'tongSoVuTrongPhanTrunQue', 'dienTichCayTrongPhanTrunQue'
    ];
    
    // Section B: Agricultural byproducts (19a-19p)
    sectionBKeys = [
      'loaiPhuPhamThucAn', 'khoiLuongPhuPhamTB', 'soLuongVatNuoi', 'soNgayLuaNuoi', 'soLuaNuoi', 'tongKhoiLuongPhuPhamSX', 'khoiLuongPhuPhamDungChoTrunQue', 'tyLePhuPhamDungChoTrunQue', 'dienTichNuoiTrunQue', 'chiPhiMuaGiongB', 'soNgayDeNuoiMotLuaB', 'khoiLuongTrunQueThuDuoc', 'khoiLuongPhanTrunQueThuDuoc', 'congLaoDong', 'gioQuetDonPhanChuongTruoc', 'gioDonPhanChuongSau'
    ];
    
    // // Section B: Agricultural byproducts (19a-19p)
    // const sectionBKeys = [
    //   '19a', '19b', '19c', '19d', '19e', '19f', '19g', '19h', '19i', '19j', '19k', '19l', '19m', '19n', '19o', '19p'
    // ];
    
    // Section C: Crop comparison table (20b-20p)
    sectionCKeys = [
      '20a',
      '20btruoc','20ctruoc','khongPhan_tenPhan_0','khongPhan_kg_0','khongPhan_tenPhan_1','khongPhan_kg_1','khongPhan_tenPhan_2','khongPhan_kg_2','khongPhan_tenPhan_3','khongPhan_kg_3',
      'khongPhan_tenPhanTien_0','khongPhan_tien_0','khongPhan_tenPhanTien_1','khongPhan_tien_1','khongPhan_tenPhanTien_2','khongPhan_tien_2','khongPhan_tenPhanTien_3','khongPhan_tien_3',
      '20ftruoc','20gtruoc','20htruoc','20itruoc','20jtruoc','20ktruoc','20ltruoc','20mtruoc','20ntruoc','20otruoc','20ptruoc',
      '20bsau','20csau','sauPhan_tenPhan_0','sauPhan_kg_0','sauPhan_tenPhan_1','sauPhan_kg_1','sauPhan_tenPhan_2','sauPhan_kg_2','sauPhan_tenPhan_3','sauPhan_kg_3',
      'sauPhan_tenPhanTien_0','sauPhan_tien_0','sauPhan_tenPhanTien_1','sauPhan_tien_1','sauPhan_tenPhanTien_2','sauPhan_tien_2','sauPhan_tenPhanTien_3','sauPhan_tien_3',
      '20fsau','20gsau','20hsau','20isau','20jsau','20ksau','20lsau','20msau','20nsau','20osau','20psau'
    ];
    
    // Section D: Livestock feeding comparison (21b-21l using 29 fields)
    sectionDKeys = [
      '21a',
      '29akhong','khongCanxi_tenThucAn_0','khongCanxi_kg_0','khongCanxi_tenThucAn_1','khongCanxi_kg_1','khongCanxi_tenThucAn_2','khongCanxi_kg_2',
      'khongCanxi_tenThucAnTien_0','khongCanxi_tien_0','khongCanxi_tenThucAnTien_1','khongCanxi_tien_1','khongCanxi_tenThucAnTien_2','khongCanxi_tien_2',
      '29dkhong','29ekhong','29fkhong','29gkhong','29hkhong','29ikhong','29jkhong','29kkhong',
      '29asau','sauCanxi_tenThucAn_0','sauCanxi_kg_0','sauCanxi_tenThucAn_1','sauCanxi_kg_1','sauCanxi_tenThucAn_2','sauCanxi_kg_2','sauCanxi_tenThucAn_3','sauCanxi_kg_3',
      'sauCanxi_tenThucAnTien_0','sauCanxi_tien_0','sauCanxi_tenThucAnTien_1','sauCanxi_tien_1','sauCanxi_tenThucAnTien_2','sauCanxi_tien_2','sauCanxi_tenThucAnTien_3','sauCanxi_tien_3',
      '29dsau','29esau','29fsau','29gsau','29hsau','29isau','29jsau','29ksau'
    ];
    
    const sectionCLabels = sectionCKeys
      .map(k => (techniqueFieldLabels[techType] && techniqueFieldLabels[techType][k]) || null)
      .filter(Boolean);
    
    const sectionDLabels = sectionDKeys
      .map(k => (techniqueFieldLabels[techType] && techniqueFieldLabels[techType][k]) || null)
      .filter(Boolean);
    
    techniqueHeaders = techniqueHeaders.filter(h => !sectionCLabels.includes(h) && !sectionDLabels.includes(h));
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
  
  // Add Section D: Livestock feeding comparison headers
  sectionDKeys.forEach(key => {
    headerRow.push(fieldLabels[key] || key);
  });
  
  // Add Common Form headers at the end
  headerRow.push(...commonHeaders);
  
  // Build top-level header row with grouped columns
  const totalCols = headerRow.length;
  const topHeader = new Array(totalCols).fill('');
  
  // Track column positions
  let colIndex = 0;
  
  // General Info columns: STT, Ngày gửi, Họ tên, Năm sinh, SĐT, Thôn, Xã, Tỉnh
  const genStart = colIndex;
  topHeader[colIndex++] = 'Thông tin người tham gia';
  for (let i = 1; i < generalHeaders.length; i++) {
    topHeader[colIndex++] = '';
  }
  const genEnd = colIndex - 1;
  
  // Count Section A & B columns
  let sectionAColCount = sectionAKeys.length;
  let sectionBColCount = sectionBKeys.length;
  
  console.log('TrunQue sectionAColCount:', sectionAColCount);
  console.log('TrunQue sectionBColCount:', sectionBColCount);
  console.log('TrunQue sectionCKeys:', sectionCKeys.length);
  console.log('TrunQue sectionDKeys:', sectionDKeys.length);
  
  // Section A header
  const sectionAStart = colIndex;
  if (sectionAColCount > 0) {
    topHeader[colIndex++] = 'A. Nhóm câu hỏi: Thông tin về việc nuôi trùn quế và sử dụng trùn quế/phân trùn quế';
    for (let i = 1; i < sectionAColCount; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionAEnd = colIndex - 1;
  
  // Section B header
  const sectionBStart = colIndex;
  if (sectionBColCount > 0) {
    topHeader[colIndex++] = 'B. Nhóm câu hỏi: Phụ phẩm nông nghiệp và tỷ lệ phụ phẩm dùng cho trùn quế';
    for (let i = 1; i < sectionBColCount; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionBEnd = colIndex - 1;
  
  // Section C header: Crop comparison
  const sectionCStart = colIndex;
  if (sectionCKeys.length > 0) {
    topHeader[colIndex++] = 'C. Nhóm câu hỏi: So sánh cây trồng KHÔNG BÓN và SAU KHI BÓN phân trùn quế';
    for (let i = 1; i < sectionCKeys.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionCEnd = colIndex - 1;
  
  // Section D header: Livestock feeding comparison
  const sectionDStart = colIndex;
  if (sectionDKeys.length > 0) {
    topHeader[colIndex++] = 'D. Nhóm câu hỏi: So sánh vật nuôi KHÔNG SỬ DỤNG và SAU KHI SỬ DỤNG trùn quế làm thức ăn';
    for (let i = 1; i < sectionDKeys.length; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionDEnd = colIndex - 1;
  
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
      
      // Section D: Livestock feeding comparison data
      const sectionD0 = (record.data.sectionD && Array.isArray(record.data.sectionD) && record.data.sectionD[0]) 
        ? record.data.sectionD[0] 
        : null;
      
      sectionDKeys.forEach(key => {
        row.push(sectionD0?.[key] || '');
      });
    } else {
      sectionAKeys.forEach(() => row.push(''));
      sectionBKeys.forEach(() => row.push(''));
      sectionCKeys.forEach(() => row.push(''));
      sectionDKeys.forEach(() => row.push(''));
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
  
  // Section D columns (Livestock feeding comparison)
  for (let i = 0; i < sectionDKeys.length; i++) {
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
  if (sectionAEnd >= sectionAStart && sectionAColCount > 0) {
    ws['!merges'].push({ s: { r: 0, c: sectionAStart }, e: { r: 0, c: sectionAEnd } });
  }
  
  // Merge Section B header
  if (sectionBEnd >= sectionBStart && sectionBColCount > 0) {
    ws['!merges'].push({ s: { r: 0, c: sectionBStart }, e: { r: 0, c: sectionBEnd } });
  }
  
  // Merge Section C header
  if (sectionCEnd >= sectionCStart && sectionCKeys.length > 0) {
    ws['!merges'].push({ s: { r: 0, c: sectionCStart }, e: { r: 0, c: sectionCEnd } });
  }
  
  // Merge Section D header
  if (sectionDEnd >= sectionDStart && sectionDKeys.length > 0) {
    ws['!merges'].push({ s: { r: 0, c: sectionDStart }, e: { r: 0, c: sectionDEnd } });
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
