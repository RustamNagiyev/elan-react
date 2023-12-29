import React, { useState } from "react";
import "./index.css";

export default function HelpCenter() {
  const [selectedArea, setSelectedArea] = useState("Elanlar");
  const [clickedAreas, setClickedAreas] = useState({});

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setClickedAreas({}); // Reset clicked areas when selecting a new main area
  };

  const handleSubAreaClick = (subArea) => {
    setClickedAreas((prevClickedAreas) => ({
      ...prevClickedAreas,
      [subArea]: !prevClickedAreas[subArea], // Toggle the clicked state
    }));
  };

  return (
    <section className="help-center">
      <div className="container">
        <div className="left-flex">
          <h2>Sizə necə kömək edə bilərik?</h2>
          <input type="search" placeholder="Sualınızı verin" />
          <img
            className="search-icon"
            src={require("../../images/home/search-icon.svg").default}
            alt="search-img"
          />
        </div>
        <div className="right-flex">
          <img
            src={require("../../images/home/febremovebg.png")}
            alt="help-img"
          />
        </div>
      </div>
      <h3>Suallar</h3>
      <div className="state">
        <div className="left">
          <button
            onClick={() => handleAreaClick("Elanlar")}
            className={selectedArea === "Elanlar" ? "selected" : ""}
          >
            Elanlar
          </button>
          <button
            onClick={() => handleAreaClick("Şəxsi kabinet")}
            className={selectedArea === "Şəxsi kabinet" ? "selected" : ""}
          >
            Şəxsi kabinet
          </button>
          <button
            onClick={() => handleAreaClick("Hüquqi məlumat və məxfilik")}
            className={
              selectedArea === "Hüquqi məlumat və məxfilik" ? "selected" : ""
            }
          >
            Hüquqi məlumat və məxfilik
          </button>
          <button
            onClick={() => handleAreaClick("Pullu xidmətlər")}
            className={selectedArea === "Pullu xidmətlər" ? "selected" : ""}
          >
            Pullu xidmətlər
          </button>
        </div>
        <div className="right">
          {selectedArea === "Elanlar" && <div>Content for Elanlar</div>}
          {selectedArea === "Şəxsi kabinet" && (
            <div className="help-office">
              <div>
                <div onClick={() => handleSubAreaClick("ChangeEmail")}>
                  <div>
                    <p>E-mail ünvanının dəyişdirilməsi</p>
                    <img
                      src={require("../../images/home/button.svg").default}
                      alt="help-img"
                    />
                  </div>

                  {clickedAreas["ChangeEmail"] && (
                    <>
                      <p className="inside-text">
                        Alt alan açıldı - Şifrənin dəyişdirilməsi
                      </p>
                      {/* Add your additional content here */}
                    </>
                  )}
                </div>
                <div onClick={() => handleSubAreaClick("ChangePassword")}>
                  <div>
                    <p>Şifrənin dəyişdirilməsi</p>
                    <img
                      src={require("../../images/home/button.svg").default}
                      alt="help-img"
                    />
                  </div>
                  {clickedAreas["ChangePassword"] && (
                    <>
                      <p className="inside-text">
                        Şifrənin dəyişdirilməsi üçün profil parametrlərinə keçin
                        və "Şifrəni dəyişmək" düyməsini klikləyin. Cari şifrəni
                        daxil edin.
                      </p>
                      {/* Add your additional content here */}
                    </>
                  )}
                </div>
                <div onClick={() => handleSubAreaClick("ChangePhoneNumber")}>
                  <div>
                    <p>Telefon nömrəsinin dəyişdirilməsi</p>
                    <img
                      src={require("../../images/home/button.svg").default}
                      alt="help-img"
                    />
                  </div>
                  {clickedAreas["ChangePhoneNumber"] && (
                    <>
                      <p className="inside-text">
                        Alt alan açıldı - Telefon nömrəsinin dəyişdirilməsi
                      </p>
                      {/* Add your additional content here */}
                    </>
                  )}
                </div>
                <div>
                  <p className="help-tech">Texniki Dəstək</p>
                  <div className="tech-container">
                    <p className="text-tech">
                      Əgər əlavə sualınız yaranarsa,zəhmət olmasa bizim Yardım
                      mərkəzilə əlaqə saxlayın{" "}
                    </p>
                    <a href="https://web.whatsapp.com/">
                      <button>
                        <img
                          src={require("../../images/home/wp-icon.svg").default}
                          alt="help-img"
                        />
                        Whatsapp
                      </button>
                    </a>
                    <a href="https://mail.ru/">
                      {" "}
                      <button>
                        <img
                          src={require("../../images/home/mektub.svg").default}
                          alt="help-img"
                        />
                        Email
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedArea === "Hüquqi məlumat və məxfilik" && (
            <div>Content for Hüquqi məlumat və məxfilik</div>
          )}
          {selectedArea === "Pullu xidmətlər" && (
            <div>Content for Pullu xidmətlər</div>
          )}
        </div>
      </div>
    </section>
  );
}
