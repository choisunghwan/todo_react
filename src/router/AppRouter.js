import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import TodoTemplate from '../components/todo/TodoTemplate';
import Join from '../components/user/Join';
import Login from '../components/user/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
const AppRouter = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/" element={<TodoTemplate />} />
        </Routes>
        <Footer />
    </>
  );
};

export default AppRouter;