import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, setEditingStudent } from '../store/studentSlice';
import StudentSearch from './StudentSearch';

const StudentTable = () => {
  const dispatch = useDispatch();
  const { students } = useSelector(state => state.students);
  const [filteredStudents, setFilteredStudents] = useState(students);

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const handleEdit = (student) => {
    dispatch(setEditingStudent(student));
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <div className="student-table-container">
      <div className="table-header">
        <h3>Danh sách sinh viên</h3>
        <StudentSearch onFilteredStudents={setFilteredStudents} />
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">
                {students.length === 0 ? 'Chưa có sinh viên nào' : 'Không tìm thấy sinh viên phù hợp'}
              </td>
            </tr>
          ) : (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.maSV}</td>
                <td>{student.hoTen}</td>
                <td>{student.soDienThoai}</td>
                <td>{student.email}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      onClick={() => handleEdit(student)}
                      className="btn-edit"
                      title="Chỉnh sửa"
                    >
                      ✏️
                    </button>
                    <button 
                      onClick={() => handleDelete(student.id)}
                      className="btn-delete"
                      title="Xóa"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;