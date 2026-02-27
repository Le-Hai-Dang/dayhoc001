# 📚 Kiến Thức Đã Học - Tổng Hợp Từ Project "Tính Chu Vi và Diện Tích"

## 🏷️ I. Các Thẻ HTML Đã Sử Dụng

| STT | Thẻ HTML | Công dụng | Ví dụ |
|-----|----------|-----------|-------|
| 1 | `<!DOCTYPE html>` | Khai báo loại tài liệu HTML5 | `<!DOCTYPE html>` |
| 2 | `<html>` | Thẻ gốc chứa toàn bộ trang | `<html lang="vi">` |
| 3 | `<head>` | Chứa thông tin metadata | `<head>...</head>` |
| 4 | `<meta>` | Khai báo bộ mã ký tự | `<meta charset="UTF-8">` |
| 5 | `<title>` | Tiêu đề trang (hiện trên tab) | `<title>Tên trang</title>` |
| 6 | `<link>` | Liên kết file CSS | `<link rel="stylesheet" href="style.css">` |
| 7 | `<body>` | Chứa nội dung hiển thị | `<body>...</body>` |
| 8 | `<h1>` | Tiêu đề lớn nhất | `<h1>Tiêu đề</h1>` |
| 9 | `<div>` | Khối chứa nhóm phần tử | `<div class="menu">...</div>` |
| 10 | `<p>` | Đoạn văn bản | `<p>Nội dung</p>` |
| 11 | `<strong>` | In đậm (nhấn mạnh) | `<strong>Chữ đậm</strong>` |
| 12 | `<form>` | Biểu mẫu nhập liệu | `<form class="form-tinh">...</form>` |
| 13 | `<input>` | Ô nhập dữ liệu | `<input type="number" placeholder="...">` |
| 14 | `<button>` | Nút bấm | `<button type="button" onclick="...">Tính</button>` |
| 15 | `<script>` | Liên kết file JavaScript | `<script src="script.js"></script>` |

### Thuộc tính HTML đã dùng:
- `lang` – ngôn ngữ trang
- `charset` – bộ mã ký tự
- `rel`, `href` – liên kết file CSS
- `class` – đặt tên class cho CSS/JS
- `type` – loại input (`number`) hoặc button (`button`)
- `placeholder` – gợi ý trong ô nhập
- `onclick` – gọi hàm JS khi click
- `src` – đường dẫn file JS

---

## 🎨 II. Các Thuộc Tính CSS Đã Sử Dụng

| STT | Thuộc tính CSS | Công dụng | Ví dụ |
|-----|----------------|-----------|-------|
| 1 | `color` | Màu chữ | `color: #333;` |
| 2 | `text-align` | Căn chỉnh chữ | `text-align: center;` |
| 3 | `background-color` | Màu nền | `background-color: #fff;` |
| 4 | `padding` | Khoảng cách bên trong | `padding: 20px;` |
| 5 | `border-radius` | Bo tròn góc | `border-radius: 10px;` |
| 6 | `margin-bottom` | Khoảng cách phía dưới | `margin-bottom: 20px;` |
| 7 | `margin` | Khoảng cách ngoài | `margin: 10px 0;` |
| 8 | `font-size` | Cỡ chữ | `font-size: 16px;` |
| 9 | `width` | Chiều rộng | `width: 100%;` |
| 10 | `box-sizing` | Cách tính kích thước | `box-sizing: border-box;` |
| 11 | `border` | Viền | `border: none;` |
| 12 | `cursor` | Kiểu con trỏ chuột | `cursor: pointer;` |
| 13 | `margin-top` | Khoảng cách phía trên | `margin-top: 20px;` |

### Selector CSS đã dùng:
- `.class-name` – chọn theo class
- `.class-name:hover` – trạng thái khi rê chuột

---

## ⚡ III. Các Hàm & Cú Pháp JavaScript Đã Sử Dụng

| STT | Cú pháp / Hàm | Công dụng | Ví dụ |
|-----|----------------|-----------|-------|
| 1 | `function` | Khai báo hàm | `function tenHam() { }` |
| 2 | `return` | Trả về giá trị | `return a + b;` |
| 3 | `var` | Khai báo biến | `var x = 10;` |
| 4 | `document.getElementsByClassName()` | Lấy phần tử theo class | `document.getElementsByClassName("ten")[0]` |
| 5 | `.value` | Lấy giá trị ô input | `input.value` |
| 6 | `.innerHTML` | Gán nội dung HTML | `div.innerHTML = "..."` |
| 7 | `Number()` | Chuyển chuỗi sang số | `Number("10")` |
| 8 | `if / else if / else` | Câu lệnh điều kiện | `if (x == 1) { } else { }` |
| 9 | `==` | So sánh bằng | `luaChon == 1` |
| 10 | `+` | Phép cộng / nối chuỗi | `a + b` hoặc `"Kết quả: " + x` |
| 11 | `*` | Phép nhân | `a * b` |
| 12 | `onclick` (thuộc tính HTML) | Gọi hàm khi click | `onclick="tinhToan()"` |

---

## 📌 Ghi chú quan trọng
- Project chỉ sử dụng **class** (không dùng id) để truy cập phần tử
- CSS dùng **selector class** (`.ten-class`) và **pseudo-class** (`:hover`)
- JavaScript dùng `getElementsByClassName()` (không dùng `getElementById` hay `querySelector`)
- Biến dùng `var` (không dùng `let` hay `const`)
- So sánh dùng `==` (không dùng `===`)
