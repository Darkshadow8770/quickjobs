import '../App.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
     <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container">
              <div class="row align-items-center">
                    <Link to="/" class="col-lg-2 col-4 nom">
                        QuickJobs
                    </Link>
                  <div class="col-lg-6 col-sm-12">
                      <form action="#" class="search">
                          <div class="input-group w-100">
                              <input type="text" class="form-control" placeholder="Rechercher" />
                              <div class="input-group-append">
                                <button class="btn btn-primary" type="submit">
                                  <i class="fa fa-search"></i>
                                </button>
                              </div>
                          </div>
                      </form>
                  </div> 
                  <div class="col-lg-4 col-sm-6 col-12">
                      <div class="widgets-wrap float-md-right">
                          <div class="widget-header icontext">
                              <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                              <div class="text">
                                  <span class="text-muted">Bienvenue!</span>
                                  <div> 
                                      <Link to="SignIn">Se connecter</Link> |  
                                      <Link to="SignUp"> S'enregistrer</Link>
                                  </div>
                              </div>
                          </div>
                      </div> 
                  </div> 
              </div> 
            </div> 
        </section>

        <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div class="container liens">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav">
                {/* <li class="nav-item dropdown">
                  <Link  to="Jobs" class="nav-link">Jobs</Link>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#">Espace employeur</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Espace candidat</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">A propos de nous</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
        
        <section class="section-main bg padding-y">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-9">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="assets/images/2.jpg" class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="assets/images/2.jpg" class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="assets/images/2.jpg" class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>
              </div> 
            </div> 
          </div> 
        </section>
       
        <section class="section-name padding-y-sm">
          <div class="container">
            <header class="section-heading">
                <Link to="SignUp" class="btn btn-outline-primary float-right">Voir tout</Link>
                <h3 class="section-title">Tâches communes</h3>
            </header>
            
            <div class="row">
              <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                          <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$280.00</div>
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$56.00</div> 
                      </figcaption>
                  </div>
              </div>
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div>
                      </figcaption>
                  </div>
              </div>
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$280.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$56.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div> 
                      </figcaption>
                  </div>
              </div>
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$280.00</div>
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$56.00</div> 
                      </figcaption>
                  </div>
              </div>
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div>
                      </figcaption>
                  </div>
              </div>
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$280.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$56.00</div> 
                      </figcaption>
                  </div>
              </div> 
              <div class="col-md-3">
                  <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpeg" /> </a>
                      <figcaption class="info-wrap">
                      <a href="#" class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</a>
                          <div class="price mt-1">$179.00</div> 
                      </figcaption>
                  </div>
              </div> 
            </div>
          </div>
        </section>
      
        <section class="section-name padding-y bg">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                  <h3>Des services rendus dans la securite</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
            </div> 
          </div>
        </section>
        
        
        <footer class="section-footer border-top bg">
        <div class="container">
          <section class="footer-top  padding-y">
            <div class="row">
              <aside class="col-md col-6">
                <h6 class="title">QuickJobs</h6>
                <ul class="list-unstyled">
                  <li> <a href="#">A propos de nous</a></li>
                  <li> <a href="#">Regles et Termes</a></li>
                </ul>
              </aside>
              <aside class="col-md col-6">
                <h6 class="title">Aide</h6>
                <ul class="list-unstyled">
                  <li> <a href="#">Contactez-nous</a></li>
                  <li> <a href="#">Signaler un utilisateur</a></li>
                </ul>
              </aside>
              <aside class="col-md col-6">
                <h6 class="title">Compte</h6>
                <ul class="list-unstyled">
                  <li> <a href="#"> Se connecter </a></li>
                  <li> <a href="#"> S'enregistrer </a></li>
                  <li> <a href="#"> Parametres du compte </a></li>
                </ul>
              </aside>
              <aside class="col-md">
                <h6 class="title">Social</h6>
                <ul class="list-unstyled">
                  <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
                  <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
                  <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
                  <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
                </ul>
              </aside>
            </div> 
          </section>  
          <section class="footer-bottom row">
            <div class="col-md-2">
              <p class="text-muted">   2022 QuickJobs </p>
            </div>
            <div class="col-md-8 text-md-center">
              <span  class="px-2">info@com</span>
              <span  class="px-2">(237)6-00-000-000</span>
              <span  class="px-2">ODC, Douala</span>
            </div>
            <div class="col-md-2 text-md-right text-muted">
              <i class="fab fa-lg fa-cc-visa"></i> 
              <i class="fab fa-lg fa-cc-paypal"></i> 
              <i class="fab fa-lg fa-cc-mastercard"></i>
            </div>
          </section>
        </div>
        </footer>
     
    </div>

  );
}
export default Home;