import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Inside = ({ data, title, selectedCategory, selectCategory }) => {
  const [favoriteStates, setFavoriteStates] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [sortOption, setSortOption] = useState("Standart");
  const [showAllData, setShowAllData] = useState(false); // Track whether to show all data
  const numberOfCardsToShow = 14;

  useEffect(() => {
    setFavoriteStates(JSON.parse(localStorage.getItem("wishlistItems")) || []);
  }, [selectedCategory]);

  const handleFavoriteClick = (event, index, itemId) => {
    event.preventDefault();

    const itemExist = favoriteStates.includes(itemId);

    if (itemExist) {
      const updatedStates = favoriteStates.filter((id) => id !== itemId);
      setFavoriteStates(updatedStates);
      localStorage.setItem("wishlistItems", JSON.stringify(updatedStates));
    } else {
      setFavoriteStates((prev) => [...prev, itemId]);
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify([...favoriteStates, itemId])
      );
    }
  };

  const handleCardClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleShowAllData = () => {
    setShowAllData((prevShowAllData) => !prevShowAllData);
  };

  const announcements = data;

  const handleCategoryChange = (category) => {
    selectCategory(category);
    setSelectedItemId(null);
  };

  const filteredAnnouncements = data.filter((item) => {
    return sortOption !== "En yeniler" || item.new === "true";
  });

  const sortedAnnouncements = filteredAnnouncements.sort((a, b) => {
    if (sortOption === "Bahalıdan ucuza") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sortOption === "Ucuzdan bahalıya") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else {
      return 0;
    }
  });

  // Slice the sortedAnnouncements array based on whether to show all data or not
  const slicedAnnouncements = showAllData
    ? sortedAnnouncements
    : sortedAnnouncements.slice(0, numberOfCardsToShow);

  return (
    <section className="inside">
      <div className="container-premium2">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="Standart">Standart</option>
          <option value="En yeniler">En yeniler</option>
          <option value="Bahalıdan ucuza">Bahalıdan ucuza</option>
          <option value="Ucuzdan bahalıya">Ucuzdan bahalıya</option>
        </select>
      </div>

      <div className="container-premium">
        <div className="card">
          <div className="card3">
            <img
              className="img-crown"
              src={require("../../images/home/crown.svg").default}
              alt="category"
            />
            <p className="p1">Elanını Premium et</p>
            <p className="p2">
              3 man<span className="span1"> / 5gün</span>
            </p>
            <button className="btn-premium">Premium et</button>
          </div>
        </div>
        {slicedAnnouncements.map((item, index) => {
          const img =
            Array.isArray(item.url) &&
            require(`../../images/home/${item.url[0]}`);
          if (selectedCategory && item.category !== selectedCategory) {
            return null;
          }
          return (
            <NavLink to={`/adinside/${item.id}`} key={item.id}>
              <div className="card" onClick={() => handleCardClick(item.id)}>
                <div className="card2">
                  <div className="flip-box-front">
                    <img
                      className="img-premium"
                      src={(Array.isArray(item.url) && img) || item.url}
                      alt="elan"
                    />
                    <div className="card-bottom">
                      <h3 className="h3-premium">{item.announcementname}</h3>
                      <p className="p-premium">Yer: {item.city}</p>
                      <p className="p-premium">Vaxt: {item.time}</p>
                      <div>
                        <p className="price-premium">Qiymət: {item.price}</p>
                        <img
                          src={
                            require("../../images/home/manaticon1.svg").default
                          }
                          alt="watch"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <h2>Daha ərtaflı</h2>
                    <img
                      src={
                        favoriteStates.includes(item.id)
                          ? require("../../images/home/heart-red.svg").default
                          : require("../../images/home/heart-primary.svg")
                              .default
                      }
                      alt="fav"
                      onClick={(event) =>
                        handleFavoriteClick(event, index, item.id)
                      }
                    />
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>

      <button className="allsee" onClick={() => handleShowAllData()}>
        {showAllData ? "Gizlə" : `Elanların hamısını göstər`}
      </button>
    </section>
  );
};
export default Inside;
