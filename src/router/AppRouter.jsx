import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import UserDetailsPage from "../pages/UserDetailsPage/UserDetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HelloWorld from "../pages/HelloWorld/HelloWorld";
import UsersForTest from "../components/usersForTest/UsersForTest";
import Users from "../components/Users/Users";
import SimpleMainPage from "../pages/SimpleMainPage/SimpleMainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/simple-main-page" element={<SimpleMainPage/>}/>
      <Route path="/hello" element={<HelloWorld/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users-test" element={<UsersForTest/>}/>
      <Route path="/users/:id" element={<UserDetailsPage/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
  );
};

export default AppRouter;
