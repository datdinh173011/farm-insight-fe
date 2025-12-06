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
 * Export Xử lý gốc rạ bằng chế phẩm sinh học technique data to Excel sheet
 * @param {Object} wb - XLSX workbook object
 * @param {Array} records - Array of submission records for this technique
 * @param {string} techType - Technique type slug
 */
export const exportGocRaSheet = (wb, records, techType) => {
  const sheetName = techniqueNameMap[techType] || techType;
  const sheetData = [];

  records.forEach((record, idx) => {
    // Create single row for this record with all three parts
    const rowData = {
      'STT': idx + 1,
      'Ngày gửi': record.submitted_at ? dayjs(record.submitted_at).format('DD/MM/YYYY HH:mm') : '',
    };

    // Part 1: General Info (from GeneralInfoForm)
    const generalInfo = extractGeneralInfo(record);
    Object.assign(rowData, generalInfo);

    // Part 2: Technique-specific data (from TechniqueForm - sections A, B, C, D)
    if (record.data && typeof record.data === 'object') {
      const techniqueData = extractTechniqueData(record.data);
      Object.assign(rowData, techniqueData);
      
      // Part 3: Common questions (from CommonForm - câu 40-70)
      const commonData = extractCommonFormData(record.data);
      Object.assign(rowData, commonData);
    }

    sheetData.push(rowData);
  });

  const ws = XLSX.utils.json_to_sheet(sheetData);
  
  // Auto-size columns based on content
  ws['!cols'] = calculateColumnWidths(sheetData);

  // Apply beautiful styling (borders, colors, fonts)
  applyExcelStyling(ws, sheetData);

  // Truncate sheet name to max 31 characters (Excel limit)
  const truncatedName = sheetName.length > 31 ? sheetName.substring(0, 28) + '...' : sheetName;
  XLSX.utils.book_append_sheet(wb, ws, truncatedName);
};
