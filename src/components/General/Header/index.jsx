import React, { useState } from "react";
import "./index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categoryLeftData, subCategories } from "./headerMockData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const searchDataHandler = () => {
    navigate(`/apartman?q=${search}`);
  };

  return (
    <section className="header">
      <nav>
        <div className="container">
          <div className="flex1">
          <a href="https://www.facebook.com">  <img
              className="fb-img"
              src={require("../../../images/home/facebook.svg").default}
              alt="fb"
            /></a>
            <a href="https://www.instagram.com"><img
              className="insta-img"
              src={require("../../../images/home/insta.svg").default}
              alt="instagram"
            /></a> 
           <a href="https://web.whatsapp.com/"> <img
              className="tel-img"
              src={require("../../../images/home/tel.svg").default}
              alt="tel"
            /></a>
            <a href="https://web.whatsapp.com/">  <p className="tel">(+994) 70 256 24 89</p></a>
            <Link to={"/yardim-ve-destek"}>
              <p className="help">Yardım və dəstək</p>
            </Link>
          </div>
          <div className="flex2">
            <img
              src={require("../../../images/home/personcircle.svg").default}
              alt="account-img"
            />
            <NavLink to={"/login"}>
              <button className="login">Giriş</button>
            </NavLink>
            <NavLink to={"/register"}>
              <button className="register">Qeydiyyat</button>
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="container2">
        <div className="flex3">
          <NavLink to={"/"}>
            <img
              className="logo"
              src={require("../../../images/home/Logo.svg").default}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex4">
          <div className="category-dropdown">
            <div className="btn-categories" onClick={toggleMenu}>
              <div
                className={
                  isMenuOpen
                    ? "clicked-animation-btn animation-btn"
                    : `animation-btn`
                }
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p className="btn-cat">Kateqoriya seçin</p>
            </div>
          </div>
          <input
            className="search-input"
            placeholder="Axtaracağınız məhsul,elan,kateqoriyanı yazın"
            type="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <img
            className="search-icon"
            src={require("../../../images/home/search-icon.svg").default}
            alt="search-img"
            onClick={searchDataHandler}
          />
        </div>
        <div className="flex5">
          <NavLink to={"/private-office/1"}>
            <button className="btn-fav">
              <img
                className="fav-icon"
                src={require("../../../images/home/fav-icon.svg").default}
                alt="search-img"
              />
              <p className="btn-fav2">Seçilənlər</p>
            </button>
          </NavLink>
        </div>
        <div className="flex6">
          <NavLink to={"/new-announcement-head"}>
            <button className="add-btn">
              &#43;<span className="new-p"> Yeni elan</span>
            </button>
          </NavLink>
        </div>
      </div>
      {isMenuOpen && (
        <div className="category-menu">
          <div className="flexable">
            <div className="left-cat">
              {categoryLeftData.map(({ id, title, icon, alt }) => (
                <Link
                  key={id}
                  className="button"
                  to={`/apartman?category=${title}&`}
                  onMouseOver={() => handleCategoryClick(alt)}
                >
                  <div>
                    <img src={icon} alt={alt} />
                    <p>{title}</p>
                  </div>
                  <div>
                    <p>&#62;</p>
                  </div>
                </Link>
              ))}
            </div>
            <div>
              {subCategories.map(
                ({ id, alt, category, titles }) =>
                  selectedCategory === alt && (
                    <div
                      onClick={(e) => {
                        e.target.nodeName === "BUTTON" && setIsMenuOpen(false);
                      }}
                      className="subcategories"
                      key={id}
                    >
                      {titles.map((title, index) => (
                        <NavLink
                          key={index}
                          to={`/apartman?category=${category}&subcategory=${title}`}
                        >
                          <button>
                            <p>{title}</p> <p>&#62;</p>
                          </button>
                        </NavLink>
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>
          <div>
            <div className="popular-search">
              <h3>Popular axtarışlar</h3>

              <p>Bakcell nömrələri</p>
              <p>Xiomit</p>
              <p>Ev alqı satqısı</p>
              <p>Maşın elanları</p>
              <p>Kirayə bağ evi</p>
              <p>Mətbəx mebelləri</p>
              <p>Nar nömrələri</p>
              <p>Azercell nömrələri</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
