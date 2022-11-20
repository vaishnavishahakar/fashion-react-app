import React from "react";
import Slider1 from "../../Assets/img/Group_69.png"
import Slider2 from "../../Assets/img/Group_19.png"
import brand from "../../Assets/img/Brands.png"
import group78 from "../../Assets/img/Group 78.png"
import Rectangle20 from "../../Assets/img/Rectangle 20.png"
import Rectangle21 from "../../Assets/img/Rectangle 21.png"
import Rectangle22 from "../../Assets/img/Rectangle 22.png"
import Arrow1 from "../../Assets/img/Arrow 1.png"
import "./homepage.css";

const HomePage = () => {
  return (
    <div >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section id="brand" className="brand-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="logo bg-warning">
                <img src={brand} alt="" width="100%"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section id="arrivals" className="arrivals section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-left pb-3 pb-sm-5">
                <img src={group78} className="text-img"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-12 col-md-12 col-lg-4">
            <div className="cards text-left bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img src={Rectangle20} alt="" className="img-fluid"></img>
                  <div className="container">
                    <h3 className="card-title">Hoodies & Sweetshirt</h3>
                    <p className="lead">Explore Now!</p>
                    <button className="btn text-dark"><img src={Arrow1} alt=""></img></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="cards text-left bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img src={Rectangle21} alt="" className="img-fluid"></img>
                  <div className="container">
                    <h3 className="card-title">Coats & Parkas</h3>
                    <p className="lead">Explore Now!</p>
                    <button className="btn text-dark"><img src={Arrow1} alt=""></img></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="cards text-left bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img src={Rectangle22} alt="" className="img-fluid"></img>
                  <div className="container">
                    <h3 className="card-title">Tees & T-Shirt</h3>
                    <p className="lead">Explore Now!</p>
                    <button className="btn text-dark"><img src={Arrow1} alt=""></img></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-left pb-3 pb-sm-5 ">
              <img src="img/Group 82.png" className="text-img"></img>
            </div>
          </div>
        </div>



        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="cards text-left bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-4">
                  <img src="img/Rectangle 49.png" alt="" className="img-fluid"></img>

                  <div className="container">
                    <h3 className="card-title">Trending on instagram</h3>
                    <p className="lead">Explore Now!</p>
                    <button className="btn text-dark"><img src="img/Arrow 4.png" alt=""></img></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-6">
            <div className="cards text-left bg-white pb-2">
              <div className="card-body text-dark">
                <div className="img-area mb-2">
                  <img src="img/Rectangle 50.png" alt="" className="img-fluid"></img>
                  <div className="container">
                    <h3 className="card-title">All Under $40</h3>
                    <p className="lead">Explore Now!</p>
                    <button className="btn text-dark"><img src="img/Arrow 5.png" alt=""></img></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="download-img">
                        <img src="img/Vouchers.png" width="320%" className="voucher-img"></img>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                        <div className="box-body text-white">
                            <img src="img/Group 64.png" alt="" width="100%" className="join-img"></img>
                        </div>
                </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
};
export default HomePage;
