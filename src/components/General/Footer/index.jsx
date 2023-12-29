import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <img
          src={require("../../../images/home/Logo.svg").default}
          alt="category"
        />
        <button className="btn-createAd">&#43;Elan yerləşdirin</button>
      </div>
      <div className="container2">
        <div className="flex">
          <div className="left-up">
            <a href="https://web.whatsapp.com/">
              {" "}
              <img
                src={require("../../../images/home/tel.svg").default}
                alt="category"
              />
            </a>
            <a href="https://web.whatsapp.com/">
              {" "}
              <span>(+994)70 256 24 89</span>
            </a>
          </div>
          <div className="left-down">
            <a href="https://mail.ru/">
              {" "}
              <img
                src={require("../../../images/home/mektub.svg").default}
                alt="category"
              />
            </a>
            <a href="https://mail.ru/">
              {" "}
              <span>example@az</span>
            </a>
          </div>
          <hr />
          <div className="twoimg">
            <a href="https://www.instagram.com">
              {" "}
              <img
                src={require("../../../images/home/insta.svg").default}
                alt="category"
              />
            </a>
            <a href="https://www.facebook.com">
              {" "}
              <img
                src={require("../../../images/home/facebook.svg").default}
                alt="category"
              />
            </a>
          </div>
        </div>
        <div className="flex">
          <h3>Kateqoriyalar</h3>
          <p>Daşınmaz əmlak</p>
          <p>Nəqliyyat</p>
          <p>Ev və bağ üçün</p>
          <p>Xidmətlər</p>
          <p>Şəxsi əşyalar</p>
          <p>Uşaq aləmi</p>
          <p>Elektronika və texnika</p>
          <p>Heyvanlar</p>
        </div>
        <div className="flex">
          <p>Hobbi,asudə,idman</p>
          <p>Biznes</p>
          <p>Vakansiyalar</p>
        </div>
        <div className="flex">
          <h3>Kömək</h3>
          <p>Elanlar</p>
          <p>Yardım və dəstək</p>
          <p>Qaydalar</p>
          <p>İstifadəçi razılaşması</p>
          <p>Məxfilik siyasəti</p>
        </div>
      </div>
      <div className="container3">
        <p>Bütün hüquqlar qorunur 2022</p>
        <p>Site by Jedai</p>
      </div>
    </section>
  );
}
