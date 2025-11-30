# Test Technique Renderer Components

## Debugging Steps

### 1. Mở Browser Console
Khi bạn click vào nút "Xem" trong bảng quản lý phiếu khảo sát, hãy mở Developer Tools (F12) và xem Console tab.

### 2. Kiểm tra các log messages

Bạn sẽ thấy các log messages theo thứ tự:

```
🔍 TechniqueDataRenderer - data: { ... }
🔍 TechniqueDataRenderer - techniqueType: "len-men-phu-pham"
🎯 renderByTechniqueType - techniqueType: "len-men-phu-pham"
✅ Rendering LenMenRenderer with data: { ... }
🍞 LenMenRenderer - Received data: { ... }
🔍 LenMenRenderer - Checking data.sauMen: [ ... ]
🔍 LenMenRenderer - Checking data.truocMen: [ ... ]
🔍 LenMenRenderer - Checking data.thucAnMen: [ ... ]
📊 LenMenRenderer - Total sections: 3
📊 LenMenRenderer - Sections: [ ... ]
```

### 3. Các vấn đề có thể gặp

#### Vấn đề 1: `data` là null hoặc undefined
**Log:**
```
🔍 TechniqueDataRenderer - data: null
❌ No data or invalid data type
```
**Nguyên nhân:** Backend không trả về dữ liệu hoặc `selectedRecord.data` bị null
**Giải pháp:** Kiểm tra API response từ `/api/survey-submissions/`

#### Vấn đề 2: `techniqueType` không khớp
**Log:**
```
🎯 renderByTechniqueType - techniqueType: "some-other-value"
⚠️ Using renderGenericData for techniqueType: "some-other-value"
```
**Nguyên nhân:** `selectedRecord.template_type` không khớp với các case trong switch
**Giải pháp:** Kiểm tra giá trị của `template_type` trong database

#### Vấn đề 3: `data.sauMen`, `data.truocMen`, `data.thucAnMen` đều null
**Log:**
```
🔍 LenMenRenderer - Checking data.sauMen: undefined
🔍 LenMenRenderer - Checking data.truocMen: undefined
🔍 LenMenRenderer - Checking data.thucAnMen: undefined
📊 LenMenRenderer - Total sections: 0
```
**Nguyên nhân:** Cấu trúc data không đúng format mong đợi
**Giải pháp:** Kiểm tra cấu trúc JSON trong database

### 4. Cấu trúc data mong đợi

```json
{
  "sauMen": [
    {
      "tenPhuPhamCayTrong": "Lá cây",
      "thangNamDau": "01/2024",
      "dienTichTrong": "5 sào",
      // ... các field khác
    }
  ],
  "truocMen": [
    {
      "loaiCayTruoc": "Lúa",
      "dienTichTruoc": "10 sào",
      // ... các field khác
    }
  ],
  "thucAnMen": [
    {
      "loaiVatNuoi": "Gà",
      "soLuongVatNuoi": "50 con",
      // ... các field khác
    }
  ]
}
```

### 5. Kiểm tra trong database

Chạy query để xem cấu trúc data:

```sql
SELECT id, template_type, data 
FROM survey_submissions 
WHERE template_type = 'len-men-phu-pham' 
LIMIT 1;
```

### 6. Expected output khi thành công

Nếu mọi thứ hoạt động đúng, bạn sẽ thấy:
- Console logs đầy đủ
- Bảng dữ liệu hiển thị với cột STT và các cột dữ liệu
- Headers tiếng Việt từ FIELD_LABELS
- Dữ liệu trong các rows

## Remove Debug Logs

Sau khi test xong, xóa các console.log trong:
- `TechniqueDataRenderer.jsx` (lines 15-17, 113, 115-129)
- `LenMenRenderer.jsx` (lines 89-95, 133-135)
