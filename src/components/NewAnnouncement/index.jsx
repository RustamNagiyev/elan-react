import React, { useState } from "react";
import "./index.css";
import Dropzone from "../Dropzone";
import {
  categoryLeftData,
  subCategories,
} from "../../components/General/Header/headerMockData";
import axios from "axios";


export default function NewAnnouncement() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phonenumber: "",
    wpnumber: "",
    announcementname: "",
    city: "",
    price: "",
    category: "",
    subcategory: "",
    information: "",
    condution: "Yeni",
    video: "",
    url: [],
  });

  const [cat, setCat] = useState("");

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const categoryChangeHandler = (e) => {
    const { selectedIndex, childNodes } = e.target;
    setCat(childNodes[selectedIndex].dataset.value);

    console.log(cat);
  };

  const createAnnounce = () => {
    axios.post("http://localhost:3000/announces", form).then((data) => {
      console.log(data);
    });
  };

  return (
    <section className="new-announcement">
      
      <div className="main-part">
        <h2 className="h2-other">Şəxsi məlumatlar</h2>
        <div className="add-inputs">
          <div>
            <p className="p-all">Ad soyad</p>
            <input
              className="email-input"
              placeholder="Ad,soyadınızı daxil edin"
              type="text"
              name="name"
              onChange={inputChangeHandler}
            />
            <p className="p-all">Email</p>
            <input
              className="email-input"
              placeholder="Emailinizi daxil edin"
              type="email"
              name="email"
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <p className="p-all">Telefon nömrəniz</p>
            <input
              className="email-input"
              placeholder="Telefon nömrənizi daxil edin"
              type="number"
              name="phonenumber"
              onChange={inputChangeHandler}
            />
            <p className="p-all">Whatsapp nömrəniz</p>
            <input
              className="email-input"
              placeholder="Whatsapp nömrənizi daxil edin"
              type="number"
              name="wpnumber"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <h2 className="h2-other">Məhsul haqqında məlumatlar</h2>
        <p className="p-all">Elanın adı</p>
        <input
          className="name-ad-input"
          placeholder="Elanın adını qeyd edin"
          type="text"
          name="announcementname"
          onChange={inputChangeHandler}
        />
        <div className="container-productAbout">
          <div className="left">
            <p className="p-all">Kateqoriya</p>
            <select
              name="category"
              onChange={(e) => {
                inputChangeHandler(e);
                categoryChangeHandler(e);
              }}
            >
              <option value="" data-value="">
                Kateqoriya seçin
              </option>
              {categoryLeftData.map(({ id, title, alt }) => (
                <option key={id} value={title} data-value={alt}>
                  {title}
                </option>
              ))}
            </select>
            <p className="p-all">Şəhər</p>
            <input
              className="email-input"
              placeholder="Şəhər adını yazın"
              type="search"
              name="city"
              onChange={inputChangeHandler}
            />

            <p className="p-all">Qiymət</p>
            <input
              className="email-input"
              placeholder="Qiyməti qeyd edin"
              type="number"
              name="price"
              onChange={inputChangeHandler}
            />
            <p className="p-all">Video (Youtube, Vimeo)</p>
            <input
              className="email-input"
              placeholder="Videonu əlavə edin"
              type="text"
              name="video"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="right">
            <p className="p-all">Alt kateqoriya</p>
            <select
              className="email-input"
              name="subcategory"
              onChange={(e) => {
                inputChangeHandler(e);
              }}
            >
              <option value="">Alt kateqoriya seçin</option>
              {subCategories.map(
                ({ alt, titles }) =>
                  cat === alt &&
                  titles.map((text, index) => (
                    <option value={text} key={index}>
                      {text}
                    </option>
                  ))
              )}
            </select>
            <p className="p-all">Vəziyyəti</p>
            <select name="condution" onChange={inputChangeHandler}>
              <option value="Yeni">Yeni</option>
              <option value="İşlənmiş">İşlənmiş</option>
            </select>
            <p className="p-all">Ətraflı məlumat</p>
            <input
              className="text-input"
              placeholder="Mətn daxil edin"
              type="text"
              name="information"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <Dropzone setForm={setForm} />

        <button className="btn-createAd" onClick={createAnnounce}>Elan yarat</button>
      </div>
    </section>
  );
}
