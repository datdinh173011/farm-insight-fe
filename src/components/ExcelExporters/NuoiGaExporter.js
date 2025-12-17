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
 * Export Nuôi gà trên đệm lót sinh học technique data to Excel sheet
 * @param {Object} wb - XLSX workbook object
 * @param {Array} records - Array of submission records for this technique
 * @param {string} techType - Technique type slug
 */
export const exportNuoiGaSheet = (wb, records, techType) => {
  const sheetName = techniqueNameMap[techType] || techType;
  const fieldLabels = techniqueFieldLabels[techType] || {};
  
  // Build header row
  const headerRow = [];
  
  // Add General Info headers
  const generalHeaders = ['STT', 'Ngày gửi', 'Họ tên', 'Năm sinh', 'Số điện thoại', 'Thôn', 'Xã', 'Tỉnh'];
  headerRow.push(...generalHeaders);
  
  // Get technique and common headers from first record
  let techniqueHeaders = [];
  let commonHeaders = [];
  
  if (records.length > 0 && records[0].data) {
    const techniqueData = extractTechniqueData(records[0].data, techType);
    const commonData = extractCommonFormData(records[0].data);
    techniqueHeaders = Object.keys(techniqueData);
    commonHeaders = Object.keys(commonData);

    // Filter out Section C (phanU) and Section D (danGa) from techniqueHeaders
    // These will be added separately with proper grouping
    const sectionCDKeys = [
      // Section C (phanU) keys
      'khongPhanU_kg_0', 'khongPhanU_kg_1', 'khongPhanU_kg_2', 
      'sauPhanU_kg_0', 'sauPhanU_kg_1', 'sauPhanU_kg_2',
      // Section D (danGa) keys - to be listed based on actual form structure
      // ... add all Section D keys here
    ];
    
    techniqueHeaders = techniqueHeaders.filter(h => {
      // Keep only Section A and B headers
      return !sectionCDKeys.some(key => h.includes(key));
    });
  }
  
  // Add Technique Section A, B headers
  headerRow.push(...techniqueHeaders);
  
  // Section C (phanU): So sánh KHÔNG BÓN PHÂN / SAU BÓN PHÂN
  // Based on TechniqueFormNuoiGa structure: câu 13-14
  // KHÔNG: 16 cột (tên 3 + kg 3 + tên 3 + đồng 3 + 4 metrics)
  // SAU: 16 cột (tên 3 + kg 3 + tên 3 + đồng 3 + 4 metrics)
  
  // 32. Fields for KHÔNG BÓN PHÂN (12 fields: 4 kg + 4 tien + 4 metrics)
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`khongPhanU_kg_${i}`] || `32c. KHÔNG - Phân ${i+1} (kg)`);
  }
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`khongPhanU_tien_${i}`] || `32d. KHÔNG - Chi phí phân ${i+1} (đồng)`);
  }
  headerRow.push(fieldLabels['32mtruoc'] || '32m. KHÔNG - Năng suất (kg/sào)');
  headerRow.push(fieldLabels['32ntruoc'] || '32n. KHÔNG - Giá bán (đồng/kg)');
  headerRow.push(fieldLabels['32otruoc'] || '32o. KHÔNG - Thành tiền (đồng)');
  headerRow.push(fieldLabels['32lkhong'] || '32l. KHÔNG - Bị sâu bệnh');
  
  // 32. Fields for SAU BÓN PHÂN (12 fields: 4 kg + 4 tien + 4 metrics)
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`sauPhanU_kg2_${i}`] || `32c. SAU - Phân ${i+1} (kg)`);
  }
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`sauPhanU_tien2_${i}`] || `32d. SAU - Chi phí phân ${i+1} (đồng)`);
  }
  headerRow.push(fieldLabels['32msau'] || '32m. SAU - Năng suất (kg/sào)');
  headerRow.push(fieldLabels['32nsau'] || '32n. SAU - Giá bán (đồng/kg)');
  headerRow.push(fieldLabels['32osau'] || '32o. SAU - Thành tiền (đồng)');
  headerRow.push(fieldLabels['32lsau'] || '32l. SAU - Bị sâu bệnh');
  
  // Section D (danGa): So sánh KHÔNG NUÔI GÀ / SAU NUÔI GÀ
  // Based on TechniqueFormNuoiGa structure: câu 15-16
  // KHÔNG: 24 cột
  // SAU: 24 cột
  
  // 35. TRƯỚC KHI đệm lót (13 fields: 1 soLuong + 4 kg + 4 tien + 4 metrics)
  headerRow.push(fieldLabels['soLuongGaSauDemLot'] || '35a. TRƯỚC - Số lượng gà (con)');
  
  // 35b. Thức ăn - Kg (4 loại)
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`sauDemLot_kg_${i}`] || `35b. TRƯỚC - Thức ăn ${i+1} (kg)`);
  }
  
  // 35c. Chi phí thức ăn (4 loại)
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`sauDemLot_tien_${i}`] || `35c. TRƯỚC - Chi phí thức ăn ${i+1} (đồng)`);
  }
  
  // 35d-n. Metrics
  headerRow.push(fieldLabels['tienThuoc'] || '35d. TRƯỚC - Tiền thuốc (đồng)');
  headerRow.push(fieldLabels['gaBiBenh'] || '35f. TRƯỚC - Có bị bệnh');
  headerRow.push(fieldLabels['danhGiaSucKhoe'] || '35g. TRƯỚC - Đánh giá sức khỏe');
  headerRow.push(fieldLabels['danhGiaMui'] || '35n. TRƯỚC - Đánh giá mùi (0-10)');
  
  // 35. SAU KHI đệm lót (13 fields: 1 soLuong + 4 kg + 4 tien + 4 metrics)
  headerRow.push(fieldLabels['soLuongGaTruocDemLot'] || '35a. SAU - Số lượng gà (con)');
  
  // 35b. Thức ăn - Kg (4 loại)
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`truocDemLot_kg_${i}`] || `35b. SAU - Thức ăn ${i+1} (kg)`);
  }
  
  // 35c. Chi phí thức ăn (4 loại)
  for (let i = 0; i < 4; i++) {
    headerRow.push(fieldLabels[`truocDemLot_tien_${i}`] || `35c. SAU - Chi phí thức ăn ${i+1} (đồng)`);
  }
  
  // 35d-n. Metrics
  headerRow.push(fieldLabels['tienThuoc2'] || '35d. SAU - Tiền thuốc (đồng)');
  headerRow.push(fieldLabels['gaBiBenh2'] || '35f. SAU - Có bị bệnh');
  headerRow.push(fieldLabels['danhGiaSucKhoe2'] || '35g. SAU - Đánh giá sức khỏe');
  headerRow.push(fieldLabels['danhGiaMui2'] || '35n. SAU - Đánh giá mùi (0-10)');
  
  // Add Common Form headers
  headerRow.push(...commonHeaders);
  
  // Build top-level header row with grouped columns
  const totalCols = headerRow.length;
  const topHeader = new Array(totalCols).fill('');
  
  let colIndex = 0;
  
  // General Info columns
  const genStart = colIndex;
  topHeader[colIndex++] = 'Thông tin người tham gia';
  for (let i = 1; i < generalHeaders.length; i++) {
    topHeader[colIndex++] = '';
  }
  const genEnd = colIndex - 1;
  
  // Section A & B: Count columns based on header patterns
  let sectionAColCount = 0;
  let sectionBColCount = 0;
  
  techniqueHeaders.forEach(header => {
    // Section A: câu 30-31 (30a, 30b, 30c, 30d, 30e, 30f, 31a, 31b, 31c, 31d, 31e, 31f, 31g, 31h, 31i)
    if (/^(30[a-f]\.|31[a-i]\.)/.test(header)) {
      sectionAColCount++;
    }
    // Section B: câu 34 (34a, 34b, 34c, 34d, 34e)
    if (/^34[a-e]\./.test(header)) {
      sectionBColCount++;
    }
  });
  
  console.log('Section A count:', sectionAColCount);
  console.log('Section B count:', sectionBColCount);
  console.log('techniqueHeaders:', techniqueHeaders);
  
  // Fill Section A header
  const sectionAStart = colIndex;
  if (sectionAColCount > 0) {
    topHeader[colIndex++] = 'A. Nhóm câu hỏi: Quản lý phụ phẩm SAU KHI nuôi gà trên đệm lót';
    for (let i = 1; i < sectionAColCount; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionAEnd = colIndex - 1;
  
  // Fill Section B header
  const sectionBStart = colIndex;
  if (sectionBColCount > 0) {
    topHeader[colIndex++] = 'B. Nhóm câu hỏi: Quản lý phụ phẩm TRƯỚC KHI nuôi gà trên đệm lót';
    for (let i = 1; i < sectionBColCount; i++) {
      topHeader[colIndex++] = '';
    }
  }
  const sectionBEnd = colIndex - 1;
  
  // Section C (phanU): 24 columns (12 KHÔNG + 12 SAU)
  const sectionCStart = colIndex;
  topHeader[colIndex++] = 'C. Nhóm câu hỏi: Bón phân ủ từ đệm lót - So sánh KHÔNG BÓN PHÂN (2022) và SAU BÓN PHÂN (vụ gần đây)';
  for (let i = 1; i < 24; i++) {
    topHeader[colIndex++] = '';
  }
  const sectionCEnd = colIndex - 1;
  
  // Section D (danGa): 26 columns (13 TRƯỚC + 13 SAU)
  const sectionDStart = colIndex;
  topHeader[colIndex++] = 'D. Nhóm câu hỏi: Nuôi gà trên đệm lót - So sánh TRƯỚC KHI và SAU KHI sử dụng đệm lót';
  for (let i = 1; i < 26; i++) {
    topHeader[colIndex++] = '';
  }
  const sectionDEnd = colIndex - 1;
  
  // Common Form columns
  const commonStart = colIndex;
  if (commonHeaders.length > 0) {
    topHeader[colIndex++] = 'Nhóm câu hỏi chung';
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
    
    // Section C (phanU) data
    const phanU0 = (record.data?.phanU && Array.isArray(record.data.phanU) && record.data.phanU[0]) 
      ? record.data.phanU[0] 
      : null;
    
    // KHÔNG BÓN PHÂN (12 fields: 4 kg + 4 tien + 4 metrics)
    for (let i = 0; i < 4; i++) {
      row.push(phanU0?.[`khongPhanU_kg_${i}`] || '');
    }
    for (let i = 0; i < 4; i++) {
      row.push(phanU0?.[`khongPhanU_tien_${i}`] || '');
    }
    row.push(phanU0?.['32mtruoc'] || '');
    row.push(phanU0?.['32ntruoc'] || '');
    row.push(phanU0?.['32otruoc'] || '');
    row.push(phanU0?.['32lkhong'] || '');
    
    // SAU BÓN PHÂN (12 fields: 4 kg + 4 tien + 4 metrics)
    for (let i = 0; i < 4; i++) {
      row.push(phanU0?.[`sauPhanU_kg2_${i}`] || '');
    }
    for (let i = 0; i < 4; i++) {
      row.push(phanU0?.[`sauPhanU_tien2_${i}`] || '');
    }
    row.push(phanU0?.['32msau'] || '');
    row.push(phanU0?.['32nsau'] || '');
    row.push(phanU0?.['32osau'] || '');
    row.push(phanU0?.['32lsau'] || '');
    
    // Section D (danGa) data
    const danGa0 = (record.data?.danGa && Array.isArray(record.data.danGa) && record.data.danGa[0]) 
      ? record.data.danGa[0] 
      : null;
    
    // TRƯỚC KHI đệm lót (13 fields: 1 soLuong + 4 kg + 4 tien + 4 metrics)
    row.push(danGa0?.soLuongGaSauDemLot || '');
    
    for (let i = 0; i < 4; i++) {
      row.push(danGa0?.[`sauDemLot_kg_${i}`] || '');
    }
    
    for (let i = 0; i < 4; i++) {
      row.push(danGa0?.[`sauDemLot_tien_${i}`] || '');
    }
    
    row.push(danGa0?.tienThuoc || '');
    row.push(danGa0?.gaBiBenh || '');
    row.push(danGa0?.danhGiaSucKhoe || '');
    row.push(danGa0?.danhGiaMui || '');
    
    // SAU KHI đệm lót (13 fields: 1 soLuong + 4 kg + 4 tien + 4 metrics)
    row.push(danGa0?.soLuongGaTruocDemLot || '');
    
    for (let i = 0; i < 4; i++) {
      row.push(danGa0?.[`truocDemLot_kg_${i}`] || '');
    }
    
    for (let i = 0; i < 4; i++) {
      row.push(danGa0?.[`truocDemLot_tien_${i}`] || '');
    }
    
    row.push(danGa0?.tienThuoc2 || '');
    row.push(danGa0?.gaBiBenh2 || '');
    row.push(danGa0?.danhGiaSucKhoe2 || '');
    row.push(danGa0?.danhGiaMui2 || '');
    
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
  
  // Define merged cells for top header row
  const merges = [];
  
  if (genEnd >= genStart) {
    merges.push({ s: { r: 0, c: genStart }, e: { r: 0, c: genEnd } });
  }
  if (sectionAEnd >= sectionAStart) {
    merges.push({ s: { r: 0, c: sectionAStart }, e: { r: 0, c: sectionAEnd } });
  }
  if (sectionBEnd >= sectionBStart) {
    merges.push({ s: { r: 0, c: sectionBStart }, e: { r: 0, c: sectionBEnd } });
  }
  if (sectionCEnd >= sectionCStart) {
    merges.push({ s: { r: 0, c: sectionCStart }, e: { r: 0, c: sectionCEnd } });
  }
  if (sectionDEnd >= sectionDStart) {
    merges.push({ s: { r: 0, c: sectionDStart }, e: { r: 0, c: sectionDEnd } });
  }
  if (commonEnd >= commonStart) {
    merges.push({ s: { r: 0, c: commonStart }, e: { r: 0, c: commonEnd } });
  }
  ws['!merges'] = merges;
  
  // Apply styling to both header rows
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < totalCols; c++) {
      const cellRef = XLSX.utils.encode_col(c) + XLSX.utils.encode_row(r);
      if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
      ws[cellRef].s = {
        alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
        font: { bold: true },
        fill: { fgColor: { rgb: r === 0 ? 'FFD3D3D3' : 'FFE0E0E0' } },
        border: {
          top: { style: 'thin' },
          bottom: { style: 'thin' },
          left: { style: 'thin' },
          right: { style: 'thin' }
        }
      };
    }
  }
  
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
  
  // Technique columns (A & B)
  for (let i = 0; i < techniqueHeaders.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Section C columns (24)
  for (let i = 0; i < 24; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Section D columns (26)
  for (let i = 0; i < 26; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Common Form columns
  for (let i = 0; i < commonHeaders.length; i++) {
    ws['!cols'].push({ wch: 20 });
  }
  
  // Apply styling with 2 header rows
  applyExcelStyling(ws, aoa.slice(2), 2);
  
  // Truncate sheet name
  const truncatedName = sheetName.length > 31 ? sheetName.substring(0, 28) + '...' : sheetName;
  XLSX.utils.book_append_sheet(wb, ws, truncatedName);
};
