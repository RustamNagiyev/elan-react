import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <section className="register-main">
      <h2>Qeydiyyat</h2>
      <div className="main">
        <p className="p-email">Ad soyad</p>
        <input
          className="email-input"
          placeholder="Ad,soyadınızı daxil edin"
          type="text"
        />
        <p className="p-email">Email</p>
        <input
          className="email-input"
          placeholder="Emailinizi daxil edin"
          type="email"
        />
        <p className="p-email">Mobil nömrə</p>
        <input
          className="email-input"
          placeholder="Mobil nömrənizi daxil edin"
          type="text"
        />
        <p className="p-email">Şifrə</p>
        <input
          className="email-input"
          placeholder=" Yeni şifrə yaradın"
          type="password"
        />
        <div className="confirm-code">
          <input
            className="code-input"
            type="number"
            placeholder="Şəkildəki kodu daxil edin"
          />
          <p>5568</p>
        </div>
        <div className="confirm-checkbox">
          <input  type="checkbox" />
          <p><span>İstifadəçi şərtləri</span> ilə razıyam</p>
        </div>
        <button className="login-btn">Davam edin</button>
            <p className="p-end">Hesabınız var? o zaman</p>
            <NavLink to={"/login"}> <button className="register-btn">Daxil olun</button></NavLink>
      </div>
    </section>
  );
}
