import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section id="banner">
            <div class="bnr_overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="bnr_contetnt">
                                <h2>Your local sources of high quality images 
                                 <br/>and vedios directly from their creators.</h2>
                                 <div className="search">
                                 <input type="text" name="gallery" placeholder='search photos and videos' />
                                 </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;