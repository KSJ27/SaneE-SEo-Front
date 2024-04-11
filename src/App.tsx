import React from 'react';
import Main from './pages/Main';
import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SeoulTrails from './pages/SeoulTrails';
import Community from './pages/Community';
import EditUserCourse from './pages/EditUserCourse';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/seoul-trails" element={<SeoulTrails />} />
          <Route path="/community" element={<Community />} />
          <Route path="/EditUserCourse" element={<EditUserCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
