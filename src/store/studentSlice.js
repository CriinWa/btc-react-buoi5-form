import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    {
      id: 1,
      maSV: '1',
      hoTen: 'Nguyễn Văn A',
      soDienThoai: '09381111111',
      email: 'nguyenvana@gmail.com'
    },
    {
      id: 2,
      maSV: '2',
      hoTen: 'Nguyễn Văn B',
      soDienThoai: '09382223232',
      email: 'nguyenvanb@gmail.com'
    }
  ],
  editingStudent: null,
  errors: {}
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const newStudent = {
        ...action.payload,
        id: Date.now()
      };
      state.students.push(newStudent);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    setEditingStudent: (state, action) => {
      state.editingStudent = action.payload;
    },
    clearEditingStudent: (state) => {
      state.editingStudent = null;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    }
  },
});

export const {
  addStudent,
  updateStudent,
  deleteStudent,
  setEditingStudent,
  clearEditingStudent,
  setErrors,
  clearErrors
} = studentSlice.actions;

export default studentSlice.reducer;