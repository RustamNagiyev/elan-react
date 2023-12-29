import React from "react";
import "./index.css";
import NewAnnouncement from "../../NewAnnouncement";

export default function EditHead() {
  return (
    <section className="edit-head">
      <h2>Elanı redaktə edin</h2>
      <div className="container-edit">
        <div>
      <h3>Elanın statusu:</h3>
      <p className="p-con">&#8901; Yoxlanılır</p> 
      </div>
      <div>
        <h3>Elanın nömrəsi:</h3>
        <p>322135</p>
        </div>
        <div>
        <h3>Ən son yeniləndi:</h3>
        <p>26.03.22</p>
        </div>
      </div>
      <NewAnnouncement/>
      
    </section>
  );
}
