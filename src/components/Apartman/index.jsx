import React, { useEffect, useState } from "react";
import "./index.css";
import Vip from "../Home/Vip";
import { Link, useLocation } from "react-router-dom";
import Inside from "../Inside";

export default function Apartman({ data }) {
  const { search } = useLocation();
  const [header, setHeader] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [announcement, sortedAnnouncements] = useState([]);
  const [sortOption, setSortOption] = useState("Standart");

  useEffect(() => {
    setHeader(() => {
      return search.startsWith("?q=")
        ? "Axtarış"
        : decodeURIComponent(
            search.slice(search.indexOf("=") + 1, search.indexOf("&"))
          );
    });

    let url = "http://localhost:3000/announces";

    if (search.startsWith("?q=")) {
      url += search;
    } else if (search.startsWith("?category=") || search.startsWith("?subcategory=")) {
      url += `?category=${decodeURIComponent(
        search.slice(search.indexOf("=") + 1, search.indexOf("&"))
      )}`;
    }


    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubCategories([
          ...new Set(data.map(({ subcategory }) => subcategory)),
        ]);
      });

    console.log(search);

    fetch("http://localhost:3000/announces" + decodeURIComponent(search))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        sortedAnnouncements(data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };


  return (
    <section className="apartman">
      <div className="container-apart">
        <h2>{header}</h2>
        <p>
          Elan sayı:<span>5535131</span>
        </p>
      </div>
      <div className="container-apart-second">
        <div className="flexable-apart">
          
            {subCategories.map((cat, index) => (
              <div key={index}>
                <Link to={`/apartman?subcategory=${cat}&`}>{cat}</Link>
              </div>
            ))}
          
        </div>
        <div className="bottom">
          <input
            className="search-apartman"
            placeholder="Şəhər seçin"
            type="search"
          />
          <img
            className="search-icon"
            src={require("../../images/home/search-icon.svg").default}
            alt="search-img"
          />
          <select className="select-apartman" value={sortOption} onChange={handleSortChange}>
            <option>Bahadan ucuza</option>
            <option>Ucuzdan bahalıya</option>
          </select>
          <select className="select-apartman">
            <option>Yeni</option>
            <option>Işlənmiş</option>
          </select>
        </div>
      </div>
      <Vip data={announcement} />
      <Inside data={announcement} />
    </section>
  );
}
