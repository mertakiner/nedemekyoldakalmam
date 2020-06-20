import React from "react";
import FT from "../files/fast-time.svg";
import PH from "../files/phone-call.svg";
import DE from "../files/deal.svg";
import CO from "../files/comment.svg";
import './Main.css';

export default function Main() {
  return (
    <div>
      <div className="container one">One</div>

      <div className="container two">
        <div className="row" >
          <div className="col-sm align-self-center" style={{padding: "0px"}}>
            <div className="card mb-3 align-self-center" style={{margin: "0px"}}>
                    <div className="row" style={{margin: "0px"}}>
                            <div className="col-3 align-self-center" style={{padding: "0px"}}>
                                <img src={FT} className="rounded mx-auto d-block" alt="..." style={{padding: "0px"}} />
                            </div>
                        <div className="col-9 align-self-center" style={{padding: "0px"}} >
                            <div className="card-body" style={{padding: "0px", margin: "0px"}}>
                                <h5 className="card-title" style={{padding: "5px", margin: "0px"}} >30 dakika içerisinde yanınızdayız</h5>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
          <div className="col-sm align-self-center" style={{padding: "0px"}}>
            <div className="card mb-3" >
                    <div className="row" style={{margin: "0px"}}>
                            <div className="col-3 align-self-center" style={{padding: "0px"}}>
                                <img src={PH} className="rounded mx-auto d-block" alt="..." style={{padding: "0px"}} />
                            </div>
                        <div className="col-9 align-self-center" style={{padding: "0px"}} >
                            <div className="card-body" style={{padding: "0px", margin: "0px"}}>
                                <h5 className="card-title" style={{padding: "5px", margin: "0px"}}>(0541) 266 16 16</h5>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
          <div className="col-sm align-self-center" style={{padding: "0px"}}>
            <div className="card mb-3" >
                    <div className="row" style={{margin: "0px"}}>
                            <div className="col-3 align-self-center" style={{padding: "0px"}}>
                                <img src={DE} className="rounded mx-auto d-block" alt="..." style={{padding: "0px"}} />
                            </div>
                        <div className="col-9 align-self-center" style={{padding: "0px"}} >
                            <div className="card-body" style={{padding: "0px", margin: "0px"}}>
                                <h5 className="card-title" style={{padding: "5px", margin: "0px"}}>Hızlı ve Güvenilir Hizmet</h5>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="container three">Image</div>

      <div className="container four">
        <div className="row">
            <div className="col"><div className="card"><div className="row">
                <div className="col-3">
                   <img src={CO} className="rounded mx-auto d-block" alt="..." style={{padding: "0px"}} /> 
                </div>
                <div className="col-9">
                    <h6 className="card-title" style={{padding: "5px", margin: "0px"}}>Gece yarısı aracımız bozuldu ve yolda kaldık. Yardım ekibi çok kısa sürede yanımıza geldi ve aracımızı çektiler.</h6>
                </div>
            </div></div></div>
            <div className="col"><div className="card"><div className="row">
            <div className="col-3">
                   <img src={CO} className="rounded mx-auto d-block" alt="..." style={{padding: "0px"}} /> 
                </div>
                <div className="col-9">
                    <h6 className="card-title" style={{padding: "5px", margin: "0px"}}>Yolda kalmam diyenlerden olarak maalesef yolda kaldık. İyi ki çekici servisini aradık ve kısa sürede aracımızı servise kadar güvenle götürdüler.</h6>
                </div>
            </div></div></div>
            <div className="col"><div className="card"><div className="row">
            <div className="col-3">
                   <img src={CO} className="rounded mx-auto d-block" alt="..." style={{padding: "0px"}} /> 
                </div>
                <div className="col-9">
                    <h6 className="card-title" style={{padding: "5px", margin: "0px"}}>Bursa’da uygun fiyatlı ve kaliteli hizmet veren az sayıdaki çekiciden birisi. Teşekkür ederiz.</h6>
                </div>
            </div></div></div>
        </div>
      </div>
    </div>
  );
}
