import React from "react";
import FT from "../files/fast-time.svg";
import PH from "../files/phone-call.svg";
import DE from "../files/deal.svg";
import CO from "../files/comment.svg";
import Header from "../files/header.jpeg";
import cekici1 from "../files/cekici-1.jpeg";
import cekici2 from "../files/cekici-2.jpeg";
import cekici3 from "../files/cekici-3.jpeg";
import cekici4 from "../files/cekici-4.jpeg";
import cekici5 from "../files/cekici-5.jpeg";
import cekici6 from "../files/cekici-6.jpeg";
import "./Main.css";

export default function Main() {
  return (
    <div className="mainBody">
      <div className="container one" style={{ padding: "0px"}}>
        <div className="card bg-dark text-white ">
          <img src={Header} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <p class="card-title-up">Ne demek yolda kalmam...</p>
            <p class="card-text-up">
              Bursa'da yol yardımı alabileceğiniz en profesyonel adres
            </p>
            <p class="card-text-up bighide2">7/24 Yol Yardım</p>
          </div>
        </div>
      </div>

      <div className="container two row" style={{ margin: "0px" }}>
        <div className="col-sm align-self-center" style={{ padding: "0px" }}>
          <div className="card align-self-center" style={{ margin: "0px" }}>
            <div className="row" style={{ margin: "0px" }}>
              <div
                className="col-3 align-self-center"
                style={{ padding: "0px" }}
              >
                <img
                  src={FT}
                  className="rounded mx-auto d-block"
                  alt="..."
                  style={{ padding: "0px" }}
                />
              </div>
              <div
                className="col-9 align-self-center"
                style={{ padding: "0px" }}
              >
                <div
                  className="card-body"
                  style={{ padding: "0px", margin: "0px" }}
                >
                  <h5
                    className="card-title"
                    style={{ padding: "5px", margin: "0px" }}
                  >
                    30 dakika içerisinde yanınızdayız
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm align-self-center" style={{ padding: "0px" }}>
          <div className="card">
            <div className="row" style={{ margin: "0px" }}>
              <div
                className="col-3 align-self-center"
                style={{ padding: "0px" }}
              >
                <img
                  src={PH}
                  className="rounded mx-auto d-block"
                  alt="..."
                  style={{ padding: "0px" }}
                />
              </div>
              <div
                className="col-9 align-self-center"
                style={{ padding: "0px" }}
              >
                <div
                  className="card-body"
                  style={{ padding: "0px", margin: "0px" }}
                >
                  <h5
                    className="card-title"
                    style={{ padding: "5px", margin: "0px" }}
                  >
                    <a
                      href="tel:05412661616"
                      class="buttonX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (0541) 266 16 16
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm align-self-center" style={{ padding: "0px" }}>
          <div className="card">
            <div className="row" style={{ margin: "0px" }}>
              <div
                className="col-3 align-self-center"
                style={{ padding: "0px" }}
              >
                <img
                  src={DE}
                  className="rounded mx-auto d-block"
                  alt="..."
                  style={{ padding: "0px" }}
                />
              </div>
              <div
                className="col-9 align-self-center"
                style={{ padding: "0px" }}
              >
                <div
                  className="card-body"
                  style={{ padding: "0px", margin: "0px" }}
                >
                  <h5
                    className="card-title"
                    style={{ padding: "5px", margin: "0px" }}
                  >
                    Hızlı ve Güvenilir Hizmet
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="container three">
        <div className="row d-flex justify-content-around">
          <div className="cardbody">
            <img src={cekici1} className="card-img" alt="..." />
          </div>
          <div className="cardbody">
            <img src={cekici2} className="card-img" alt="..." />
          </div>
          <div className="cardbody">
            <img src={cekici3} className="card-img" alt="..." />
          </div>
          <div class="w-100"></div>
          <div className="cardbody">
            <img src={cekici4} className="card-img" alt="..." />
          </div>
          <div className="cardbody">
            <img src={cekici5} className="card-img" alt="..." />
          </div>
          <div className="cardbody">
            <img src={cekici6} className="card-img" alt="..." />
          </div>
        </div>
      </div>

      <div className="container four">
        <div className="row d-flex justify-content-around">
          <div className="col-sm">
            <div className="card">
              <div className="row">
                <div className="col-3">
                  <img
                    src={CO}
                    className="rounded mx-auto d-block"
                    alt="..."
                    style={{ padding: "0px" }}
                  />
                </div>
                <div className="col-9">
                  <h6
                    className="card-title"
                    style={{
                      padding: "5px",
                      margin: "0px",
                      textAlign: "left",
                    }}
                  >
                    Gece yarısı aracımız bozuldu ve yolda kaldık. Yardım ekibi
                    çok kısa sürede yanımıza geldi ve aracımızı çektiler.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <div className="row">
                <div className="col-3">
                  <img
                    src={CO}
                    className="rounded mx-auto d-block"
                    alt="..."
                    style={{ padding: "0px" }}
                  />
                </div>
                <div className="col-9">
                  <h6
                    className="card-title"
                    style={{
                      padding: "5px",
                      margin: "0px",
                      textAlign: "left",
                    }}
                  >
                    Yolda kalmam diyenlerden olarak maalesef yolda kaldık. İyi
                    ki çekici servisini aradık ve kısa sürede aracımızı servise
                    kadar güvenle götürdüler.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <div className="row">
                <div className="col-3">
                  <img
                    src={CO}
                    className="rounded mx-auto d-block"
                    alt="..."
                    style={{ padding: "0px" }}
                  />
                </div>
                <div className="col-9">
                  <h6
                    className="card-title"
                    style={{
                      padding: "5px",
                      margin: "0px",
                      textAlign: "left",
                    }}
                  >
                    Bursa’da uygun fiyatlı ve kaliteli hizmet veren az sayıdaki
                    çekiciden birisi. Teşekkür ederiz.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
