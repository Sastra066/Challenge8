import React from "react";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <div>
      <section className="main-section">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-6 main">
            <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className="button-28" role="button">
              <Link to="/Cars" style={{color: "black", textDecoration: "none"}}>Mulai Sewa Mobil</Link>
            </button>
          </div>
          <div className="col-lg-6 car">
            <img className="bg" src="./images/bg.png" alt="" />
            <img
              className="img-car"
              src="./images/Mercedes Car EQC 300kW Edition - 900x598 1.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainSection;
