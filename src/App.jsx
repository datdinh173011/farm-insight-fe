import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterviewForm from './components/InterviewForm';
import Login from './components/Login';
import Admin from './components/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={
          <div style={{ width: '100vw', height: '100vh' }}>
            <InterviewForm />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
