import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

export default function LevelUp() {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    // Handle the case where data is not available
    return <p>Data not available</p>;
  }

  return (
    <section className="level-up">
      <div className="level-container">
        <div className="lvl-flex">
          <img
            className="img-premium"
            src={(Array.isArray(data.url) ) || data.url}
            alt="elan"
          />
        </div>
        <div className="lvl-flex-second">
          <h2>{data.announcementname}</h2>
          <p>
            Elan nömrəsi: <span>{data.id}</span>
          </p>
        </div>
      </div>
      <h2 className="my-pocket">Paketlərimiz</h2>
      <div className="bottom-container">
        <div className="lvl-area">
            <h3>İrəli çək</h3>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Axtarışda görünmə imkanı</p>
            </div>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Ən son elanlar bölməsində görünmə imkanı</p>
            </div>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Kateqoriyalarda görünmə imkanı</p>
            </div>
            <p className="select-p">Sizə uyğun tarifi seçin:</p>
            <button>
            <input type="radio" id="first" />
            <label for="first">0.15 man<span> / 1 gün</span></label>
            </button>
        </div>
        <div className="lvl-area">
            <h3>İrəli çək</h3>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Axtarışda görünmə imkanı</p>
            </div>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Ən son elanlar bölməsində görünmə imkanı</p>
            </div>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Kateqoriyalarda görünmə imkanı</p>
            </div>
            <p className="select-p">Sizə uyğun tarifi seçin:</p>
            <button>
            <input type="radio" id="second" />
            <label for="second">0.15 man<span> / 1 gün</span></label>
            </button>
            <button>
            <input type="radio" id="second2" />
            <label for="second2">0.15 man<span> / 1 gün</span></label>
            </button>
            <button>
            <input type="radio" id="second3" />
            <label for="second3">0.15 man<span> / 1 gün</span></label>
            </button>
        </div>
        <div className="lvl-area">
            <h3>İrəli çək</h3>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Axtarışda görünmə imkanı</p>
            </div>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Ən son elanlar bölməsində görünmə imkanı</p>
            </div>
            <div>
            <img
                src={require("../../images/home/v.svg").default}
                alt="v"
              />
              <p>Kateqoriyalarda görünmə imkanı</p>
            </div>
            <p className="select-p">Sizə uyğun tarifi seçin:</p>
            <button>
            <input type="radio" id="third" />
            <label for="third">0.15 man<span> / 1 gün</span></label>
            </button>
            <button>
            <input type="radio" id="third2" />
            <label for="third2">0.15 man<span> / 1 gün</span></label>
            </button>
            <button>
            <input type="radio" id="third3" />
            <label for="third3">0.15 man<span> / 1 gün</span></label>
            </button>
        </div>
      </div>
      <div className="btn-container">
        <button>Geri</button>
        <button>Ödə və bitir</button>
      </div>
    </section>
  );
}
