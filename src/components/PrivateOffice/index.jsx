import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import Elanlarim from "./pages/Elanlarim/Elanlarim";
import WishList from "./pages/WishList";

export default function PrivateOffice({ data }) {
  const navigate = useNavigate();
  const { pId } = useParams();

  useEffect(() => {
    console.log(pId + " deyisildi");
  }, [pId]);

  const handleNavigate = (id) => {
    navigate(`/private-office/${id}`);
  };

 

  return (
    <section className="private-office">
      <div className="container-priv">
        <div className="left">
          <button onClick={() => handleNavigate(0)}>
            <img
              src={require("../../images/home/my-icon.svg").default}
              alt="watch"
            />
            <p>Elanlarım</p>
          </button>
          <button onClick={() => handleNavigate(1)}>
            <img
              src={require("../../images/home/heart-my-fav.svg").default}
              alt="watch"
            />
            <p>Seçilənlər</p>
          </button>
          <button onClick={() => handleNavigate(2)}>
            <img
              src={require("../../images/home/setting.svg").default}
              alt="watch"
            />
            <p>Ayarlar</p>
          </button>
          <button onClick={() => navigate("/yardim-ve-destek")}>
            <img
              src={require("../../images/home/help-icon.svg").default}
              alt="watch"
            />
            <p>Yardım və Dəstək</p>
          </button>
          <button onClick={() => navigate("/")}>
            <img
              src={require("../../images/home/log-out-circle.svg").default}
              alt="watch"
            />
            <p>Çıxış</p>
          </button>
        </div>
        <div className="right">
          {pId === "0" && <Elanlarim  />}
          {pId === "1" && <WishList  />}
          {pId === "2" && (
            <>
              <h2>Ayarlar</h2>
              <img
                className="profile-photo"
                src={require("../../images/home/profile-photo.svg").default}
                alt="pf"
              />
              <div className="add-inputs">
                <div>
                  <p className="p-all">Ad soyad</p>
                  <input
                    className="email-input"
                    placeholder="Ad,soyadınızı daxil edin"
                    type="text"
                    name="name"
                  />
                  <p className="p-all">Email</p>
                  <input
                    className="email-input"
                    placeholder="Emailinizi daxil edin"
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <p className="p-all">Telefon nömrəniz</p>
                  <input
                    className="email-input"
                    placeholder="Telefon nömrənizi daxil edin"
                    type="text"
                    name="phonenumber"
                  />
                  <p className="p-all">Whatsapp nömrəniz</p>
                  <input
                    className="email-input"
                    placeholder="Whatsapp nömrənizi daxil edin"
                    type="text"
                    name="wpnumber"
                  />
                </div>
              </div>
              <p className="change-pasword">Şifrəni dəyiş</p>
              <div className="add-inputs">
                <div>
                  <p className="p-all">Cari şifrə</p>
                  <input
                    className="email-input"
                    placeholder="Şifrənizi daxil edin"
                    type="password"
                    name="name"
                  />
                </div>
                <div>
                  <p className="p-all">Yeni şifrə</p>
                  <input
                    className="email-input"
                    placeholder="Yeni şifrəni daxil edin"
                    type="password"
                    name="phonenumber"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
