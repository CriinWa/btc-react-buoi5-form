import React from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import StudentStats from './components/StudentStats';
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>Quản lý thông tin sinh viên</h1>
          <StudentStats />
        </div>
        <StudentForm />
        <StudentTable />
      </div>
    </div>
  )
}

export default App
