import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";
import "./App.css";
import axios from "axios";
import Apartman from "./components/Apartman";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import AdInside from "./components/AdInside";
import PrivateOffice from "./components/PrivateOffice";
import HelpCenter from "./components/HelpCenter";
import NewAnnouncementHead from "./components/AnnouncementHead/NewAnnouncementHead";
import EditHead from "./components/AnnouncementHead/EditHead";
import LevelUp from "./components/LevelUp";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/announces");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/apartman" element={<Apartman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-announcement-head" element={<NewAnnouncementHead />} />
        <Route path="/edit-head" element={<EditHead />} />
        <Route path="/level-up/:pId" element={<LevelUp />} />
        <Route path="/adinside/:pId" element={<AdInside />} />
        <Route path="/private-office/:pId" element={<PrivateOffice data={data} />} />
        <Route path="/yardim-ve-destek" element={<HelpCenter />} />
      </Routes>
      <Footer />
    </div>
  );
}
