import React from "react";
import PC from "../files/phone-calle.svg";
import WA from "../files/whatsapp.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="containers two row fixed-bottom" style={{ margin: "0px" }}>
        <div className="col-sm align-self-center" style={{ padding: "0px" }}>
          <div
            className="cardfooter align-self-center"
            style={{ margin: "0px" }}
          >
            <div className="row" style={{ margin: "0px" }}>
              <div
                className="col-3 align-self-center"
                style={{ padding: "0px" }}
              >
                <img
                  src={WA}
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
                    style={{ padding: "5px", margin: "0px", color: "black" }}
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=905058245188&text=Deneme. Merhaba yolda kalmam dedim ama yolda kaldım."
                      class="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp Yardım
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm align-self-center" style={{ padding: "0px" }}>
          <div className="cardfooter">
            <div className="row" style={{ margin: "0px" }}>
              <div
                className="col-3 align-self-center"
                style={{ padding: "0px" }}
              ></div>
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
                    style={{
                      padding: "5px",
                      margin: "0px",
                      color: "black",
                    }}
                  >
                    <a
                      href="tel:05412661616"
                      class="button"
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
          <div className="cardfooter">
            <div className="row" style={{ margin: "0px" }}>
              <div
                className="col-3 align-self-center"
                style={{ padding: "0px" }}
              >
                <img
                  src={PC}
                  className="rounded mx-auto d-block"
                  alt="..."
                  style={{
                    padding: "0px",
                  }}
                />
              </div>
              <div
                className="col-9 align-self-center"
                style={{ padding: "0px" }}
              >
                <div
                  className="cardfooter"
                  style={{ padding: "0px", margin: "0px" }}
                >
                  <h5
                    className="card-title"
                    style={{
                      padding: "5px",
                      margin: "0px",
                    }}
                  >
                    <a
                      href="tel:05412661616"
                      class="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hemen Ara
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
