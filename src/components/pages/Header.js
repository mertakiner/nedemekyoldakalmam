import React from 'react';
import logo from '../files/cekici-lg.png';
import Capa_1 from '../files/tow-truck.svg';
import './Header.css';

export default function Header() {
    return (
<div className="header container">
  <div className="h-100 row">
    <div className="col-2 w-100 align-self-center">
        <img src={logo} class="rounded mx-auto d-block" alt="..." />
    </div>
    <div className="col align-self-center">
        <p className="text-nowrap h3 text-left">BURSA OTO ÇEKİCİ</p>
        <p className="text-nowrap h6 text-center">Güvenli ve Uygun Fiyatlı Hizmet</p>
    </div>
    <div className="col align-self-center">
        <p className="text-nowrap h2 text-right">0541 266 16 16</p>
    </div>
    <div className="col-2">
        <img src={Capa_1} class="rounded mx-auto d-block" alt="..." />
    </div>
  </div>
</div>
    )
}