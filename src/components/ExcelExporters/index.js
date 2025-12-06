// Export all technique-specific Excel exporters
export { exportLenMenSheet } from './LenMenExporter';
export { exportSauCanxiSheet } from './SauCanxiExporter';
export { exportNuoiGaSheet } from './NuoiGaExporter';
export { exportTrunQueSheet } from './TrunQueExporter';
export { exportUPhanSheet } from './UPhanExporter';
export { exportGocRaSheet } from './GocRaExporter';

// Export utilities
export { 
  techniqueNameMap, 
  fieldLabelMap, 
  sectionNameMap,
  createFieldLabel,
  flattenDataForExcel,
  calculateColumnWidths,
  truncateSheetName,
  extractGeneralInfo,
  extractCommonFormData,
  extractTechniqueData,
  applyExcelStyling,
} from './excelUtils';

// Technique exporter mapping
export const techniqueExporters = {
  'len-men-phu-pham': 'exportLenMenSheet',
  'nuoi-sau-canxi': 'exportSauCanxiSheet',
  'nuoi-ga-dem-lot': 'exportNuoiGaSheet',
  'nuoi-trun-que': 'exportTrunQueSheet',
  'u-phan-huu-co-tai-ruong': 'exportUPhanSheet',
  'xu-ly-goc-ra-che-pham': 'exportGocRaSheet',
};
