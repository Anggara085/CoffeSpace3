import React, { Fragment } from "react";
import Menu1 from "./Menu1";

function Index() {
  return (
    <Fragment>
      <>
        <header>
          <div class="header-area header-transparent" />
          <Menu1 />
        </header>
        <main>
          <section className="slider-area ">
            <div className="slider-active">
              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12">
                      <div className="hero__caption">
                        <h1 data-animation="fadeInLeft" data-delay="0.2s">
                          Coffe Space
                          <br /> platform
                        </h1>
                        <p data-animation="fadeInLeft" data-delay="0.4s">
                          Build skills with courses, certificates, and degrees
                          online from world-class universities and companies
                        </p>
                        <a
                          href="register.html"
                          className="btn hero-btn"
                          data-animation="fadeInLeft"
                          data-delay="0.7s"
                        >
                          Join for Free
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="services-area">
            <div className="container">
              <div className="row justify-content-sm-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon1.svg" alt="" />
                    </div>
                    <div className="features-caption">
                      <h3>Edukasi</h3>
                      <p>
                        Mendapatkan informasi terkini dan berguna dalam
                        perjalanan mereka untuk memahami dunia kopi lebih baik.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon2.svg" alt="" />
                    </div>
                    <div className="features-caption">
                      <h3>Pelatihan Barista</h3>
                      <p>
                        Belajar dari para ahli industri kopi dalam pelatihan
                        intensif kami lebih baik.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon3.svg" alt="" />
                    </div>
                    <div className="features-caption">
                      <h3>Rekomendasi & Resep Kreatif</h3>
                      <p>
                        Temukan keajaiban resep kopi di coffee space dengan
                        rekomendasi kami untuk resep kopi kreatif.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-area section-padding40 fix">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="section-tittle text-center mb-55">
                    <h2>Coffe Space untuk Berita Kopi Terkini</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="properties properties2 mb-30">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img
                            src="assets/img/Foto Kopi/Americano.jpeg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <h3>
                          <a href="#">
                            “Racikan Kopi Campur Madu Lebih Menyehatkan? Ini
                            Faktanya”
                          </a>
                        </h3>
                        <p>
                          Kopi bisa diracik menggunakan pemanis tambahan, kalau
                          ingin yang alami bisa menambahkan madu. Ternyata,
                          racikan kopi dan madu lebih menyehatkan.
                        </p>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="restaurant-name">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half" />
                            </div>
                            <p>
                              <span>(4.5)</span> based on 120
                            </p>
                          </div>
                          <div className="price">
                            <span>$135</span>
                          </div>
                        </div>
                        <a href="#" className="border-btn border-btn2">
                          Jelajahi Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="properties properties2 mb-30">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img
                            src="assets/img/Foto Kopi/capuccino.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <h3>
                          <a href="#">
                            Catat! Ini 5 Racikan Kopi Kekinian yang Disebut
                            Menyehatkan
                          </a>
                        </h3>
                        <p>
                          Selama beberapa tahun terakhir muncul berbagai tren
                          racikan kopi. Racikan kopi ini ada yang dicampur
                          dengan jamur sampai mentega tawar.
                        </p>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="restaurant-name">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half" />
                            </div>
                            <p>
                              <span>(4.5)</span> based on 120
                            </p>
                          </div>
                          <div className="price">
                            <span>$135</span>
                          </div>
                        </div>
                        <a href="#" className="border-btn border-btn2">
                          Jelajahi Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="properties properties2 mb-30">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img src="assets/img/Foto Kopi/latte.jpg" alt="" />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <h3>
                          <a href="#">
                            Cocok Diminum Pagi Hari, Ini 8 Khasiat Kopi Pahit
                            Bagi Kesehatan
                          </a>
                        </h3>
                        <p>
                          Selain membangkitkan semangat di pagi hari, minum kopi
                          pahit nyatanya menyimpan banyak khasiat untuk
                          kesehatan. Tak heran jika rutinitas yang satu ini
                          digemari banyak orang.
                        </p>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="restaurant-name">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half" />
                            </div>
                            <p>
                              <span>(4.5)</span> based on 120
                            </p>
                          </div>
                          <div className="price">
                            <span>$135</span>
                          </div>
                        </div>
                        <a href="#" className="border-btn border-btn2">
                          Jelajahi Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="section-tittle text-center mt-40">
                    <a href="#" className="border-btn">
                      Load More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-wrappper footer-bg">
            <div className="footer-area footer-padding">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="single-footer-caption mb-30">
                        <div className="footer-logo mb-25">
                          <a href="index.html">
                            <img
                              src="assets/img/logo/logo2_footer.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="footer-tittle">
                          <div className="footer-pera">
                            <p>
                              The automated process starts as soon as your
                              clothes go into the machine.
                            </p>
                          </div>
                        </div>
                        <div className="footer-social">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="https://bit.ly/sai4ull">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Our solutions</h4>
                        <ul>
                          <li>
                            <a href="#">Design &amp; creatives</a>
                          </li>
                          <li>
                            <a href="#">Telecommunication</a>
                          </li>
                          <li>
                            <a href="#">Restaurant</a>
                          </li>
                          <li>
                            <a href="#">Programing</a>
                          </li>
                          <li>
                            <a href="#">Architecture</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Support</h4>
                        <ul>
                          <li>
                            <a href="#">Design &amp; creatives</a>
                          </li>
                          <li>
                            <a href="#">Telecommunication</a>
                          </li>
                          <li>
                            <a href="#">Restaurant</a>
                          </li>
                          <li>
                            <a href="#">Programing</a>
                          </li>
                          <li>
                            <a href="#">Architecture</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Company</h4>
                        <ul>
                          <li>
                            <a href="#">Design &amp; creatives</a>
                          </li>
                          <li>
                            <a href="#">Telecommunication</a>
                          </li>
                          <li>
                            <a href="#">Restaurant</a>
                          </li>
                          <li>
                            <a href="#">Programing</a>
                          </li>
                          <li>
                            <a href="#">Architecture</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-area">
              <div className="container">
                <div className="footer-border">
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-12 ">
                      <div className="footer-copy-right text-center">
                        <p>
                          Copyright © All rights reserved | This template is
                          made with{" "}
                          <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                          <a href="https://colorlib.com" target="_blank">
                            Colorlib
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </Fragment>
  );
}

export default Index;
