import axios from "axios";
import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";


const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [favoriteStates, setFavoriteStates] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  
  const handleCardClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  
  const handleFavoriteClick = (event, index, itemId) => {
    event.preventDefault();

    const updatedFavoriteStates = [...favoriteStates];
    updatedFavoriteStates[index] = !updatedFavoriteStates[index];

    const updatedWishlistItems = [...wishlistItems];
    updatedWishlistItems.splice(index, 1);

    setFavoriteStates(updatedFavoriteStates);
    setWishlistItems(updatedWishlistItems);

    const updatedWishlistItemIds = updatedWishlistItems.map((item) => item.id);
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(updatedWishlistItemIds)
    );
  };
  useEffect(() => {
    const wishlistProducts =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];

    if (wishlistProducts.length) {
      const prodIds = `id=${wishlistProducts}`;
      // const prodIds = wishlistProducts.map((id) => `id=${id}&`);
      axios
        .get("http://localhost:5050/announcements?" + prodIds)
        .then(({ data }) => {
          setWishlistItems(data.announcements);
          setFavoriteStates(Array(data.announcements.length).fill(false));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <h2>Seçilənlər</h2>
      <div className="fav-container">
        {wishlistItems.map((item, index) => (
          <NavLink to={`/adinside/${item.id}`} key={item.id}>
            <div className="card" onClick={() => handleCardClick(item.id)}>
              <div className="card2">
                <div className="flip-box-front">
                  <img className="img-premium" src={item.url} alt="elan" />
                  <div className="card-bottom">
                    <h3 className="h3-premium">{item.announcementname}</h3>
                    <p className="p-premium">Yer: {item.city}</p>
                    <p className="p-premium">Vaxt: {item.time}</p>
                    <p className="price-premium">Qiymət: {item.price}</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <h2>Daha ərtaflı</h2>
                  <img
                    src={
                      favoriteStates[index]
                        ? require("../../../images/home/heart-primary.svg").default
                        : require("../../../images/home/heart-red.svg").default
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
        ))}
      </div>
    </>
  );
};

export default WishList;
