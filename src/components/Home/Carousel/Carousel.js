import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">


          <div className="carousel-item active">


                    <div className="cards-wrapper row">
                        <div className="col-md-4 col-lg-3 col-sm-12 col-xs-12">
                        <div className="card card-image1">
                            <div classNameName="card-content">
                                <p>Workspace</p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-sm-12 col-xs-12">
                        <div className="card card-image2">
                            <div classNameName="card-content">
                                <p>Summer</p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-sm-12 col-xs-12">
                        <div className="card card-image3">
                            <div classNameName="card-content">
                                <p>City</p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-sm-12 col-xs-12">
                        <div className="card card-image4">
                            <div classNameName="card-content">
                                <p>Food</p>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
};

export default Carousel;