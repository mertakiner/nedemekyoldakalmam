import React from "react";
import logo from "../files/cekici-lg2.png";
import Capa_1 from "../files/tow-truck.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header fixed-top" style={{ margin: "0px" }}>
      <div className="h-100 row">
        <div className="col-sm-2 w-100 align-self-center">
        
          <img src={logo} class="rounded mx-auto d-block" alt="..." />
          <p className="text-nowrap h3 text-center bighide">NE DEMEK YOLDA KALMAM...</p>
        </div>

        <div className="col-sm align-self-center hide">
          <p className="text-nowrap h3 text-left">BURSA OTO ÇEKİCİ</p>
          <p className="text-nowrap h6 text-center">
            Güvenli ve Uygun Fiyatlı Hizmet
          </p>
        </div>
        <div className="col-sm align-self-center hide">
          <p className="text-nowrap h2 text-right">
            <a
              href="tel:05412661616"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              (0541) 266 16 16
            </a>
          </p>
        </div>
        <div className="col-sm-2 hide">
          <img src={Capa_1} class="rounded mx-auto d-block" alt="..." />
        </div>
      </div>
    </div>
  );
}
