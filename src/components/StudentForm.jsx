import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent, clearEditingStudent, setErrors, clearErrors } from '../store/studentSlice';

const StudentForm = () => {
  const dispatch = useDispatch();
  const { editingStudent, errors, students } = useSelector(state => state.students);
  
  const [formData, setFormData] = useState({
    maSV: '',
    hoTen: '',
    soDienThoai: '',
    email: ''
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData({
        maSV: '',
        hoTen: '',
        soDienThoai: '',
        email: ''
      });
    }
  }, [editingStudent]);

  const validateForm = () => {
    const newErrors = {};

    // Validate Mã SV
    if (!formData.maSV.trim()) {
      newErrors.maSV = 'Mã SV không được để trống';
    } else {
      // Check if maSV already exists (except for current editing student)
      const existingStudent = students.find(
        student => student.maSV === formData.maSV && student.id !== editingStudent?.id
      );
      if (existingStudent) {
        newErrors.maSV = 'Mã SV đã tồn tại';
      }
    }

    // Validate Họ tên
    if (!formData.hoTen.trim()) {
      newErrors.hoTen = 'Họ tên không được để trống';
    } else if (formData.hoTen.trim().length < 2) {
      newErrors.hoTen = 'Họ tên phải có ít nhất 2 ký tự';
    }

    // Validate Số điện thoại
    const phonePattern = /^[0-9]{10,11}$/;
    if (!formData.soDienThoai.trim()) {
      newErrors.soDienThoai = 'Số điện thoại không được để trống';
    } else if (!phonePattern.test(formData.soDienThoai)) {
      newErrors.soDienThoai = 'Số điện thoại phải là 10-11 chữ số';
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      dispatch(setErrors({
        ...errors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      dispatch(setErrors(validationErrors));
      return;
    }

    dispatch(clearErrors());

    if (editingStudent) {
      dispatch(updateStudent({ ...formData, id: editingStudent.id }));
      dispatch(clearEditingStudent());
    } else {
      dispatch(addStudent(formData));
    }

    // Reset form
    setFormData({
      maSV: '',
      hoTen: '',
      soDienThoai: '',
      email: ''
    });
  };

  const handleCancel = () => {
    dispatch(clearEditingStudent());
    dispatch(clearErrors());
    setFormData({
      maSV: '',
      hoTen: '',
      soDienThoai: '',
      email: ''
    });
  };

  return (
    <div className="student-form-container">
      <div className="form-header">
        <h2>Thông tin sinh viên</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="maSV">Mã SV</label>
            <input
              type="text"
              id="maSV"
              name="maSV"
              value={formData.maSV}
              onChange={handleChange}
              className={errors.maSV ? 'error' : ''}
              placeholder="Nhập mã sinh viên"
            />
            {errors.maSV && <span className="error-message">{errors.maSV}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="hoTen">Họ tên</label>
            <input
              type="text"
              id="hoTen"
              name="hoTen"
              value={formData.hoTen}
              onChange={handleChange}
              className={errors.hoTen ? 'error' : ''}
              placeholder="Nhập họ tên"
            />
            {errors.hoTen && <span className="error-message">{errors.hoTen}</span>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="soDienThoai">Số điện thoại</label>
            <input
              type="text"
              id="soDienThoai"
              name="soDienThoai"
              value={formData.soDienThoai}
              onChange={handleChange}
              className={errors.soDienThoai ? 'error' : ''}
              placeholder="Nhập số điện thoại"
            />
            {errors.soDienThoai && <span className="error-message">{errors.soDienThoai}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Nhập email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            {editingStudent ? 'Cập nhật sinh viên' : 'Thêm sinh viên'}
          </button>
          {editingStudent && (
            <button type="button" onClick={handleCancel} className="btn-cancel">
              Hủy
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StudentForm;