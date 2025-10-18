import React from 'react';
import { useSelector } from 'react-redux';

const StudentStats = () => {
  const { students } = useSelector(state => state.students);
  
  return (
    <div className="stats-container">
      <div className="stats-card">
        <div className="stats-number">{students.length}</div>
        <div className="stats-label">Tổng số sinh viên</div>
      </div>
    </div>
  );
};

export default StudentStats;