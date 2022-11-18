import React from "react";

function TestimonialSection() {
  return (
    <section id="testimonial" className="container">
      <br />
      <br />
      <br />
      <div className="">
        <h3 className="text-center">Testimonial</h3>
        <p className="text-center">
          Berbagai review positif dari para pelanggan kami
        </p>
        <div
          id="carouselExampleControls"
          className="carousel slide mx-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active bg-aliceblue">
              <div className="row mx-4 my-5">
                <div className="col-lg-2 m-auto">
                  <img
                    src="./images/photo1-testimoni.png"
                    className="d-block testimonial-img m-auto"
                    alt="Person"
                  />
                </div>
                <div className="col-lg-10">
                  <img
                    src="./images/Rate.png"
                    className="testimonial-rating"
                    alt="Rating"
                  />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item bg-aliceblue">
              <div className="row mx-4 my-5">
                <div className="col-lg-2 m-auto">
                  <img
                    src="./images/photo2-testimoni.png"
                    className="d-block testimonial-img m-auto"
                    alt="Person"
                  />
                </div>
                <div className="col-lg-10">
                  <img
                    src="./images/Rate.png"
                    className="testimonial-rating"
                    alt="Rating"
                  />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod””
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item bg-aliceblue">
              <div className="row mx-4 my-5">
                <div className="col-lg-2 m-auto">
                  <img
                    src="./images/photo1-testimoni.png"
                    className="d-block testimonial-img m-auto"
                    alt="Person"
                  />
                </div>
                <div className="col-lg-10">
                  <img
                    src="./images/Rate.png"
                    className="testimonial-rating"
                    alt="Rating"
                  />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod””
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              className="testimonial-media"
            >
              &#8249;
            </a>
            <a
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              className="testimonial-media"
            >
              &#8250;
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}

export default TestimonialSection;
