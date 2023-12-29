import React, { useState } from "react";
import "./index.css"
const Recent = ({ data }) => {
  const [sortOption, setSortOption] = useState("Standart");

  // if (!data || !data.announcements) {
  //   return <p>Data alınmadı</p>;
  // }

  const announcements = data;

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredAnnouncements = announcements.filter((item) => {
    if (sortOption === "En yeniler") {
      return item.new === "true";
    } else {
      return true;
    }
  });

  const sortedAnnouncements = filteredAnnouncements.sort((a, b) => {
    if (sortOption === "Bahalıdan ucuza") {
      return parseFloat(b.qiymet) - parseFloat(a.qiymet);
    } else if (sortOption === "Ucuzdan bahalıya") {
      return parseFloat(a.qiymet) - parseFloat(b.qiymet);
    } else {
      return 0;
    }
  });

  return (
    <section className="premium">
      <div className="container-premium2">
        <h2 className="h2-premium">Ən son elanlar</h2>
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
              src={require("../../../images/home/crown.svg").default}
              alt="category"
            />
            <p className="p1">Elanını Premium et</p>
            <p className="p2">
              3 man<span className="span1"> / 5gün</span>
            </p>
            <button className="btn-premium">Premium et</button>
          </div>
        </div>
        {sortedAnnouncements.map((item) => (
          <div className="card" key={item.id}>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='allsee'>Daha çox elan göstər</button>
    </section>
  )
}

export default Recent;