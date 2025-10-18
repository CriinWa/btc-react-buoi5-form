import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './store/studentSlice';

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
