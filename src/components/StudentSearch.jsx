import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const StudentSearch = ({ onFilteredStudents }) => {
  const { students } = useSelector(state => state.students);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = students.filter(student => 
      student.maSV.toLowerCase().includes(term) ||
      student.hoTen.toLowerCase().includes(term) ||
      student.soDienThoai.includes(term) ||
      student.email.toLowerCase().includes(term)
    );
    
    onFilteredStudents(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Tìm kiếm theo mã SV, họ tên, số điện thoại hoặc email..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default StudentSearch;