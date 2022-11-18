import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-lg-2 col-md-6 col-12">
          <a href="#Our-Services">Our services</a>
          <br />
          <a href="#Why-Us">Why Us</a>
          <br />
          <a href="#testimonial">Testimonial</a>
          <br />
          <a href="#FAQ">FAQ</a>
          <br />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <p>Connect with us</p>
          <img src="./images/icon_facebook.png" alt="" />
          <img src="./images/icon_instagram.png" alt="" />
          <img src="./images/icon_twitter.png" alt="" />
          <img src="./images/icon_mail.png" alt="" />
          <img src="./images/icon_twitch.png" alt="" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <p>Copyright Binar 2022</p>
          <img src="./images/logo.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
