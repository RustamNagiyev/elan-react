import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Vip from "../Home/Vip";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import axios from "axios";

const AdInside = ({ selectedCategory }) => {
  const [favoriteStates, setFavoriteStates] = useState([]);
  const [data, setData] = useState({});
  const { pId } = useParams();
  const navigate = useNavigate();
    useEffect(() => {
    axios.get(`http://localhost:3000/announces/${pId}`).then(({ data }) => {
      setData(data);
    });
  }, []);

  console.log(data);

  useEffect(() => {
    setFavoriteStates(JSON.parse(localStorage.getItem("wishlistItems")) || []);
  }, [selectedCategory]);

  const handleFavoriteClick = (event, index) => {
    event.preventDefault();
    console.log(index);

    const itemExist = favoriteStates.includes(index);

    if (itemExist) {
      const updatedStates = favoriteStates.filter((id) => id !== index);
      setFavoriteStates(updatedStates);
      localStorage.setItem("wishlistItems", JSON.stringify(updatedStates));
    } else {
      setFavoriteStates((prev) => [...prev, index]);
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify([...favoriteStates, index])
      );
    }
  };

  const [lightboxVisible, setLightboxVisible] = useState(false);

  const handleImageClick = () => {
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [selectedItemData, setSelectedItemData] = useState(null);

  const [mode, setMode] = useState("email");

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  useEffect(() => {
    document.body.style.overflow = lightboxVisible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxVisible]);


  useEffect(() => {
    if (id && data) {
      const selectedItem = data.find((item) => item.id === parseInt(id));
      setSelectedItemData(selectedItem || null);
    }
  }, [id, data]);

  const getYouTubeThumbnail = (url, size = "hqdefault") => {
    const videoId = url.match(/(?:\/embed\/|v=)([a-zA-Z0-9_-]{11})/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/${size}.jpg` : null;
  };

  // if (!selectedItemData) {
  //   return <p>İlan bulunamadı</p>;
  // }
  const handleButtonClick = () => {
    // Navigate to LevelUp component with the selected item's data
    navigate(`/level-up/${data.id}`, { state: { data } });
  };
  console.log(Array.isArray(data.url));

  return (
    <section className="adinside">
      <div className="container">
        <div className="left">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <img
              className="fav"
              src={
                favoriteStates.includes(data.id)
                  ? require("../../images/home/heart-red.svg").default
                  : require("../../images/home/heart-primary.svg").default
              }
              alt="fav"
              onClick={(event) => handleFavoriteClick(event, data.id)}
            />
            <div className="pricediv">
              <p>{data.price}</p>
              <img
                src={require("../../images/home/manatgoy.svg").default}
                alt="watch"
              />
            </div>

            {Array.isArray(data.url) ? (
              data.url.map((imgUrl) => (
                <SwiperSlide>
                  <img src={imgUrl} />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img src={data.url} />
              </SwiperSlide>
            )}

            {data.video && (
              <SwiperSlide onClick={handleImageClick}>
                <img width="100%" height="100%" src={getYouTubeThumbnail(data.video)} alt="" />
              </SwiperSlide>
            )}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {Array.isArray(data.url) ? (
              data.url.map((imgUrl) => (
                <SwiperSlide>
                  <img src={imgUrl} />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img src={data.url} />
              </SwiperSlide>
            )}

            {data.video && (
              <SwiperSlide>
                <img src={getYouTubeThumbnail(data.video)} alt="" />
              </SwiperSlide>
            )}
          </Swiper>
          {lightboxVisible && (
            <div className="lightbox-overlay" onClick={closeLightbox}>
              <div className="lightbox-content">
                <iframe
                  width="100%"
                  height="100%"
                  src={data.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
        <div className="right">
          <h3>{data.announcementname}</h3>
          <div className="top">
            <p>
              <span>Elan nömrəsi:</span>5535131{" "}
            </p>
            <div>
              <img
                src={require("../../images/home/watchgray.svg").default}
                alt="watch"
              />
              <p>Vaxt: {data.time}</p>
            </div>
            <div>
              <img
                src={require("../../images/home/eyesharp.svg").default}
                alt="watch"
              />
              <p>2542313</p>
            </div>
          </div>
          <div className="blue-area">
            <div className="flex">
              <div>
                <h4>Satıcı</h4>
                <p>{data.name}</p>
              </div>
              <div>
                <button>Satıcıya qiymət təklif et</button>
              </div>
            </div>
            <div className="flex2">
              <div>
                <img
                  src={require("../../images/home/tel.svg").default}
                  alt="watch"
                />
                <p>{data.phonenumber}</p>
              </div>
              <div>
                <img
                  src={require("../../images/home/wp-icon.svg").default}
                  alt="watch"
                />
                <p>{data.wpnumber}</p>
              </div>
            </div>
          </div>
          <div className="btn-container">
          <button onClick={(event) => handleButtonClick(event, data.id)}>
            <p>Elanı irəli çək</p>
          </button>
          <button onClick={(event) => handleButtonClick(event, data.id)}>
            <img
              src={require("../../images/home/crown-icon.svg").default}
              alt="watch"
            />
            <p>Elanı VİP et</p>
          </button>
          <button onClick={(event) => handleButtonClick(event, data.id)}>
            <img
              src={require("../../images/home/diamond-icon.svg").default}
              alt="watch"
            />
            <p>Elanı Premium et</p>
          </button>
          </div>
          <div className="type-select">
            <button
              onClick={() => handleModeChange("email")}
              className={mode === "email" ? "active" : ""}
            >
              Məhsul haqqında
              {mode === "email"}
            </button>
            <button
              onClick={() => handleModeChange("mobile")}
              className={mode === "mobile" ? "active" : ""}
            >
              Özəllikləri
              {mode === "mobile"}
            </button>
          </div>
          {mode === "email" ? (
            <React.Fragment>
              <p className="p-text">{data.information}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="container-bottom">
                <p>Şəhər:</p>
                <p>{data.city}</p>
              </div>
              <div className="container-bottom">
                <p>Vəziyyəti:</p>
                <p>{data.condution}</p>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
      {/* <Vip data={data} /> */}
    </section>
  );
};

export default AdInside;
