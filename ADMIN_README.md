# Hệ thống Quản trị Phiếu Khảo Sát

## 📋 Tổng quan

Hệ thống quản trị được xây dựng để quản lý và phân tích dữ liệu từ các phiếu khảo sát về kỹ thuật nông nghiệp. Bao gồm 6 loại kỹ thuật chính:

1. **Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi** (`len-men-phu-pham`)
2. **Nuôi gà trên đệm lót sinh học** (`nuoi-ga-dem-lot`)
3. **Nuôi sâu canxi** (`nuoi-sau-canxi`)
4. **Nuôi trùn quế** (`nuoi-trun-que`)
5. **Ủ phân hữu cơ tại ruộng** (`u-phan-huu-co-tai-ruong`)
6. **Xử lý gốc rạ bằng chế phẩm sinh học** (`xu-ly-goc-ra-che-pham`)

## 🏗️ Cấu trúc Components

### 1. Admin.jsx
- **Chức năng**: Trang quản trị chính
- **Tính năng**:
  - Kiểm tra authentication
  - Nút đăng xuất
  - Hiển thị SubmissionsTable

### 2. SubmissionsTable.jsx
- **Chức năng**: Bảng hiển thị danh sách phiếu khảo sát
- **Tính năng chính**:
  - ✅ Hiển thị danh sách submissions với phân trang
  - 🔍 Lọc theo loại kỹ thuật
  - 👁️ Xem chi tiết từng phiếu
  - 📥 Xuất dữ liệu ra Excel (nhiều sheets)
  - 🔄 Tải lại dữ liệu
  - 🔐 Tích hợp authentication với Bearer token

**Cấu trúc bảng**:
- STT
- Họ tên
- Năm sinh
- Số điện thoại
- Địa chỉ (Thôn, Xã, Tỉnh)
- Kỹ thuật
- Trạng thái (Tag màu: submitted=xanh lá, pending=cam, draft=xanh dương)
- Ngày gửi
- Thao tác (Nút xem chi tiết)

### 3. TechniqueDataRenderer.jsx
- **Chức năng**: Render dữ liệu kỹ thuật chi tiết
- **Tính năng**:
  - Render theo loại kỹ thuật cụ thể
  - Hiển thị dynamic instances (mảng dữ liệu)
  - Hiển thị table data (dữ liệu bảng)
  - Tự động format và label dữ liệu

**Cấu trúc render theo kỹ thuật**:

#### Lên men phụ phẩm (`renderLenMenData`):
- **Section A**: Quản lý phụ phẩm SAU KHI áp dụng kỹ thuật
  - Mảng `sauMen[]` với các trường:
    - tenPhuPhamCayTrong, thangNamDau, dienTichTrong
    - soLanMen, thangNamGanNhat, tenPhuPhamTanDung
    - dienTichDat, khoiLuongTrenDong, khoiLuongThuGom
    - khoiLuongSuDungMen, khoiLuongThucAnMen
    - mayBamCat, nhienLieu, chiPhiKhac
    
- **Section B**: Quản lý phụ phẩm TRƯỚC KHI áp dụng kỹ thuật
  - Mảng `truocMen[]` với các trường:
    - loaiCayTruoc, dienTichTruoc, khoiLuongPhuPhamTruoc
    - phanTramXuLyTruoc, cachXuLyTruoc
    
- **Section C**: Sử dụng thức ăn lên men
  - Mảng `thucAnMen[]` với các trường:
    - loaiVatNuoi, soLuongVatNuoi, khoiLuongThucAnMen
    - tyLeSuDung, hieuQuaChanNuoi

#### Nuôi gà đệm lót (`renderNuoiGaData`):
- **Section A**: `sauDemLot[]` - Nuôi gà SAU KHI áp dụng
- **Section B**: `truocDemLot[]` - Nuôi gà TRƯỚC KHI áp dụng
- **Section C**: `phanU[]` - Sử dụng phân ủ từ đệm lót
- **Section D**: `danGa[]` - Thông tin đàn gà

#### Nuôi sâu canxi (`renderSauCanxiData`):
- **Section A**: `sectionA[]` - Quản lý phụ phẩm cây trồng
- **Section B**: `sectionB[]` - Nuôi sâu canxi
- **Section C**: `sectionC[]` - Sử dụng phân sâu canxi
- **Section D**: `sectionD[]` - Sử dụng sâu canxi làm thức ăn

#### Nuôi trùn quế (`renderTrunQueData`):
- **Section A**: `sectionA[]` - Quản lý phụ phẩm cây trồng
- **Section B**: `sectionB[]` - Nuôi trùn quế
- **Section C**: `sectionC[]` - Sử dụng phân trùn quế
- **Section D**: `sectionD[]` - Sử dụng trùn quế làm thức ăn

#### Ủ phân hữu cơ (`renderUPhanData`):
- **Section A**: `sectionA[]` - Quản lý SAU KHI áp dụng
- **Section B**: `sectionB[]` - Quản lý TRƯỚC KHI áp dụng
- **Section C**: `sectionC[]` - Sử dụng phân ủ làm phân bón (dạng bảng)
  - Trường đặc biệt: `20a`, `20btruoc/20bsau`, `20ctruoc/20csau`
  - Nested tables: `truocPhan_*`, `sauPhan_*`

#### Xử lý gốc rạ (`renderGocRaData`):
- **Section A**: `sectionA[]` - Quản lý phụ phẩm và chất thải
  - thangNamBatDauApDung, soVuXuLyGocRa
  - thangNamBatDauVuGanDay, dienTichGocRaSauThuHoach
  - chePhamSinhHocSuDung, tienMuaChePham
  - tienNhanCongPhun, nangSuatLuaSauXuLy
  
- **Section B**: `sectionB[]` - Hiệu quả kinh tế (dạng bảng)
  - Trường: `20a`, `20btruoc/20bsau`
  - Nested tables: `truocPhan_*`, `sauPhan_*`
  - Các trường: `20etruoc/20esau` đến `20mtruoc/20msau`

## 📊 Cấu trúc dữ liệu API

### Request: GET /api/forms/submissions/
```
Headers:
  Authorization: Bearer {access_token}
  
Query params:
  page: số trang (default: 1)
  page_size: số items/trang (default: 10)
  template_type: loại kỹ thuật (optional)
```

### Response:
```json
{
  "count": 100,
  "next": "url_next_page",
  "previous": "url_previous_page",
  "results": [
    {
      "id": 1,
      "ho_ten": "Nguyễn Văn A",
      "nam_sinh": "1980/01/01",
      "so_dien_thoai": "+84901234567",
      "thon": "Thôn 1",
      "xa": "Xã ABC",
      "tinh": "Tỉnh XYZ",
      "template_type": "len-men-phu-pham",
      "status": "submitted",
      "submitted_at": "2025-11-30T10:30:00Z",
      "data": {
        "sauMen": [
          {
            "tenPhuPhamCayTrong": "Rơm rạ",
            "thangNamDau": "2024/01",
            ...
          }
        ],
        "truocMen": [...],
        "thucAnMen": [...],
        "xulyPhuPhamTruoc": {...},
        "xulyPhuPhamSau": {...}
      }
    }
  ]
}
```

## 💾 Xuất Excel

### Cấu trúc file Excel xuất ra:
1. **Sheet "Tổng hợp"**: 
   - Thông tin tổng quan tất cả submissions
   - Các cột: STT, Họ tên, Năm sinh, SĐT, Thôn, Xã, Tỉnh, Kỹ thuật, Trạng thái, Ngày gửi

2. **Sheets theo kỹ thuật** (6 sheets):
   - Mỗi kỹ thuật có 1 sheet riêng
   - Bao gồm thông tin chung + dữ liệu chi tiết đã flatten
   - Dữ liệu nested được chuyển thành JSON string

### Tên file:
```
Khao_sat_YYYY-MM-DD_HHmmss.xlsx
```

## 🎨 UI/UX Features

### Màu sắc:
- **Trạng thái submitted**: Xanh lá (#52c41a)
- **Trạng thái pending**: Cam (orange)
- **Trạng thái draft**: Xanh dương (blue)
- **Trạng thái rejected**: Đỏ (red)

### Layout:
- Gradient background: #e0eafc → #cfdef3
- Card shadow: 0 2px 8px rgba(0,0,0,0.1)
- Table bordered với scroll horizontal
- Modal width: 1200px
- Modal max height: calc(100vh - 200px)

### Icons:
- 📊 Quản lý phiếu khảo sát
- 🔍 Lọc theo kỹ thuật
- 👁️ Xem chi tiết
- 📥 Xuất Excel
- 🔄 Tải lại
- 🔓 Đăng xuất

## 🔒 Authentication

### Flow:
1. Kiểm tra `access` token trong localStorage
2. Nếu không có → redirect về `/login`
3. Gửi request với header: `Authorization: Bearer {access}`
4. Nếu 401 → xóa tokens và redirect về `/login`

### Tokens:
- `access`: Token truy cập API
- `refresh`: Token làm mới (chưa implement auto-refresh)

## 🚀 Cách sử dụng

### 1. Đăng nhập
- Truy cập `/login`
- Đăng nhập thành công → lưu tokens vào localStorage
- Tự động redirect về `/admin`

### 2. Xem danh sách
- Bảng hiển thị tất cả submissions
- Phân trang tự động
- Click "Xem" để xem chi tiết

### 3. Lọc dữ liệu
- Chọn kỹ thuật từ dropdown
- Chọn "Tất cả kỹ thuật" để xem tất cả

### 4. Xuất Excel
- Click "Xuất Excel"
- File tự động download với timestamp
- Bao gồm nhiều sheets chi tiết

### 5. Xem chi tiết
- Click nút "Xem" trên hàng
- Modal hiển thị:
  - Thông tin chung (bordered)
  - Dữ liệu kỹ thuật (theo sections)
- Scroll để xem hết nội dung

## 📦 Dependencies

```json
{
  "antd": "^5.9.0",
  "dayjs": "^1.11.19",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.9.6",
  "xlsx": "latest"
}
```

## 🛠️ Các file chính

```
src/components/
├── Admin.jsx                    # Trang quản trị chính
├── Admin.module.scss            # Styles cho Admin
├── SubmissionsTable.jsx         # Bảng danh sách submissions
├── TechniqueDataRenderer.jsx    # Render dữ liệu kỹ thuật chi tiết
├── GeneralInfoForm.jsx          # Form thông tin chung
├── InterviewForm.jsx            # Form phỏng vấn chính
├── CommonForm.jsx               # Form câu hỏi chung
├── TechniqueFormLenMen.jsx      # Form kỹ thuật lên men
├── TechniqueFormNuoiGa.jsx      # Form kỹ thuật nuôi gà
├── TechniqueFormSauCanxi.jsx    # Form kỹ thuật nuôi sâu canxi
├── TechniqueFormTrunQue.jsx     # Form kỹ thuật nuôi trùn quế
├── TechniqueFormUPhan.jsx       # Form kỹ thuật ủ phân
└── TechniqueFormGocRa.jsx       # Form kỹ thuật xử lý gốc rạ
```

## 📝 Notes

### Dynamic Instances:
- Các form kỹ thuật hỗ trợ thêm/xóa instances động
- Dữ liệu lưu dạng array trong `data` object
- Form đầu tiên bắt buộc, các form sau optional

### Table Data:
- Một số sections sử dụng table format (20a, 20b, 20c...)
- Có nested tables cho dữ liệu phân bón
- Phân biệt "trước" và "sau" khi áp dụng kỹ thuật

### Common Questions:
- Câu hỏi chung được lưu trong object `xulyPhuPhamTruoc`, `xulyPhuPhamSau`
- Dạng bảng với mảng index (0-14)
- Mỗi item là phần trăm xử lý phụ phẩm

## 🐛 Troubleshooting

### Không load được dữ liệu:
- Kiểm tra access token
- Kiểm tra network request (F12 → Network)
- Kiểm tra CORS settings

### Excel export lỗi:
- Kiểm tra có dữ liệu không
- Kiểm tra browser cho phép download
- Kiểm tra nested data structure

### Modal không hiển thị đúng:
- Kiểm tra data structure
- Kiểm tra techniqueType mapping
- Xem console log errors

---

**Phát triển bởi**: Form Management System  
**Phiên bản**: 1.0.0  
**Cập nhật**: November 30, 2025
