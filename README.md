# Quản lý Thông tin Sinh viên

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
