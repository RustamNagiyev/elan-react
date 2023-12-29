import React, { useState } from 'react';
import './index.css';
import { NavLink } from "react-router-dom";

export default function Login() {
  const [mode, setMode] = useState('email');
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handlePasswordResetClick = () => {
    setShowPasswordReset(true);
  };

  return (
    <section className="login-main">
      <h2>“Sat Getsin” ə xoş gəlmişsiniz !</h2>
      <p className="paragraf">
      Qeydiyyat zamanı istifadə etdiyiniz e-mail (nömrə) və şifrə vasitəsilə daxil olun
      </p>
      <div className='main-area'>
        <div className="type-select">
          <button
            onClick={() => handleModeChange('email')}
            className={mode === 'email' ? 'active' : ''}
          >
            Email
            {mode === 'email'}
          </button>
          <button
            onClick={() => handleModeChange('mobile')}
            className={mode === 'mobile' ? 'active' : ''}
          >
            Mobil nömrə
            {mode === 'mobile'}
          </button>
        </div>
        {mode === 'email' ? (
          <React.Fragment>
            <p className="p-email">Email</p>
            <input className="email-input" placeholder="E-postanızı girin" type="email" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className="p-email">Mobil nömrə</p>
            <input className="email-input" placeholder="Mobil numaranızı girin" type="text" />
          </React.Fragment>
        )}

        {showPasswordReset ? (
          <button className="login-btn">Kodu göndər</button>
        ) : (
          <React.Fragment>
            <p className='p-email'>Şifrə</p>
            <input className='email-input' placeholder='Yeni şifre oluşturun' type="password" />
            <div className="password-container">
              <div>
                <input className="show-password" type="checkbox" />
                <p>Şifrəni göstər</p>
              </div>
              <div>
                <button className="forgot-password-btn" onClick={handlePasswordResetClick}>
                  Şifrəmi unutdum
                </button>
              </div>
            </div>
            <button className="login-btn">Daxil ol</button>
            <p className="p-end">Saytımızda yenisiz? o zaman</p>
            <NavLink to={"/register"}><button className="register-btn">Qeydiyyatdan keçin</button></NavLink>
          </React.Fragment>
        )}
      </div>
    </section>
  );
}