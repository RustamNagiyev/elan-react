import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./index.css";

const Elanlarim = () => {
  const navigate = useNavigate();
  const [myAnnouncements, setMyAnnouncements] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all"); // Default filter is "all"
  const [typeFilter, setTypeFilter] = useState("all"); // Default filter is "all"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/announces");

        const filteredAnnouncements = response.data.filter(
          (announcement) => announcement.my === true
        );
        setMyAnnouncements(filteredAnnouncements);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (itemId) => {
    setSelectedItemId(itemId);
  };


  const handleEditClick = (event) => {
    event.preventDefault();
    navigate('/edit-head')
  }

  const handleFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const filterAnnouncements = () => {
    let filteredAnnouncements = myAnnouncements;
  
    // Apply status filter
    switch (statusFilter) {
      case "aktiv":
        filteredAnnouncements = filteredAnnouncements.filter(
          (announcement) => announcement.status === "aktiv"
        );
        break;
      case "vaxti-bitib":
        filteredAnnouncements = filteredAnnouncements.filter(
          (announcement) => announcement.status === "vaxtı bitib"
        );
        break;
      case "yoxlanisdadir":
        filteredAnnouncements = filteredAnnouncements.filter(
          (announcement) => announcement.status === "yoxlanılır"
        );
        break;
      case "legv-edilib":
        filteredAnnouncements = filteredAnnouncements.filter(
          (announcement) => announcement.status === "ləğv edildi"
        );
        break;
      default:
        break;
    }
  
    // Apply type filter
    switch (typeFilter) {
      case "all":
        filteredAnnouncements = filteredAnnouncements.filter(
          (announcement) => announcement.my === true
        );
        break;
      case "vip":
        filteredAnnouncements = filteredAnnouncements.filter(
          (announcement) => announcement.vip === true
        );
        break;
      case "premium":
        filteredAnnouncements = filteredAnnouncements.filter(
          (announcement) => announcement.premium === true
        );
        break;
      default:
        break;
    }
  
    return filteredAnnouncements;
  };
  

  const handleFilterClick = (filter, filterType) => {
    if (filterType === 'status') {
      setStatusFilter(filter);
    } else if (filterType === 'type') {
      setTypeFilter(filter);
    }
  };
  console.log(myAnnouncements);
  return (
    <section className="my">
      <h2>Elanlarım</h2>
      <div className="myAnnouncement">
      <button>
      <select onChange={handleFilterChange}>
          <option value="all">Bütün elanlar</option>
          <option value="premium">Yalnız Premium elanlar</option>
          <option value="vip">Yalnız VİP elanlar</option>
        </select>
        </button>
        <button onClick={() => handleFilterClick("aktiv", 'status')}>Aktivdir</button>
        <button onClick={() => handleFilterClick("vaxti-bitib", 'status')}>
          Vaxtı bitib
        </button>
        <button onClick={() => handleFilterClick("yoxlanisdadir", 'status')}>
          Yoxlanışdadır
        </button>
        <button onClick={() => handleFilterClick("legv-edilib", 'status')}>
          Ləğv edilib
        </button>
      </div>
      <div className="container-my">
      {filterAnnouncements().map((announcement) => (
          
             <NavLink to={`/adinside/${announcement.id}`} key={announcement.id}>
              <div className="card" onClick={() => handleCardClick(announcement.id)}>
                <div className="card2">
                  <div className="flip-box-front">
                    <img
                      className="img-premium"
                      src={(Array.isArray(announcement.url) ) || announcement.url}
                      alt="elan"
                    />
                    <div className="card-bottom">
                      <h3 className="h3-premium">{announcement.announcementname}</h3>
                      <p className="p-premium">Yer: {announcement.city}</p>
                      <p className="p-premium">Vaxt: {announcement.time}</p>
                      <div>
                        <p className="price-premium">Qiymət: {announcement.price}</p>
                        <img
                          src={
                            require("../../../../images/home/manaticon1.svg")
                              .default
                          }
                          alt="price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <h2>Daha ərtaflı</h2>
                    <img
                          src={
                            require("../../../../images/home/edit.svg")
                              .default
                          }
                          alt="edit"
                          onClick={(event) =>
                            handleEditClick(event)
                          }
                        />
                  </div>
                </div>
              </div>
            </NavLink>
         
        ))}
        </div>
    </section>
  );
};

export default Elanlarim;
