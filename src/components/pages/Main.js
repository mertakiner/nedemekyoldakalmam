import React from "react";
import FT from "../files/fast-time.svg";
import PH from "../files/phone-call.svg";
import DE from "../files/deal.svg";
import CO from "../files/comment.svg";
import Header from "../files/header.jpeg";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <div className="container one">
        <div className="card bg-dark text-white">
          <img src={Header} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
        {/* <div class="container-fluid no-padding px-0">
          <div class="row">
            <div class="col-md-12">
              <img src={Header} alt="placeholder 960" class="img-responsive" />
            </div>
          </div>
        </div> */}
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
                    (0541) 266 16 16
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

      <div classNameName="container three">Image</div>

      <div className="container four">
        <div className="row">
          <div className="col">
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
                    style={{ padding: "5px", margin: "0px" }}
                  >
                    Gece yarısı aracımız bozuldu ve yolda kaldık. Yardım ekibi
                    çok kısa sürede yanımıza geldi ve aracımızı çektiler.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
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
                    style={{ padding: "5px", margin: "0px" }}
                  >
                    Yolda kalmam diyenlerden olarak maalesef yolda kaldık. İyi
                    ki çekici servisini aradık ve kısa sürede aracımızı servise
                    kadar güvenle götürdüler.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
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
                    style={{ padding: "5px", margin: "0px" }}
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
