import React from 'react'
import "./index.css"
import NewAnnouncement from '../../NewAnnouncement'

export default function NewAnnouncementHead() {
  return (
    <section className='new-announcement-head'>
      <h2 className="h2-first">Yeni elan yarat</h2>
      <div className="rules">
        <h3>Qaydalarımız</h3>
        <ol>
          <li>Eyni elanı bir neçə dəfə təqdim etməyin</li>
          <li>
            “Şəkil” lərinizdə telefon nömrələri, e-mail və ya sayt ünvanları
            qeyd etməyin. Onları “şəxsi məlumatlar” bölməsində qeyd edə
            bilərsiniz
          </li>
          <li>
            “Elanın adı” bölməsində qiyməti daxil etməyin. Qiymət üçün sizə
            ayırdığımız bölməmiz var
          </li>
          <li>Qadağan olunmuş məhsulların siyahısı</li>
          <li>Saytın tam qaydaları</li>
        </ol>
      </div>
      <NewAnnouncement/>
    </section>
  )
}
