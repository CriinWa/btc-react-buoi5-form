# Quản lý Thông tin Sinh viên

Ứng dụng React sử dụng Vite để quản lý thông tin sinh viên với đầy đủ chức năng CRUD, validation và Redux.

## Tính năng

### ✅ Các chức năng đã hoàn thành:
- **Thêm sinh viên mới** với validation đầy đủ
- **Chỉnh sửa thông tin sinh viên** 
- **Xóa sinh viên** với xác nhận
- **Tìm kiếm sinh viên** theo mã SV, tên, số điện thoại, email
- **Hiển thị thống kê** số lượng sinh viên
- **Validation form** với thông báo lỗi chi tiết
- **Responsive design** tương thích mobile

### 🛠 Công nghệ sử dụng:
- **React 19** - UI Framework
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **CSS3** - Styling với responsive design

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy ứng dụng
npm run dev

# Build cho production
npm run build
```

## Cấu trúc dự án

```
src/
├── components/
│   ├── StudentForm.jsx      # Form thêm/sửa sinh viên
│   ├── StudentTable.jsx     # Bảng hiển thị danh sách
│   ├── StudentSearch.jsx    # Tìm kiếm sinh viên
│   └── StudentStats.jsx     # Thống kê
├── store/
│   ├── index.js            # Redux store
│   └── studentSlice.js     # Slice quản lý sinh viên
├── App.jsx                 # Component chính
├── main.jsx               # Entry point
└── App.css                # Styling
```

## Validation Rules

### Mã SV:
- Không được để trống
- Phải là duy nhất (không trùng lặp)

### Họ tên:
- Không được để trống
- Tối thiểu 2 ký tự

### Số điện thoại:
- Không được để trống
- Phải là 10-11 chữ số

### Email:
- Không được để trống
- Phải có format hợp lệ (xxx@xxx.xxx)

## Chức năng Redux

### Actions:
- `addStudent` - Thêm sinh viên mới
- `updateStudent` - Cập nhật thông tin sinh viên
- `deleteStudent` - Xóa sinh viên
- `setEditingStudent` - Chọn sinh viên để chỉnh sửa
- `clearEditingStudent` - Hủy chỉnh sửa
- `setErrors` - Đặt lỗi validation
- `clearErrors` - Xóa lỗi validation

### State Structure:
```javascript
{
  students: [],         // Danh sách sinh viên
  editingStudent: null, // Sinh viên đang chỉnh sửa
  errors: {}           // Lỗi validation
}
```

## Giao diện

Ứng dụng có giao diện hiện đại với:
- Header với tiêu đề và thống kê
- Form nhập liệu với validation realtime
- Bảng hiển thị với tìm kiếm
- Responsive design cho mobile
- Animation và hover effects

## Hướng dẫn sử dụng

1. **Thêm sinh viên**: Điền thông tin vào form và click "Thêm sinh viên"
2. **Chỉnh sửa**: Click icon ✏️ trong bảng, thông tin sẽ điền vào form
3. **Xóa**: Click icon 🗑️ và xác nhận xóa
4. **Tìm kiếm**: Gõ từ khóa vào ô tìm kiếm để lọc danh sách
5. **Validation**: Hệ thống tự động kiểm tra và hiển thị lỗi

## Demo Data

Ứng dụng có sẵn 2 sinh viên mẫu:
- Nguyễn Văn A (Mã SV: 1)
- Nguyễn Văn B (Mã SV: 2)
