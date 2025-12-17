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

// Technique-specific field label mappings
export const techniqueFieldLabels = {
  // Lên men phụ phẩm
  'len-men-phu-pham': {
    // Section A (Questions 1-14)
    'tenPhuPhamCayTrong': '3a. Tên phụ phẩm cây trồng (sử dụng ủ lên men)',
    'thangNamDau': '3a. Tháng/năm áp dụng kỹ thuật ủ lên men (lần đầu tiên)',
    'dienTichTrong': '3a. Diện tích trồng trong 1 vụ',
    'soLanMen': '3a. Tổng số lần (số vụ) đã tiến hành lên men',
    'thangNamGanNhat': '3b. Tháng/năm bắt đầu vụ gần đây nhất',
    'tenPhuPhamTanDung': '3c. Tên phụ phẩm cây trồng tận dụng để ủ lên men',
    'dienTichDat': '4f. Diện tích đất được sử dụng để trồng cây lấy phụ phẩm ủ lên men (số sào/ vụ)',
    'khoiLuongTrenDong': '4b. Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/ sào/ vụ x số sào)',
    'khoiLuongThuGom': '4c. Tổng khối lượng phụ phẩm cây trồng thu gom được (kg/ sào/ vụ x số sào)',
    'khoiLuongSuDungMen': '4d. Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ lên men (kg/ sào/ vụ x số sào)',
    'khoiLuongThucAnMen': '4e. Khối lượng thức ăn ủ lên men thu được (kg)',
    'mayBamCat': '4g. Sử dụng máy để băm/ cắt nhỏ phụ phẩm cây trồng (có/ không)',
    'nhienLieu': '4h. Lượng nhiên liệu đã sử dụng cho 1 lần lên men (dầu diesel/ hoặc điện; kg/ hoặc giờ)',
    'chiPhiKhac': '4i. Chi phí vật liệu/ đầu vào khác cho 1 lần lên men (ví dụ: thùng, túi ủ, chế phẩm,...)',
    // Section B (Before intervention baseline)
    'loaiCayTruoc': '7a. Loại cây trồng',
    'dienTichTruoc': '7b. Diện tích đất trồng cây',
    'loaiPhuPhamTruoc': '7c. Có những loại phụ phẩm cây trồng nào',
    'khoiLuongPhuPhamTruoc': '7d. Có bao nhiêu kg phụ phẩm cây trồng',
    'khoiLuongThuGomTruoc': '7e. Có bao nhiêu kg phụ phẩm cây trồng được thu gom',
    // Section C (Before/After comparison for livestock - ordered by question then by period)
    'tenVatNuoi': '5a. Tên vật nuôi sử dụng thức ăn ủ lên men',
    // 5b. Số lứa
    'soLuaTruocMen': '5b. Số lứa (TRƯỚC)',
    'soLuaSauMen': '5b. Số lứa (SAU)',
    // 5b. Số ngày/lứa
    'soNgayNuoiTruocMen': '5b. Số ngày/lứa (TRƯỚC)',
    'soNgayNuoiSauMen': '5b. Số ngày/lứa (SAU)',
    // 5c. Số lượng vật nuôi
    'soLuongVatNuoiTruoc': '5c. Số lượng vật nuôi (TRƯỚC)',
    'soLuongVatNuoiSau': '5c. Số lượng vật nuôi (SAU)',
    // 6a. Thức ăn - Tên và Kg
    'sauMen_kg_0': '6a. Thức ăn ủ lên men',
    'sauMen_kg_1': '6a. Sâu canxi/trùn quế',
    'sauMen_kg_2': '6a. Thức ăn tinh (ngô, gạo)',
    'sauMen_kg_3': '6a. Thức ăn tổng hợp/viên',
    'sauMen_kg_4': '6a. Thức ăn xanh',
    'truocMen_kg_0': '6a. Sâu canxi/ trùn quế',
    'truocMen_kg_1': '6a. Thức ăn tinh (ngô, gạo)',
    'truocMen_kg_2': '6a. Thức ăn tổng hợp/viên',
    'truocMen_kg_3': '6a. Thức ăn xanh',
    // 6b. Chi phí thức ăn
    'sauMen_tien_0': '6b. Thức ăn ủ lên men',
    'sauMen_tien_1': '6b. Sâu canxi/trùn quế',
    'sauMen_tien_2': '6b. Thức ăn tinh (ngô, gạo)',
    'sauMen_tien_3': '6b. Thức ăn tổng hợp/viên',
    'sauMen_tien_4': '6b. Thức ăn xanh',
    'truocMen_tien_0': '6b. Thức ăn ủ lên men',
    'truocMen_tien_1': '6b. Sâu canxi/trùn quế',
    'truocMen_tien_2': '6b. Thức ăn tinh (ngô, gạo)',
    'truocMen_tien_3': '6b. Thức ăn tổng hợp/viên',
    // 6c. Tiền thuốc
    'tienThuocSauMen': '6c. Số tiền chi mua thuốc thú y (SAU)',
    'tienThuocTruocMen': '6c. Số tiền chi mua thuốc thú y (TRƯỚC)',
    // 6d. Vật nuôi bị bệnh
    'vatNuoiBiBenhSau': '6d. Vật nuôi có bị bất kỳ bệnh nào không (SAU)',
    'vatNuoiBiBenhTruoc': '6d. Vật nuôi có bị bất kỳ bệnh nào không (TRƯỚC)',
    // 6e. Đánh giá sức khỏe
    'danhGiaSucKhoeSau': '6e. Bạn đánh giá sức khỏe vật nuôi như thế nào (SAU)',
    'danhGiaSucKhoeTruoc': '6e. Bạn đánh giá sức khỏe vật nuôi như thế nào (TRƯỚC)',
    // 6f. Vật nuôi phát triển nhanh
    'vatNuoiPhatTrienSau': '6f. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (SAU)',
    'vatNuoiPhatTrienTruoc': '6f. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (TRƯỚC)',
    // 6g. Thời gian nuôi
    'thoiGianNuoiSau': '6g. Thời gian nuôi đến khi xuất chuồng (tháng) (SAU)',
    'thoiGianNuoiTruoc': '6g. Thời gian nuôi đến khi xuất chuồng (tháng) (TRƯỚC)',
    // 6h. Trọng lượng xuất chuồng
    'trongLuongXuatSau': '6h. Trọng lượng trung bình khi xuất chuồng (kg/con) (SAU)',
    'trongLuongXuatTruoc': '6h. Trọng lượng trung bình khi xuất chuồng (kg/con) (TRƯỚC)',
    // 6i. Giá bán
    'giaBanSau': '6i. Giá bán (đồng/kg) (SAU)',
    'giaBanTruoc': '6i. Giá bán (đồng/kg) (TRƯỚC)',
    // 6j. Thành tiền
    'thanhTienSau': '6j. Thành tiền (đồng) (SAU)',
    'thanhTienTruoc': '6j. Thành tiền (đồng) (TRƯỚC)',
  },
  
  // Nuôi sâu canxi
  'nuoi-sau-canxi': {
    // Section A
    'ngayBatDau': '24a. Ngày bắt đầu',
    'soLuaSâuCanxi': '24b. Số lứa Sâu canxi đã nuôi',
    'soNgayMotLua': '24c. Số ngày để nuôi một lứa Sâu canxi (TB 45 ngày)',
    'tongChiPhiXayDung': '24d. Tổng chi phí xây dựng khu nuôi Sâu canxi (bao gồm vật liệu và nhân công)',
    'chiPhiMuaGiong': '24e. Chi phí mua giống (trứng Sâu canxi)/tổng số lứa',
    'chiPhiDauVaoKhac': '24f. Chi phí đầu vào/vật liệu khác (cho nuôi sâu canxi)',
    'cachSuDungSâuCanxi': '24g. Cách sử dụng Sâu canxi',
    'tenLoaiVatNuoi': '24h. Tên loài vật nuôi được nuôi bằng Sâu canxi',
    'soLuongConVatNuoi': '24i. Số lượng con vật nuôi/lứa',
    'soLuaVatNuoi': '24j. Số lứa (được cho ăn Sâu canxi)',
    'cachSuDungPhanSâuCanxi': '24k. Cách sử dụng phân Sâu canxi',
    'tenCayTrongPhanSâuCanxi': '24l. Tên những loài cây trồng được bón bằng phân Sâu canxi (1 ô ghi 1 loại cây trồng)',
    'tongSoVuTrongPhanSâuCanxi': '24m. Tổng số vụ trồng (sử dụng phân bón Sâu canxi; số vụ/năm)',
    'dienTichCayTrongPhanSâuCanxi': '24n. Diện tích cây trồng được bón phân Sâu canxi (số sào/vụ)',
    // Section B
    'loaiPhuPhamThucAn': '25a. Loại phụ phẩm nông nghiệp làm thức ăn cho Sâu canxi',
    'khoiLuongPhuPhamTB': '25b. Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày',
    'soLuongVatNuoi': '25c. Số lượng từng loại vật nuôi',
    'soNgayLuaNuoi': '25d. Số ngày/lứa nuôi',
    'soLuaNuoi': '25e. Số lứa nuôi',
    'tongKhoiLuongPhuPhamSX': '25f. Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg/ngày)',
    'khoiLuongPhuPhamDungChoSâuCanxi': '25g. Khối lượng phụ phẩm nông nghiệp dùng cho sâu canxi (kg/ngày)',
    'tyLePhuPhamDungChoSâuCanxi': '25h. Tỷ lệ % phụ phẩm nông nghiệp dùng cho sâu canxi (câu 25g/25f)',
    'dienTichNuoiSâuCanxi': '25i. Diện tích được sử dụng để nuôi sâu canxi (m2/lứa)',
    'chiPhiMuaGiongB': '25j. Chi phí mua giống (trứng sâu canxi, tính cho 1m2/lứa)',
    'soNgayDeNuoiMotLuaB': '25k. Số ngày để nuôi một lứa sâu canxi (ngày)',
    'khoiLuongSâuCanxiThuDuoc': '25l. Khối lượng sâu canxi thu được (kg/lứa)',
    'khoiLuongPhanSâuCanxiThuDuoc': '25m. Khối lượng phân sâu canxi thu được (kg/lứa)',
    'congLaoDong': '25n. Công lao động (số giờ/ngày)',
    // Section C - Comparison table
    'tenCayTrong': '26a. Tên loại cây trồng được bón phân sâu canxi',
    // KHÔNG BÓN PHÂN SÂU CANXI
    '26bkhong': '26b. Cây được trồng tháng/năm nào? (TRƯỚC)',
    '26ckhong': '26c. Diện tích trồng (sào/vụ) (TRƯỚC)',
    'khongPhanU_tenPhan_0': '26d. Phân NPK bón lót - Tên (TRƯỚC)',
    'khongPhanU_kg_0': '26d. Phân NPK bón lót - Kg (TRƯỚC)',
    'khongPhanU_tenPhan_1': '26d. Phân NPK bón thúc - Tên (TRƯỚC)',
    'khongPhanU_kg_1': '26d. Phân NPK bón thúc - Kg (TRƯỚC)',
    'khongPhanU_tenPhan_2': '26d. Phân khác - Tên (TRƯỚC)',
    'khongPhanU_kg_2': '26d. Phân khác - Kg (TRƯỚC)',
    'khongPhanU_tenPhanTien_0': '26e. Phân NPK bón lót - Tiền (TRƯỚC)',
    'khongPhanU_tien_0': '26e. Phân NPK bón lót - Số tiền (TRƯỚC)',
    'khongPhanU_tenPhanTien_1': '26e. Phân NPK bón thúc - Tiền (TRƯỚC)',
    'khongPhanU_tien_1': '26e. Phân NPK bón thúc - Số tiền (TRƯỚC)',
    'khongPhanU_tenPhanTien_2': '26e. Phân khác - Tiền (TRƯỚC)',
    'khongPhanU_tien_2': '26e. Phân khác - Số tiền (TRƯỚC)',
    '32ekhong': '26f. Số lần phun thuốc trừ sâu hóa học (TRƯỚC)',
    '32fkhong': '26g. Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/sào/vụ) (TRƯỚC)',
    '32gkhong': '26h. Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/sào/vụ) (TRƯỚC)',
    '32hkhong': '26i. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ) (TRƯỚC)',
    '32ikhong': '26j. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ) (TRƯỚC)',
    '32jkhong': '26k. Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ) (TRƯỚC)',
    '32kkhong': '26l. Số tiền đã chi cho mua hạt giống (đồng/sào/vụ) (TRƯỚC)',
    '32lkhong': '26m. Cây trồng có bị sâu bệnh tấn công (có/không) (TRƯỚC)',
    '32mtruoc': '26n. Năng suất thu hoạch (kg/sào) (TRƯỚC)',
    '32ntruoc': '26o. Giá bán (đồng/kg) (TRƯỚC)',
    '32otruoc': '26p. Thành tiền (đồng) (TRƯỚC)',
    // SAU KHI BÓN PHÂN SÂU CANXI
    '26bsau': '26b. Cây được trồng tháng/năm nào? (SAU)',
    '26csau': '26c. Diện tích trồng (sào/vụ) (SAU)',
    'sauPhanU_tenPhan2_0': '26d. Phân NPK bón lót - Tên (SAU)',
    'sauPhanU_kg2_0': '26d. Phân NPK bón lót - Kg (SAU)',
    'sauPhanU_tenPhan2_1': '26d. Phân NPK bón thúc - Tên (SAU)',
    'sauPhanU_kg2_1': '26d. Phân NPK bón thúc - Kg (SAU)',
    'sauPhanU_tenPhan2_2': '26d. Phân sâu canxi - Tên (SAU)',
    'sauPhanU_kg2_2': '26d. Phân sâu canxi - Kg (SAU)',
    'sauPhanU_tenPhan2_3': '26d. Phân khác - Tên (SAU)',
    'sauPhanU_kg2_3': '26d. Phân khác - Kg (SAU)',
    'sauPhanU_tenPhanTien2_0': '26e. Phân NPK bón lót - Tiền (SAU)',
    'sauPhanU_tien2_0': '26e. Phân NPK bón lót - Số tiền (SAU)',
    'sauPhanU_tenPhanTien2_1': '26e. Phân NPK bón thúc - Tiền (SAU)',
    'sauPhanU_tien2_1': '26e. Phân NPK bón thúc - Số tiền (SAU)',
    'sauPhanU_tenPhanTien2_2': '26e. Phân sâu canxi - Tiền (SAU)',
    'sauPhanU_tien2_2': '26e. Phân sâu canxi - Số tiền (SAU)',
    'sauPhanU_tenPhanTien2_3': '26e. Phân khác - Tiền (SAU)',
    'sauPhanU_tien2_3': '26e. Phân khác - Số tiền (SAU)',
    '32esau': '26f. Số lần phun thuốc trừ sâu hóa học (SAU)',
    '32fsau': '26g. Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/sào/vụ) (SAU)',
    '32gsau': '26h. Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/sào/vụ) (SAU)',
    '32hsao': '26i. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ) (SAU)',
    '32isau': '26j. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ) (SAU)',
    '32jsau': '26k. Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ) (SAU)',
    '32ksau': '26l. Số tiền đã chi cho mua hạt giống (đồng/sào/vụ) (SAU)',
    '32lsau': '26m. Cây trồng có bị sâu bệnh tấn công (có/không) (SAU)',
    '32msau': '26n. Năng suất thu hoạch (kg/sào) (SAU)',
    '32nsau': '26o. Giá bán (đồng/kg) (SAU)',
    '32osau': '26p. Thành tiền (đồng) (SAU)',
    // Section D - Livestock feeding comparison
    'loaiVatNuoi': '29a. Loại vật nuôi',
    // KHÔNG SỬ DỤNG SÂU CANXI LÀM THỨC ĂN
    '29akhong': '29b. Số con vật nuôi (số con/lứa) (TRƯỚC)',
    'khongCanxi_tenThucAn_0': '29c. Thức ăn tinh (ngô, gạo) - Tên (TRƯỚC)',
    'khongCanxi_kg_0': '29c. Thức ăn tinh (ngô, gạo) - Kg (TRƯỚC)',
    'khongCanxi_tenThucAn_1': '29c. Thức ăn tổng hợp/viên - Tên (TRƯỚC)',
    'khongCanxi_kg_1': '29c. Thức ăn tổng hợp/viên - Kg (TRƯỚC)',
    'khongCanxi_tenThucAn_2': '29c. Thức ăn xanh - Tên (TRƯỚC)',
    'khongCanxi_kg_2': '29c. Thức ăn xanh - Kg (TRƯỚC)',
    'khongCanxi_tenThucAnTien_0': '29d. Thức ăn tinh (ngô, gạo) - Tiền (TRƯỚC)',
    'khongCanxi_tien_0': '29d. Thức ăn tinh (ngô, gạo) - Số tiền (TRƯỚC)',
    'khongCanxi_tenThucAnTien_1': '29d. Thức ăn tổng hợp/viên - Tiền (TRƯỚC)',
    'khongCanxi_tien_1': '29d. Thức ăn tổng hợp/viên - Số tiền (TRƯỚC)',
    'khongCanxi_tenThucAnTien_2': '29d. Thức ăn xanh - Tiền (TRƯỚC)',
    'khongCanxi_tien_2': '29d. Thức ăn xanh - Số tiền (TRƯỚC)',
    '29dkhong': '29e. Số tiền đã chi cho mua thuốc thú y/lứa (đồng) (TRƯỚC)',
    '29ekhong': '29f. Vật nuôi có bị bất kỳ bệnh nào không (TRƯỚC)',
    '29fkhong': '29g. Bạn đánh giá sức khỏe vật nuôi (1 = cực kỳ tệ, 10: rất tốt) (TRƯỚC)',
    '29gkhong': '29h. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (TRƯỚC)',
    '29hkhong': '29i. Thời gian nuôi đến khi xuất chuồng (tháng) (TRƯỚC)',
    '29ikhong': '29j. Trọng lượng trung bình khi xuất chuồng (kg/con) (TRƯỚC)',
    '29jkhong': '29k. Giá bán (đồng/kg) (TRƯỚC)',
    '29kkhong': '29l. Thành tiền (đồng) (TRƯỚC)',
    // SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN
    '29asau': '29b. Số con vật nuôi (số con/lứa) (SAU)',
    'sauCanxi_tenThucAn_0': '29c. Sâu canxi - Tên (SAU)',
    'sauCanxi_kg_0': '29c. Sâu canxi - Kg (SAU)',
    'sauCanxi_tenThucAn_1': '29c. Thức ăn tinh (ngô, gạo) - Tên (SAU)',
    'sauCanxi_kg_1': '29c. Thức ăn tinh (ngô, gạo) - Kg (SAU)',
    'sauCanxi_tenThucAn_2': '29c. Thức ăn tổng hợp/viên - Tên (SAU)',
    'sauCanxi_kg_2': '29c. Thức ăn tổng hợp/viên - Kg (SAU)',
    'sauCanxi_tenThucAn_3': '29c. Thức ăn xanh - Tên (SAU)',
    'sauCanxi_kg_3': '29c. Thức ăn xanh - Kg (SAU)',
    'sauCanxi_tenThucAnTien_0': '29d. Sâu canxi - Tiền (SAU)',
    'sauCanxi_tien_0': '29d. Sâu canxi - Số tiền (SAU)',
    'sauCanxi_tenThucAnTien_1': '29d. Thức ăn tinh (ngô, gạo) - Tiền (SAU)',
    'sauCanxi_tien_1': '29d. Thức ăn tinh (ngô, gạo) - Số tiền (SAU)',
    'sauCanxi_tenThucAnTien_2': '29d. Thức ăn tổng hợp/viên - Tiền (SAU)',
    'sauCanxi_tien_2': '29d. Thức ăn tổng hợp/viên - Số tiền (SAU)',
    'sauCanxi_tenThucAnTien_3': '29d. Thức ăn xanh - Tiền (SAU)',
    'sauCanxi_tien_3': '29d. Thức ăn xanh - Số tiền (SAU)',
    '29dsau': '29e. Số tiền đã chi cho mua thuốc thú y/lứa (đồng) (SAU)',
    '29esau': '29f. Vật nuôi có bị bất kỳ bệnh nào không (SAU)',
    '29fsau': '29g. Bạn đánh giá sức khỏe vật nuôi (1 = cực kỳ tệ, 10: rất tốt) (SAU)',
    '29gsau': '29h. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (SAU)',
    '29hsau': '29i. Thời gian nuôi đến khi xuất chuồng (tháng) (SAU)',
    '29isau': '29j. Trọng lượng trung bình khi xuất chuồng (kg/con) (SAU)',
    '29jsau': '29k. Giá bán (đồng/kg) (SAU)',
    '29ksau': '29l. Thành tiền (đồng) (SAU)',
  },
  
  // Nuôi gà đệm lót
  'nuoi-ga-dem-lot': {
    // Section A
    'tenPhuPhamTruoc': '30a. Tên phụ phẩm cây trồng (tận dụng làm đệm lót sinh học dày TỪ TRƯỚC ĐẾN NAY)',
    'thangNamBatDau': '30b. Tháng/năm bắt đầu áp dụng kỹ thuật',
    'tongSoMuaVu': '30c. Tổng số mùa vụ đã tận dụng phụ phẩm để làm đệm lót sinh học TỪ TRƯỚC ĐẾN NAY (vụ)',
    'tenCayBonPhan': '30d. Tên những loại cây trồng được bón phân ủ thu được từ lớp đệm lót',
    'dienTichCayBonPhan': '30e. Diện tích cây trồng được bón phân ủ thu được từ lớp đệm lót trong 1 vụ (sào/vụ)',
    'tongSoMuaVuBonPhan': '30f. Tổng số mùa vụ đã được bón phân ủ thu được từ lớp đệm lót',
    'tenPhuPhamDuocTao': '31a. Tên phụ phẩm cây trồng được tận dụng làm đệm lót sinh học dày',
    'khoiLuongTrenDong': '31b. Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)',
    'khoiLuongThuGom': '31c. Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)',
    'tongKhoiLuongLamDemLot': '31d. Tổng khối lượng phụ phẩm cây trồng được tận dụng để làm đệm lót (kg)',
    'tongKhoiLuongPhanU': '31e. Tổng khối lượng phân ủ thu được từ lớp đệm lót (kg)',
    'dienTichTaoPhuPham': '31f. Diện tích cây trồng tạo ra loại phụ phẩm được tận dụng làm đệm lót sinh học dày (sào)',
    'mayBamCat': '31g. Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng',
    'nhienLieu': '31h. Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)',
    'chiPhiKhac': '31i. Chi phí vật liệu/đầu vào khác (ví dụ: nhân công, chế phẩm, …) (đồng)',
    // Section B
    'loaiCayTruoc': '34a. Loại cây trồng, TRƯỚC KHI áp dụng kỹ thuật',
    'dienTichTruoc': '34b. Diện tích đất trồng cây, TRƯỚC KHI áp dụng kỹ thuật (sào/vụ x số vụ/năm)',
    'loaiPhuPhamTruoc': '34c. Có những loại phụ phẩm cây trồng nào, TRƯỚC KHI áp dụng kỹ thuật',
    'khoiLuongPhuPhamTruoc': '34d. Có bao nhiêu kg phụ phẩm cây trồng tại ruộng/vườn TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)',
    'khoiLuongThuGomTruoc': '34e. Có bao nhiêu kg phụ phẩm cây trồng được thu gom TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)',
    // Section C (phanU) - Phân ủ comparison table
    'tenCayTrong': '32a. Tên cây trồng được bón phân ủ từ lớp đệm lót',
    // KHÔNG BÓN PHÂN Ủ (TRƯỚC)
    '32bkhong': '32b. Diện tích (sào) (TRƯỚC)',
    'khongPhanU_tenPhan_0': '32c. Phân NPK bón lót - Tên (TRƯỚC)',
    'khongPhanU_kg_0': '32c. Phân NPK bón lót - Kg (TRƯỚC)',
    'khongPhanU_tenPhan_1': '32c. Phân NPK bón thúc - Tên (TRƯỚC)',
    'khongPhanU_kg_1': '32c. Phân NPK bón thúc - Kg (TRƯỚC)',
    'khongPhanU_tenPhan_2': '32c. Phân khác - Tên (TRƯỚC)',
    'khongPhanU_kg_2': '32c. Phân khác - Kg (TRƯỚC)',
    'khongPhanU_tenPhanTien_0': '32d. Phân NPK bón lót - Tiền (TRƯỚC)',
    'khongPhanU_tien_0': '32d. Phân NPK bón lót - Số tiền (TRƯỚC)',
    'khongPhanU_tenPhanTien_1': '32d. Phân NPK bón thúc - Tiền (TRƯỚC)',
    'khongPhanU_tien_1': '32d. Phân NPK bón thúc - Số tiền (TRƯỚC)',
    'khongPhanU_tenPhanTien_2': '32d. Phân khác - Tiền (TRƯỚC)',
    'khongPhanU_tien_2': '32d. Phân khác - Số tiền (TRƯỚC)',
    '32ekhong': '32e. Số lần phun thuốc trừ sâu hóa học (TRƯỚC)',
    '32fkhong': '32f. Số lượng thuốc sâu hóa học được sử dụng (bình) (TRƯỚC)',
    '32gkhong': '32g. Số lượng thuốc cỏ được sử dụng (bình) (TRƯỚC)',
    '32hkhong': '32h. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào) (TRƯỚC)',
    '32ikhong': '32i. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào) (TRƯỚC)',
    '32jkhong': '32j. Số tiền công lao động (số công/sào x số sào x đơn giá ngày công TB) (1 công = 8 giờ) (TRƯỚC)',
    '32kkhong': '32k. Số tiền mua hạt giống (đồng/sào) (TRƯỚC)',
    '32lkhong': '32l. Cây trồng có bị sâu bệnh tấn công không? (TRƯỚC)',
    '32mtruoc': '32m. Năng suất thu hoạch (kg/sào) (TRƯỚC)',
    '32ntruoc': '32n. Giá bán (đồng/kg) (TRƯỚC)',
    '32otruoc': '32o. Thành tiền (đồng) (TRƯỚC)',
    // SAU KHI BÓN PHÂN Ủ (SAU)
    'dienTichSauPhanU2': '32b. Diện tích (sào) (SAU)',
    'sauPhanU_tenPhan2_0': '32c. Phân NPK bón lót - Tên (SAU)',
    'sauPhanU_kg2_0': '32c. Phân NPK bón lót - Kg (SAU)',
    'sauPhanU_tenPhan2_1': '32c. Phân NPK bón thúc - Tên (SAU)',
    'sauPhanU_kg2_1': '32c. Phân NPK bón thúc - Kg (SAU)',
    'sauPhanU_tenPhan2_2': '32c. Phân ủ từ lớp đệm lót - Tên (SAU)',
    'sauPhanU_kg2_2': '32c. Phân ủ từ lớp đệm lót - Kg (SAU)',
    'sauPhanU_tenPhan2_3': '32c. Phân khác - Tên (SAU)',
    'sauPhanU_kg2_3': '32c. Phân khác - Kg (SAU)',
    'sauPhanU_tenPhanTien2_0': '32d. Phân NPK bón lót - Tiền (SAU)',
    'sauPhanU_tien2_0': '32d. Phân NPK bón lót - Số tiền (SAU)',
    'sauPhanU_tenPhanTien2_1': '32d. Phân NPK bón thúc - Tiền (SAU)',
    'sauPhanU_tien2_1': '32d. Phân NPK bón thúc - Số tiền (SAU)',
    'sauPhanU_tenPhanTien2_2': '32d. Phân ủ từ lớp đệm lót - Tiền (SAU)',
    'sauPhanU_tien2_2': '32d. Phân ủ từ lớp đệm lót - Số tiền (SAU)',
    'sauPhanU_tenPhanTien2_3': '32d. Phân khác - Tiền (SAU)',
    'sauPhanU_tien2_3': '32d. Phân khác - Số tiền (SAU)',
    '32esau': '32e. Số lần phun thuốc trừ sâu hóa học (SAU)',
    '32fsau': '32f. Số lượng thuốc sâu hóa học được sử dụng (bình) (SAU)',
    '32gsau': '32g. Số lượng thuốc cỏ được sử dụng (bình) (SAU)',
    '32hsao': '32h. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào) (SAU)',
    '32isau': '32i. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào) (SAU)',
    '32jsau': '32j. Số tiền công lao động (số công/sào x số sào x đơn giá ngày công TB) (1 công = 8 giờ) (SAU)',
    '32ksau': '32k. Số tiền mua hạt giống (đồng/sào) (SAU)',
    '32lsau': '32l. Cây trồng có bị sâu bệnh tấn công không? (SAU)',
    '32msau': '32m. Năng suất thu hoạch (kg/sào) (SAU)',
    '32nsau': '32n. Giá bán (đồng/kg) (SAU)',
    '32osau': '32o. Thành tiền (đồng) (SAU)',
    // Section D (danGa) - Poultry comparison table
    // SAU KHI (TRƯỚC KHI đệm lót)
    'soLuongGaSauDemLot': '35a. Số lượng gà trong đợt nuôi (con) (TRƯỚC)',
    'sauDemLot_tenThucAn_0': '35b. Sâu canxi/trùn quế - Tên (TRƯỚC)',
    'sauDemLot_kg_0': '35b. Sâu canxi/trùn quế - Kg (TRƯỚC)',
    'sauDemLot_tenThucAn_1': '35b. Thức ăn tinh (ngô, gạo) - Tên (TRƯỚC)',
    'sauDemLot_kg_1': '35b. Thức ăn tinh (ngô, gạo) - Kg (TRƯỚC)',
    'sauDemLot_tenThucAn_2': '35b. Thức ăn tổng hợp/viên - Tên (TRƯỚC)',
    'sauDemLot_kg_2': '35b. Thức ăn tổng hợp/viên - Kg (TRƯỚC)',
    'sauDemLot_tenThucAn_3': '35b. Thức ăn xanh - Tên (TRƯỚC)',
    'sauDemLot_kg_3': '35b. Thức ăn xanh - Kg (TRƯỚC)',
    'sauDemLot_tenThucAnTien_0': '35c. Sâu canxi/trùn quế - Tiền (TRƯỚC)',
    'sauDemLot_tien_0': '35c. Sâu canxi/trùn quế - Số tiền (TRƯỚC)',
    'sauDemLot_tenThucAnTien_1': '35c. Thức ăn tinh (ngô, gạo) - Tiền (TRƯỚC)',
    'sauDemLot_tien_1': '35c. Thức ăn tinh (ngô, gạo) - Số tiền (TRƯỚC)',
    'sauDemLot_tenThucAnTien_2': '35c. Thức ăn tổng hợp/viên - Tiền (TRƯỚC)',
    'sauDemLot_tien_2': '35c. Thức ăn tổng hợp/viên - Số tiền (TRƯỚC)',
    'sauDemLot_tenThucAnTien_3': '35c. Thức ăn xanh - Tiền (TRƯỚC)',
    'sauDemLot_tien_3': '35c. Thức ăn xanh - Số tiền (TRƯỚC)',
    'tienThuoc': '35d. Số tiền đã chi cho mua thuốc thú y (đồng) (TRƯỚC)',
    'gioDonDep': '35e. Số giờ dành cho việc dọn dẹp chuồng gà trong 1 tuần (TRƯỚC)',
    'gaBiBenh': '35f. Đàn gà có mắc bệnh gì không (TRƯỚC)',
    'danhGiaSucKhoe': '35g. Đánh giá sức khỏe đàn gà (1= cực kỳ tệ, 10= rất tốt) (TRƯỚC)',
    'soNgayDatTrongLuong': '35h. Số ngày để đạt được trọng lượng mong muốn? (TRƯỚC)',
    'trongLuongXuatChuong': '35i. Trọng lượng trung bình khi xuất chuồng (kg/con) (TRƯỚC)',
    'tongThoiGianNuoi': '35j. Tổng thời gian nuôi đến khi xuất chuồng (tháng) (TRƯỚC)',
    'gaPhatTrienNhanhHon': '35k. Đàn gà có phát triển nhanh hơn và/hoặc lớn hơn (TRƯỚC)',
    'giaBan': '35l. Giá bán (đồng/kg) (TRƯỚC)',
    'tongThuNhap': '35m. Tổng thu nhập (TRƯỚC)',
    'danhGiaMui': '35n. Đánh giá mùi từ chuồng gà (0= không có mùi, 10= cực kỳ khó chịu) (TRƯỚC)',
    // TRƯỚC KHI đệm lót (SAU)
    'soLuongGaTruocDemLot': '35a. Số lượng gà trong đợt nuôi (con) (SAU)',
    'truocDemLot_tenThucAn_0': '35b. Thức ăn tinh (ngô, gạo) - Tên (SAU)',
    'truocDemLot_kg_0': '35b. Thức ăn tinh (ngô, gạo) - Kg (SAU)',
    'truocDemLot_tenThucAn_1': '35b. Thức ăn tổng hợp/viên - Tên (SAU)',
    'truocDemLot_kg_1': '35b. Thức ăn tổng hợp/viên - Kg (SAU)',
    'truocDemLot_tenThucAn_2': '35b. Thức ăn xanh - Tên (SAU)',
    'truocDemLot_kg_2': '35b. Thức ăn xanh - Kg (SAU)',
    'truocDemLot_tenThucAnTien_0': '35c. Thức ăn tinh (ngô, gạo) - Tiền (SAU)',
    'truocDemLot_tien_0': '35c. Thức ăn tinh (ngô, gạo) - Số tiền (SAU)',
    'truocDemLot_tenThucAnTien_1': '35c. Thức ăn tổng hợp/viên - Tiền (SAU)',
    'truocDemLot_tien_1': '35c. Thức ăn tổng hợp/viên - Số tiền (SAU)',
    'truocDemLot_tenThucAnTien_2': '35c. Thức ăn xanh - Tiền (SAU)',
    'truocDemLot_tien_2': '35c. Thức ăn xanh - Số tiền (SAU)',
    'tienThuoc2': '35d. Số tiền đã chi cho mua thuốc thú y (đồng) (SAU)',
    'gioDonDep2': '35e. Số giờ dành cho việc dọn dẹp chuồng gà trong 1 tuần (SAU)',
    'gaBiBenh2': '35f. Đàn gà có mắc bệnh gì không (SAU)',
    'danhGiaSucKhoe2': '35g. Đánh giá sức khỏe đàn gà (1= cực kỳ tệ, 10= rất tốt) (SAU)',
    'soNgayDatTrongLuong2': '35h. Số ngày để đạt được trọng lượng mong muốn? (SAU)',
    'trongLuongXuatChuong2': '35i. Trọng lượng trung bình khi xuất chuồng (kg/con) (SAU)',
    'tongThoiGianNuoi2': '35j. Tổng thời gian nuôi đến khi xuất chuồng (tháng) (SAU)',
    'gaPhatTrienNhanhHon2': '35k. Đàn gà có phát triển nhanh hơn và/hoặc lớn hơn (SAU)',
    'giaBan2': '35l. Giá bán (đồng/kg) (SAU)',
    'tongThuNhap2': '35m. Tổng thu nhập (SAU)',
    'danhGiaMui2': '35n. Đánh giá mùi từ chuồng gà (0= không có mùi, 10= cực kỳ khó chịu) (SAU)',
  },
  
  // Nuôi trùn quế
  'nuoi-trun-que': {
    // Section A
    'ngayBatDau': '18a. Ngày bắt đầu',
    'soLuaTrunQue': '18b. Số lứa trùn quế đã nuôi',
    'soNgayMotLua': '18c. Số ngày để nuôi một lứa trùn quế (bắt đầu thả sinh khối – thu hoạch, TB 60 ngày)',
    'tongChiPhiXayDung': '18d. Tổng chi phí xây dựng khu nuôi trùn quế (bao gồm vật liệu và nhân công)',
    'chiPhiMuaGiong': '18e. Chi phí mua giống (sinh khối trùn quế)',
    'chiPhiDauVaoKhac': '18f. Chi phí đầu vào/vật liệu khác (cho Trùn quế)',
    'cachSuDungTrunQue': '18g. Cách sử dụng trùn quế',
    'tenLoaiVatNuoi': '18h. Tên loài vật nuôi được nuôi bằng trùn quế',
    'soLuongConVatNuoi': '18i. Số lượng con vật nuôi/lứa',
    'soLuaVatNuoi': '18j. Số lứa (được cho ăn trùn quế)',
    'cachSuDungPhanTrunQue': '18k. Cách sử dụng phân trùn quế',
    'tenCayTrongPhanTrunQue': '18l. Nêu tên những loài cây trồng được bón bằng phân trùn quế (1 ô ghi 1 loại cây trồng)',
    'tongSoVuTrongPhanTrunQue': '18m. Tổng số vụ trồng (sử dụng phân bón trùn quế/vụ; số vụ/năm x số năm)',
    'dienTichCayTrongPhanTrunQue': '18n. Diện tích cây trồng được bón phân trùn quế (số sào/vụ x số vụ/năm)',
    // Section B
    'loaiPhuPhamThucAn': '19a. Loại phụ phẩm nông nghiệp làm thức ăn cho trùn quế',
    'khoiLuongPhuPhamTB': '19b. Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày (kg/con/ngày)',
    'soLuongVatNuoi': '19c. Số lượng từng loại vật nuôi',
    'soNgayLuaNuoi': '19d. Số ngày/lứa nuôi',
    'soLuaNuoi': '19e. Số lứa nuôi',
    'tongKhoiLuongPhuPhamSX': '19f. Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg)',
    'khoiLuongPhuPhamDungChoTrunQue': '19g. Khối lượng phụ phẩm nông nghiệp dùng cho trùn quế (kg/ngày)',
    'tyLePhuPhamDungChoTrunQue': '19h. Tỷ lệ % phụ phẩm nông nghiệp dùng cho trùn quế (19g/19f)',
    'dienTichNuoiTrunQue': '19i. Diện tích được sử dụng để nuôi trùn quế (m2/lứa)',
    'chiPhiMuaGiongB': '19j. Chi phí mua giống (sinh khối trùn quế, tính cho 1m2/lứa)',
    'soNgayDeNuoiMotLuaB': '19k. Số ngày để nuôi một lứa trùn quế (ngày)',
    'khoiLuongTrunQueThuDuoc': '19l. Khối lượng trùn quế thu được (kg/lứa)',
    'khoiLuongPhanTrunQueThuDuoc': '19m. Khối lượng phân trùn quế thu được (kg/lứa)',
    'congLaoDong': '19n. Công lao động (số giờ/ngày)',
    'gioQuetDonPhanChuongTruoc': '19o. Khi chưa nuôi trùn quế, trong 1 ngày dành bao nhiêu giờ để quét dọn phân chuồng',
    'gioDonPhanChuongSau': '19p. Khi nuôi trùn quế, 1 ngày dành bao nhiêu giờ để dọn dẹp phân chuồng dùng cho trùn quế',
    // Section C: Crop comparison KHÔNG vs SAU
    '20a': '20a. Nêu tên loại cây trồng được bón phân trùn quế',
    // KHÔNG BÓN PHÂN TRÙN QUẾ
    '20btruoc': '20b. Cây được trồng tháng/năm nào? (TRƯỚC)',
    '20ctruoc': '20c. Diện tích trồng (sào/vụ) (TRƯỚC)',
    'khongPhan_tenPhan_0': '20d. Phân NPK bón lót - Tên (TRƯỚC)',
    'khongPhan_kg_0': '20d. Phân NPK bón lót - Kg (TRƯỚC)',
    'khongPhan_tenPhan_1': '20d. Phân NPK bón thúc - Tên (TRƯỚC)',
    'khongPhan_kg_1': '20d. Phân NPK bón thúc - Kg (TRƯỚC)',
    'khongPhan_tenPhan_2': '20d. Phân trùn quế - Tên (TRƯỚC)',
    'khongPhan_kg_2': '20d. Phân trùn quế - Kg (TRƯỚC)',
    'khongPhan_tenPhan_3': '20d. Phân khác - Tên (TRƯỚC)',
    'khongPhan_kg_3': '20d. Phân khác - Kg (TRƯỚC)',
    'khongPhan_tenPhanTien_0': '20e. Phân NPK bón lót - Tiền (TRƯỚC)',
    'khongPhan_tien_0': '20e. Phân NPK bón lót - Số tiền (TRƯỚC)',
    'khongPhan_tenPhanTien_1': '20e. Phân NPK bón thúc - Tiền (TRƯỚC)',
    'khongPhan_tien_1': '20e. Phân NPK bón thúc - Số tiền (TRƯỚC)',
    'khongPhan_tenPhanTien_2': '20e. Phân trùn quế - Tiền (TRƯỚC)',
    'khongPhan_tien_2': '20e. Phân trùn quế - Số tiền (TRƯỚC)',
    'khongPhan_tenPhanTien_3': '20e. Phân khác - Tiền (TRƯỚC)',
    'khongPhan_tien_3': '20e. Phân khác - Số tiền (TRƯỚC)',
    '20ftruoc': '20f. Số lần phun thuốc trừ sâu hóa học (TRƯỚC)',
    '20gtruoc': '20g. Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/sào/vụ) (TRƯỚC)',
    '20htruoc': '20h. Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/sào/vụ) (TRƯỚC)',
    '20itruoc': '20i. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ) (TRƯỚC)',
    '20jtruoc': '20j. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ) (TRƯỚC)',
    '20ktruoc': '20k. Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ) (TRƯỚC)',
    '20ltruoc': '20l. Số tiền đã chi cho mua hạt giống (đồng/sào/vụ) (TRƯỚC)',
    '20mtruoc': '20m. Cây trồng có bị sâu bệnh tấn công (có/không) (TRƯỚC)',
    '20ntruoc': '20n. Năng suất thu hoạch (kg/sào) (TRƯỚC)',
    '20otruoc': '20o. Giá bán (đồng/kg) (TRƯỚC)',
    '20ptruoc': '20p. Thành tiền (đồng) (TRƯỚC)',
    // SAU KHI BÓN PHÂN TRÙN QUẾ
    '20bsau': '20b. Cây được trồng tháng/năm nào? (SAU)',
    '20csau': '20c. Diện tích trồng (sào/vụ) (SAU)',
    'sauPhan_tenPhan_0': '20d. Phân NPK bón lót - Tên (SAU)',
    'sauPhan_kg_0': '20d. Phân NPK bón lót - Kg (SAU)',
    'sauPhan_tenPhan_1': '20d. Phân NPK bón thúc - Tên (SAU)',
    'sauPhan_kg_1': '20d. Phân NPK bón thúc - Kg (SAU)',
    'sauPhan_tenPhan_2': '20d. Phân trùn quế - Tên (SAU)',
    'sauPhan_kg_2': '20d. Phân trùn quế - Kg (SAU)',
    'sauPhan_tenPhan_3': '20d. Phân khác - Tên (SAU)',
    'sauPhan_kg_3': '20d. Phân khác - Kg (SAU)',
    'sauPhan_tenPhanTien_0': '20e. Phân NPK bón lót - Tiền (SAU)',
    'sauPhan_tien_0': '20e. Phân NPK bón lót - Số tiền (SAU)',
    'sauPhan_tenPhanTien_1': '20e. Phân NPK bón thúc - Tiền (SAU)',
    'sauPhan_tien_1': '20e. Phân NPK bón thúc - Số tiền (SAU)',
    'sauPhan_tenPhanTien_2': '20e. Phân trùn quế - Tiền (SAU)',
    'sauPhan_tien_2': '20e. Phân trùn quế - Số tiền (SAU)',
    'sauPhan_tenPhanTien_3': '20e. Phân khác - Tiền (SAU)',
    'sauPhan_tien_3': '20e. Phân khác - Số tiền (SAU)',
    '20fsau': '20f. Số lần phun thuốc trừ sâu hóa học (SAU)',
    '20gsau': '20g. Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/sào/vụ) (SAU)',
    '20hsau': '20h. Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/sào/vụ) (SAU)',
    '20isau': '20i. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ) (SAU)',
    '20jsau': '20j. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ) (SAU)',
    '20ksau': '20k. Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ) (SAU)',
    '20lsau': '20l. Số tiền đã chi cho mua hạt giống (đồng/sào/vụ) (SAU)',
    '20msau': '20m. Cây trồng có bị sâu bệnh tấn công (có/không) (SAU)',
    '20nsau': '20n. Năng suất thu hoạch (kg/sào) (SAU)',
    '20osau': '20o. Giá bán (đồng/kg) (SAU)',
    '20psau': '20p. Thành tiền (đồng) (SAU)',
    // Section D: Livestock feeding comparison KHÔNG vs SAU
    '21a': '21a. Loại vật nuôi',
    // KHÔNG SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN
    '29akhong': '21b. Số con vật nuôi (số con/lứa) (TRƯỚC)',
    'khongCanxi_tenThucAn_0': '21c. Thức ăn tinh (ngô, gạo) - Tên (TRƯỚC)',
    'khongCanxi_kg_0': '21c. Thức ăn tinh (ngô, gạo) - Kg (TRƯỚC)',
    'khongCanxi_tenThucAn_1': '21c. Thức ăn tổng hợp/viên - Tên (TRƯỚC)',
    'khongCanxi_kg_1': '21c. Thức ăn tổng hợp/viên - Kg (TRƯỚC)',
    'khongCanxi_tenThucAn_2': '21c. Thức ăn xanh - Tên (TRƯỚC)',
    'khongCanxi_kg_2': '21c. Thức ăn xanh - Kg (TRƯỚC)',
    'khongCanxi_tenThucAnTien_0': '21d. Thức ăn tinh (ngô, gạo) - Tiền (TRƯỚC)',
    'khongCanxi_tien_0': '21d. Thức ăn tinh (ngô, gạo) - Số tiền (TRƯỚC)',
    'khongCanxi_tenThucAnTien_1': '21d. Thức ăn tổng hợp/viên - Tiền (TRƯỚC)',
    'khongCanxi_tien_1': '21d. Thức ăn tổng hợp/viên - Số tiền (TRƯỚC)',
    'khongCanxi_tenThucAnTien_2': '21d. Thức ăn xanh - Tiền (TRƯỚC)',
    'khongCanxi_tien_2': '21d. Thức ăn xanh - Số tiền (TRƯỚC)',
    '29dkhong': '21e. Số tiền đã chi cho mua thuốc thú y (TRƯỚC)',
    '29ekhong': '21f. Vật nuôi có bị bất kỳ bệnh nào không (TRƯỚC)',
    '29fkhong': '21g. Bạn đánh giá sức khỏe vật nuôi (1 = cực kỳ tệ, 10: rất tốt) (TRƯỚC)',
    '29gkhong': '21h. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (TRƯỚC)',
    '29hkhong': '21i. Thời gian nuôi đến khi xuất chuồng (tháng) (TRƯỚC)',
    '29ikhong': '21j. Trọng lượng trung bình khi xuất chuồng (kg/con) (TRƯỚC)',
    '29jkhong': '21k. Giá bán (đồng/kg) (TRƯỚC)',
    '29kkhong': '21l. Thành tiền (đồng) (TRƯỚC)',
    // SAU KHI SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN
    '29asau': '21b. Số con vật nuôi (số con/lứa) (SAU)',
    'sauCanxi_tenThucAn_0': '21c. Trùn quế - Tên (SAU)',
    'sauCanxi_kg_0': '21c. Trùn quế - Kg (SAU)',
    'sauCanxi_tenThucAn_1': '21c. Thức ăn tinh (ngô, gạo) - Tên (SAU)',
    'sauCanxi_kg_1': '21c. Thức ăn tinh (ngô, gạo) - Kg (SAU)',
    'sauCanxi_tenThucAn_2': '21c. Thức ăn tổng hợp/viên - Tên (SAU)',
    'sauCanxi_kg_2': '21c. Thức ăn tổng hợp/viên - Kg (SAU)',
    'sauCanxi_tenThucAn_3': '21c. Thức ăn xanh - Tên (SAU)',
    'sauCanxi_kg_3': '21c. Thức ăn xanh - Kg (SAU)',
    'sauCanxi_tenThucAnTien_0': '21d. Trùn quế - Tiền (SAU)',
    'sauCanxi_tien_0': '21d. Trùn quế - Số tiền (SAU)',
    'sauCanxi_tenThucAnTien_1': '21d. Thức ăn tinh (ngô, gạo) - Tiền (SAU)',
    'sauCanxi_tien_1': '21d. Thức ăn tinh (ngô, gạo) - Số tiền (SAU)',
    'sauCanxi_tenThucAnTien_2': '21d. Thức ăn tổng hợp/viên - Tiền (SAU)',
    'sauCanxi_tien_2': '21d. Thức ăn tổng hợp/viên - Số tiền (SAU)',
    'sauCanxi_tenThucAnTien_3': '21d. Thức ăn xanh - Tiền (SAU)',
    'sauCanxi_tien_3': '21d. Thức ăn xanh - Số tiền (SAU)',
    '29dsau': '21e. Số tiền đã chi cho mua thuốc thú y (SAU)',
    '29esau': '21f. Vật nuôi có bị bất kỳ bệnh nào không (SAU)',
    '29fsau': '21g. Bạn đánh giá sức khỏe vật nuôi (1 = cực kỳ tệ, 10: rất tốt) (SAU)',
    '29gsau': '21h. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn (SAU)',
    '29hsau': '21i. Thời gian nuôi đến khi xuất chuồng (tháng) (SAU)',
    '29isau': '21j. Trọng lượng trung bình khi xuất chuồng (kg/con) (SAU)',
    '29jsau': '21k. Giá bán (đồng/kg) (SAU)',
    '29ksau': '21l. Thành tiền (đồng) (SAU)',
  },
  
  // Ủ phân hữu cơ tại ruộng
  'u-phan-huu-co-tai-ruong': {
    // Section A
    'tenPhuPham': '9b. Tên phụ phẩm cây trồng (tận dụng ủ phân từ trước đến nay)',
    'thangNamBatDau': '9c. Tháng/năm bắt đầu tiến hành ủ phân',
    'tongSoMuaVuBonPhan': '9d. Tổng số mùa vụ đã được bón phân ủ hữu cơ (theo từng loại cây trồng)',
    'dienTichCayDuocBonPhan': '9e. Diện tích cây trồng được bón phân ủ hữu cơ (số sào/vụ)',
    'tenPhuPhamTanDung': '10a. Tên phụ phẩm cây trồng tận dụng để ủ phân',
    'khoiLuongPhuPhamTrenRuong': '10b. Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)',
    'khoiLuongPhuPhamThuGom': '10c. Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)',
    'tongKhoiLuongPhuPhamSuDung': '10d. Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ phân (kg/sào x số sào)',
    'khoiLuongPhanHuuCoThuDuoc': '10e. Khối lượng phân hữu cơ thu được sau khi ủ (kg/sào x số sào)',
    'nhungLoaiCayDuocBonPhan': '10f. Những loại cây trồng được bón phân ủ hữu cơ (1 ô ghi 1 loại cây trồng)',
    'suDungMayCatNho': '10g. Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng',
    'nhienLieuSuDung': '10h. Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)',
    'chiPhiVatLieuKhac': '10i. Chi phí vật liệu/đầu vào khác (nhân công, ống thông khí, bạt, chế phẩm, rỉ mật…) (đồng)',
    // Section B
    'loaiCayTrongTruoc': '12a. Loại cây trồng',
    'coTrongTruoc': '12a. Có trồng không?',
    'dienTichDatTruoc': '12b. Diện tích đất trồng cây (sào/vụ x số vụ/năm)',
    'tenPhuPhamTruoc': '12c. Tên phụ phẩm cây trồng (ghi tên từng loại)',
    'khoiLuongPhuPhamTruoc': '12d. Khối lượng phụ phẩm cây trồng (kg/sào/vụ x số sào)',
    'khoiLuongPhuPhamThuGomTruoc': '12e. Khối lượng phụ phẩm cây trồng được thu gom (kg/sào/vụ x số sào)',
    // Section C: Crop comparison KHÔNG vs SAU
    '11a': '11a. Tên cây trồng được bón phân ủ hữu cơ',
    // KHÔNG BÓN PHÂN ủ
    '11bTruoc': '11b. Diện tích (sào/vụ) (TRƯỚC)',
    '11cTruoc': '11c. Số lượng từng loại phân bón (kg/sào) (TRƯỚC)',
    'truocPhan_tenPhan_0': '11c. Phân NPK bón lót - Tên (TRƯỚC)',
    'truocPhan_kg_0': '11c. Phân NPK bón lót - Kg (TRƯỚC)',
    'truocPhan_tenPhan_1': '11c. Phân NPK bón thúc - Tên (TRƯỚC)',
    'truocPhan_kg_1': '11c. Phân NPK bón thúc - Kg (TRƯỚC)',
    'truocPhan_tenPhan_2': '11c. Phân khác - Tên (TRƯỚC)',
    'truocPhan_kg_2': '11c. Phân khác - Kg (TRƯỚC)',
    'truocPhan_tenPhanTien_0': '11d. Phân NPK bón lót - Tiền (TRƯỚC)',
    'truocPhan_tien_0': '11d. Phân NPK bón lót - Số tiền (TRƯỚC)',
    'truocPhan_tenPhanTien_1': '11d. Phân NPK bón thúc - Tiền (TRƯỚC)',
    'truocPhan_tien_1': '11d. Phân NPK bón thúc - Số tiền (TRƯỚC)',
    'truocPhan_tenPhanTien_2': '11d. Phân khác - Tiền (TRƯỚC)',
    'truocPhan_tien_2': '11d. Phân khác - Số tiền (TRƯỚC)',
    '11eTruoc': '11e. Cây trồng có bị sâu bệnh không (có/không) (TRƯỚC)',
    '11fTruoc': '11f. Có sử dụng thuốc trừ sâu không (có/không) (TRƯỚC)',
    '11gTruoc': '11g. Số tiền mua thuốc trừ sâu (đồng/sào) (TRƯỚC)',
    '11hTruoc': '11h. Số tiền mua thuốc diệt cỏ (đồng/sào) (TRƯỚC)',
    '11iTruoc': '11i. Số tiền công lao động (đồng/sào) (TRƯỚC)',
    '11jTruoc': '11j. Số tiền mua hạt giống (đồng/sào) (TRƯỚC)',
    '11kTruoc': '11k. Năng suất thu hoạch được (kg/sào) (TRƯỚC)',
    '11lTruoc': '11l. Giá bán (đồng/kg) (TRƯỚC)',
    '11mTruoc': '11m. Thành tiền (đồng) (TRƯỚC)',
    // SAU KHI BÓN PHÂN ủ
    '11bSau': '11b. Diện tích (sào/vụ) (SAU)',
    '11cSau': '11c. Số lượng từng loại phân bón (kg/sào) (SAU)',
    'sauPhan_tenPhan_0': '11c. Phân NPK bón lót - Tên (SAU)',
    'sauPhan_kg_0': '11c. Phân NPK bón lót - Kg (SAU)',
    'sauPhan_tenPhan_1': '11c. Phân NPK bón thúc - Tên (SAU)',
    'sauPhan_kg_1': '11c. Phân NPK bón thúc - Kg (SAU)',
    'sauPhan_tenPhan_2': '11c. Phân khác - Tên (SAU)',
    'sauPhan_kg_2': '11c. Phân khác - Kg (SAU)',
    'sauPhan_tenPhanTien_0': '11d. Phân NPK bón lót - Tiền (SAU)',
    'sauPhan_tien_0': '11d. Phân NPK bón lót - Số tiền (SAU)',
    'sauPhan_tenPhanTien_1': '11d. Phân NPK bón thúc - Tiền (SAU)',
    'sauPhan_tien_1': '11d. Phân NPK bón thúc - Số tiền (SAU)',
    'sauPhan_tenPhanTien_2': '11d. Phân khác - Tiền (SAU)',
    'sauPhan_tien_2': '11d. Phân khác - Số tiền (SAU)',
    '11eSau': '11e. Cây trồng có bị sâu bệnh không (có/không) (SAU)',
    '11fSau': '11f. Có sử dụng thuốc trừ sâu không (có/không) (SAU)',
    '11gSau': '11g. Số tiền mua thuốc trừ sâu (đồng/sào) (SAU)',
    '11hSau': '11h. Số tiền mua thuốc diệt cỏ (đồng/sào) (SAU)',
    '11iSau': '11i. Số tiền công lao động (đồng/sào) (SAU)',
    '11jSau': '11j. Số tiền mua hạt giống (đồng/sào) (SAU)',
    '11kSau': '11k. Năng suất thu hoạch được (kg/sào) (SAU)',
    '11lSau': '11l. Giá bán (đồng/kg) (SAU)',
    '11mSau': '11m. Thành tiền (đồng) (SAU)',
  },
  
  // Xử lý gốc rạ che phẩm
  'xu-ly-goc-ra-che-pham': {
    // Section A
    'thangNamBatDauApDung': '14a. Tháng/năm bắt đầu áp dụng xử lý gốc rạ bằng chế phẩm sinh học',
    'soVuXuLyGocRa': '14b. Số vụ xử lý gốc rạ bằng chế phẩm (số vụ/năm x số năm)',
    'thangNamBatDauVuGanDay': '15a. Tháng/năm bắt đầu vụ gần đây',
    'dienTichGocRaSauThuHoach': '15b. Diện tích ruộng có gốc rạ sau thu hoạch được xử lý bằng chế phẩm sinh học (sào/vụ)',
    'chePhamSinhHocSuDung': '15c. Các loại chế phẩm sinh học được sử dụng',
    'tienMuaChePham': '15d. Số tiền chi mua chế phẩm sinh học (đồng/sào)',
    'tienNhanCongPhun': '15e. Số tiền chi nhân công phun chế phẩm sinh học (đồng/sào)',
    'nangSuatLuaSauXuLy': '15f. Năng suất lúa của vụ sau khi xử lý gốc rạ bằng chế phẩm (kg/sào)',
    // Section B: Crop comparison KHÔNG vs SAU
    '16a': '16a. Tên cây trồng được xử lý gốc rạ bằng chế phẩm vi sinh',
    // KHÔNG ÁP DỤNG KỸ THUẬT
    '16btruoc': '16b. Diện tích trồng (sào) (TRƯỚC)',
    'truocPhan_tenPhan_0': '16c. Phân NPK bón lót - Tên (TRƯỚC)',
    'truocPhan_kg_0': '16c. Phân NPK bón lót - Kg (TRƯỚC)',
    'truocPhan_tenPhan_1': '16c. Phân NPK bón thúc - Tên (TRƯỚC)',
    'truocPhan_kg_1': '16c. Phân NPK bón thúc - Kg (TRƯỚC)',
    'truocPhan_tenPhan_2': '16c. Phân đạm - Tên (TRƯỚC)',
    'truocPhan_kg_2': '16c. Phân đạm - Kg (TRƯỚC)',
    'truocPhan_tenPhan_3': '16c. Phân kali - Tên (TRƯỚC)',
    'truocPhan_kg_3': '16c. Phân kali - Kg (TRƯỚC)',
    'truocPhan_tenPhan_4': '16c. Phân khác - Tên (TRƯỚC)',
    'truocPhan_kg_4': '16c. Phân khác - Kg (TRƯỚC)',
    'truocPhan_tenPhanTien_0': '16d. Phân NPK bón lót - Tiền (TRƯỚC)',
    'truocPhan_tien_0': '16d. Phân NPK bón lót - Số tiền (TRƯỚC)',
    'truocPhan_tenPhanTien_1': '16d. Phân NPK bón thúc - Tiền (TRƯỚC)',
    'truocPhan_tien_1': '16d. Phân NPK bón thúc - Số tiền (TRƯỚC)',
    'truocPhan_tenPhanTien_2': '16d. Phân đạm - Tiền (TRƯỚC)',
    'truocPhan_tien_2': '16d. Phân đạm - Số tiền (TRƯỚC)',
    'truocPhan_tenPhanTien_3': '16d. Phân kali - Tiền (TRƯỚC)',
    'truocPhan_tien_3': '16d. Phân kali - Số tiền (TRƯỚC)',
    'truocPhan_tenPhanTien_4': '16d. Phân khác - Tiền (TRƯỚC)',
    'truocPhan_tien_4': '16d. Phân khác - Số tiền (TRƯỚC)',
    '16etruoc': '16e. Cây trồng có bị sâu bệnh không (có/không) (TRƯỚC)',
    '16ftruoc': '16f. Có sử dụng thuốc trừ sâu không (có/không) (TRƯỚC)',
    '16gtruoc': '16g. Số tiền mua thuốc trừ sâu (đồng/sào/vụ x số sào) (TRƯỚC)',
    '16htruoc': '16h. Có sử dụng thuốc diệt cỏ không (có/không) (TRƯỚC)',
    '16itruoc': '16i. Số tiền mua thuốc diệt cỏ (đồng/sào/vụ x số sào) (TRƯỚC)',
    '16jtruoc': '16j. Số tiền công lao động (số công/sào/vụ x đơn giá) (TRƯỚC)',
    '16ktruoc': '16k. Số tiền mua hạt giống (đồng/sào/vụ x số sào) (TRƯỚC)',
    '16ltruoc': '16l. Sản lượng thu hoạch được (kg/sào/vụ x số sào) (TRƯỚC)',
    '16mtruoc': '16m. Giá bán (đồng/kg) (TRƯỚC)',
    '16ntruoc': '16n. Thành tiền (đồng) (TRƯỚC)',
    // SAU KHI ÁP DỤNG KỸ THUẬT
    '16bsau': '16b. Diện tích trồng (sào) (SAU)',
    'sauPhan_tenPhan_0': '16c. Phân NPK bón lót - Tên (SAU)',
    'sauPhan_kg_0': '16c. Phân NPK bón lót - Kg (SAU)',
    'sauPhan_tenPhan_1': '16c. Phân NPK bón thúc - Tên (SAU)',
    'sauPhan_kg_1': '16c. Phân NPK bón thúc - Kg (SAU)',
    'sauPhan_tenPhan_2': '16c. Phân đạm - Tên (SAU)',
    'sauPhan_kg_2': '16c. Phân đạm - Kg (SAU)',
    'sauPhan_tenPhan_3': '16c. Phân kali - Tên (SAU)',
    'sauPhan_kg_3': '16c. Phân kali - Kg (SAU)',
    'sauPhan_tenPhan_4': '16c. Phân khác - Tên (SAU)',
    'sauPhan_kg_4': '16c. Phân khác - Kg (SAU)',
    'sauPhan_tenPhanTien_0': '16d. Phân NPK bón lót - Tiền (SAU)',
    'sauPhan_tien_0': '16d. Phân NPK bón lót - Số tiền (SAU)',
    'sauPhan_tenPhanTien_1': '16d. Phân NPK bón thúc - Tiền (SAU)',
    'sauPhan_tien_1': '16d. Phân NPK bón thúc - Số tiền (SAU)',
    'sauPhan_tenPhanTien_2': '16d. Phân đạm - Tiền (SAU)',
    'sauPhan_tien_2': '16d. Phân đạm - Số tiền (SAU)',
    'sauPhan_tenPhanTien_3': '16d. Phân kali - Tiền (SAU)',
    'sauPhan_tien_3': '16d. Phân kali - Số tiền (SAU)',
    'sauPhan_tenPhanTien_4': '16d. Phân khác - Tiền (SAU)',
    'sauPhan_tien_4': '16d. Phân khác - Số tiền (SAU)',
    '16esau': '16e. Cây trồng có bị sâu bệnh không (có/không) (SAU)',
    '16fsau': '16f. Có sử dụng thuốc trừ sâu không (có/không) (SAU)',
    '16gsau': '16g. Số tiền mua thuốc trừ sâu (đồng/sào/vụ x số sào) (SAU)',
    '16hsau': '16h. Có sử dụng thuốc diệt cỏ không (có/không) (SAU)',
    '16isau': '16i. Số tiền mua thuốc diệt cỏ (đồng/sào/vụ x số sào) (SAU)',
    '16jsau': '16j. Số tiền công lao động (số công/sào/vụ x đơn giá) (SAU)',
    '16ksau': '16k. Số tiền mua hạt giống (đồng/sào/vụ x số sào) (SAU)',
    '16lsau': '16l. Sản lượng thu hoạch được (kg/sào/vụ x số sào) (SAU)',
    '16msau': '16m. Giá bán (đồng/kg) (SAU)',
    '16nsau': '16n. Thành tiền (đồng) (SAU)',
  },
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
 * @param {number} headerRows - Number of header rows (default 1)
 */
export const applyExcelStyling = (worksheet, sheetData, headerRows = 1) => {
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
  const numRows = sheetData.length + headerRows; // +headerRows for header row(s)

  // Helper to convert column number to letter (0 = A, 1 = B, etc.)
  const colToLetter = (num) => {
    let letter = '';
    while (num >= 0) {
      letter = String.fromCharCode((num % 26) + 65) + letter;
      num = Math.floor(num / 26) - 1;
    }
    return letter;
  };

  // Style for header row(s)
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

      if (row <= headerRows) {
        // Header row(s)
        worksheet[cellRef].s = headerStyle;
      } else {
        // Data rows - alternating colors
        const dataRowIndex = row - headerRows;
        worksheet[cellRef].s = (dataRowIndex % 2 === 1) ? dataStyleEven : dataStyleOdd;
      }
    }
  }

  // Set row heights
  if (!worksheet['!rows']) worksheet['!rows'] = [];
  for (let i = 0; i < headerRows; i++) {
    worksheet['!rows'][i] = { hpt: 30 }; // Header row height
  }
  for (let i = headerRows; i < numRows; i++) {
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
 * @returns {Object} Common questions with readable labels in correct order
 */
export const extractCommonFormData = (data) => {
  const commonData = {};
  
  if (!data) return commonData;
  
  // Câu 40: Xử lý phụ phẩm
  if (data['xulyPhuPhamTruoc'] !== undefined) {
    commonData['40. Xử lý phụ phẩm - Trước khi tham gia mô hình'] = data['xulyPhuPhamTruoc'] || '';
  }
  if (data['xulyPhuPhamSau'] !== undefined) {
    commonData['40. Xử lý phụ phẩm - Sau khi tham gia mô hình'] = data['xulyPhuPhamSau'] || '';
  }
  if (data['biogasGasPercent'] !== undefined) {
    commonData['40. Biogas - Ước lượng % lượng gas dùng nấu ăn/sưởi ấm'] = data['biogasGasPercent'] || '';
  }
  if (data['biogasPhanPercent'] !== undefined) {
    commonData['40. Biogas - Ước tính % phân vật nuôi cho vào hố Biogas/Tổng phân chuồng thu gom'] = data['biogasPhanPercent'] || '';
  }
  if (data['biogasNgayXaKhi'] !== undefined) {
    commonData['40. Biogas - Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần'] = data['biogasNgayXaKhi'] || '';
  }
  
  // Câu 41
  if (data['coTrongLua'] !== undefined) {
    commonData['41. Gia đình bạn có trồng Lúa không?'] = data['coTrongLua'] || '';
  }
  
  // Câu 42: Xử lý gốc rạ
  if (data['xulyGocRaTruoc'] !== undefined) {
    commonData['42. Xử lý gốc rạ - Trước khi tham gia mô hình'] = data['xulyGocRaTruoc'] || '';
  }
  if (data['xulyGocRaSau'] !== undefined) {
    commonData['42. Xử lý gốc rạ - Sau khi tham gia mô hình'] = data['xulyGocRaSau'] || '';
  }
  
  // Câu 43
  if (data['coNuoiDongVat'] !== undefined) {
    commonData['43. Gia đình bạn có nuôi động vật nào không?'] = data['coNuoiDongVat'] || '';
  }
  
  // Câu 44: Xử lý phân gia súc
  if (data['xulyPhanTruoc'] !== undefined) {
    commonData['44. Xử lý phân gia súc - Trước khi tham gia mô hình'] = data['xulyPhanTruoc'] || '';
  }
  if (data['xulyPhanSau'] !== undefined) {
    commonData['44. Xử lý phân gia súc - Sau khi tham gia mô hình'] = data['xulyPhanSau'] || '';
  }
  if (data['biogasPhanGasPercent'] !== undefined) {
    commonData['44. Hầm Biogas - Ước lượng % lượng gas dùng nấu ăn/sưởi ấm'] = data['biogasPhanGasPercent'] || '';
  }
  if (data['biogasPhanPhanPercent'] !== undefined) {
    commonData['44. Hầm Biogas - Ước tính % phân vật nuôi cho vào hố Biogas/Tổng phân chuồng thu gom'] = data['biogasPhanPhanPercent'] || '';
  }
  if (data['biogasPhanNgayXaKhi'] !== undefined) {
    commonData['44. Hầm Biogas - Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần'] = data['biogasPhanNgayXaKhi'] || '';
  }
  
  // Câu 45
  if (data['kyThuatDeHayKho'] !== undefined) {
    commonData['45. Kỹ thuật đó thực hiện dễ hay khó (1 cực kỳ dễ, 10 cực kỳ khó)'] = data['kyThuatDeHayKho'] || '';
  }
  
  // Câu 46
  if (data['ykienKyThuat_0'] !== undefined) {
    commonData['46. Thực hiện đúng kỹ thuật sẽ giúp tăng lợi nhuận'] = data['ykienKyThuat_0'] || '';
  }
  
  // Câu 47
  if (data['ykienKyThuat_1'] !== undefined) {
    commonData['47. Thực hiện đúng kỹ thuật sẽ giúp giảm chi phí'] = data['ykienKyThuat_1'] || '';
  }
  
  // Câu 48
  if (data['ykienKyThuat_2'] !== undefined) {
    commonData['48. Thực hiện đúng kỹ thuật sẽ giúp giảm khối lượng công việc'] = data['ykienKyThuat_2'] || '';
  }
  
  // Câu 49
  if (data['ykienKyThuat_3'] !== undefined) {
    commonData['49. Thực hiện đúng kỹ thuật sẽ tốt cho môi trường'] = data['ykienKyThuat_3'] || '';
  }
  
  // Câu 50
  if (data['ykienKyThuat_4'] !== undefined) {
    commonData['50. Thực hiện đúng kỹ thuật sẽ giúp cải thiện chất lượng đất'] = data['ykienKyThuat_4'] || '';
  }
  
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
  
  // Câu 54
  if (data['suKienThamGia'] !== undefined) {
    const value = data['suKienThamGia'];
    commonData['54. Bạn sẽ tham gia sự kiện nào?'] = (typeof value === 'object' && value !== null) ? JSON.stringify(value) : (value || '');
  }
  
  // Câu 55
  if (data['loiIch1'] !== undefined) {
    commonData['55. Lợi ích quan trọng nhất của các sự kiện đã tham dự'] = data['loiIch1'] || '';
  }
  if (data['loiIch2'] !== undefined) {
    commonData['55. Lợi ích quan trọng thứ hai của các sự kiện đã tham dự'] = data['loiIch2'] || '';
  }
  
  // Câu 56
  if (data['lyDoKhongThamGia'] !== undefined) {
    commonData['56. Nếu không tham gia hoạt động nào, hãy nêu lý do'] = data['lyDoKhongThamGia'] || '';
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
  
  // Câu 60
  if (data['soNguoiChiaSeKyThuat'] !== undefined) {
    commonData['60. Bạn đã từng chia sẻ kỹ thuật này với bao nhiêu người? (0=chưa từng chia sẻ)'] = data['soNguoiChiaSeKyThuat'] || '';
  }
  
  // Câu 61
  if (data['duDinhChiaSe'] !== undefined) {
    commonData['61. Trong tương lai, bạn có dự định chia sẻ những kỹ thuật này với hàng xóm, bạn bè và người thân không?'] = data['duDinhChiaSe'] || '';
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
  
  // Câu 64
  if (data['tyLeHoApDung'] !== undefined) {
    commonData['64. Theo bạn, hiện nay tỷ lệ hộ gia đình trong thôn áp dụng kỹ thuật như bạn là bao nhiêu?'] = data['tyLeHoApDung'] || '';
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
  
  // Câu 66
  if (data['bietDanhHieuXanh'] !== undefined) {
    commonData['66. Bạn có biết đến tên gọi/ danh hiệu "Người gìn giữ tương lai xanh" không?'] = data['bietDanhHieuXanh'] || '';
  }
  
  // Câu 67
  if (data['muonThamGiaXanh'] !== undefined) {
    commonData['67. Bạn có muốn tham gia nhóm "Người gìn giữ tương lai xanh" không?'] = data['muonThamGiaXanh'] || '';
  }
  
  // Câu 68
  if (data['thuNhap2025'] !== undefined) {
    commonData['68. Ước tính thu nhập trung bình hàng tháng trong năm 2025 của hộ gia đình (đồng)'] = data['thuNhap2025'] || '';
  }
  
  // Câu 69
  if (data['nguonThuNhap'] !== undefined) {
    const value = data['nguonThuNhap'];
    commonData['69. Nguồn thu nhập của hộ gia đình bạn từ đâu?'] = (typeof value === 'object' && value !== null) ? JSON.stringify(value) : (value || '');
  }
  
  // Câu 70
  if (data['trinhDoHocVan'] !== undefined) {
    commonData['70. Trình độ học vấn của bạn?'] = data['trinhDoHocVan'] || '';
  }
  
  return commonData;
};

/**
 * Extract technique-specific data (sections A, B, C, D) from data
 * @param {Object} data - The submission data object
 * @param {string} techniqueType - The technique type slug
 * @returns {Object} Technique data with readable labels in correct order
 */
export const extractTechniqueData = (data, techniqueType) => {
  const techniqueData = {};
  
  if (!data) return techniqueData;
  
  // Get field order from techniqueFieldLabels for this technique
  const fieldLabelsForTechnique = techniqueFieldLabels[techniqueType] || {};
  const orderedFieldKeys = Object.keys(fieldLabelsForTechnique);
  
  // Extract only section data (A, B, C, D) in order
  const sections = ['sectionA', 'sectionB', 'sectionC', 'sectionD'];
  
  sections.forEach(sectionKey => {
    if (data[sectionKey] && Array.isArray(data[sectionKey])) {
      data[sectionKey].forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          // First, process fields in the order they appear in techniqueFieldLabels
          orderedFieldKeys.forEach(fieldKey => {
            if (item.hasOwnProperty(fieldKey)) {
              const arrayKey = `${sectionKey}[${index}].${fieldKey}`;
              const subValue = item[fieldKey];
              const customLabel = fieldLabelsForTechnique[fieldKey];
              const label = customLabel || createFieldLabel(arrayKey);
              
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
            }
          });
          
          // Then, process any remaining fields not in the ordered list
          Object.keys(item).forEach(subKey => {
            if (!orderedFieldKeys.includes(subKey)) {
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
            }
          });
        }
      });
    }
  });
  
  return techniqueData;
};
