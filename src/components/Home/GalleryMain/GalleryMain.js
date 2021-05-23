import React from 'react';
import './GalleryMain.css';
import s1 from '../../../images/s1.jpg';
import s2 from '../../../images/s2.jpg' ;
import s3 from '../../../images/s3.jpg'; 
import l1 from '../../../images/l1.jpg';
import l2 from '../../../images/l2.jpg'; 
import l3 from '../../../images/l3.jpg';
import s4 from '../../../images/s4.jpg';
import s5 from '../../../images/s5.jpg';
import s6 from '../../../images/s6.mp4';
import l4 from '../../../images/l4.jpg';
import l5 from '../../../images/l5.jpg';
import l6 from '../../../images/l6.jpg';
import { Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GalleryMain = () => {
    return (
       <section id="gly" class="pt_60">


        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="#add-item">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dlt-products">Photos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dlt-products">Videos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dlt-products">Freebies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dlt-products">360</Nav.Link>
          </Nav.Item>
          <div className='dropdownBtn'>
          <Nav.Item >
          <button type="button" style={{border:'none' }} class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> 
                Recommended</button>
                                        <ul class="dropdown-menu dropdown-content">
                                            <li><Link class="dropdown-item" to="/">Most Recent</Link></li>
                                            <li><Link class="dropdown-item" to="/"> Most Viewed</Link></li>
                                            <li><Link class="dropdown-item" to="/">Most Downloaded</Link></li>
                                            <li><Link class="dropdown-item" to="/">Most Appreciated</Link></li>
                                        </ul>
          </Nav.Item>
          </div>
        </Nav>

           <div className="row mb_20">
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div class="gly_img mb_20">
                            <img src={s1} class="w-100" alt=""/>
                        </div>
                        <div class="gly_img gly_img_big">
                            <img src={l1} class="w-100" alt=""/>
                            
                        </div>
               </div>

               <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="gly_img gly_img_big mb_20">
                            <img src={l2} class="w-100" alt=""/>
                        </div>
                        <div class="gly_img ">
                            <img src={s2} class="w-100" alt=""/>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="gly_img mb_20">
                            <img src={s3} class="w-100" alt=""/>
                        </div>
                        <div class="gly_img gly_img_big">
                            <img src={l3} class="w-100" alt=""/>
                        </div>
                    </div>

           </div>

           <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div class="gly_img mb_20">
                            <img src={s4} class="w-100" alt=""/>
                        </div>
                        <div class="gly_img gly_img_big">
                            <img src={l4} class="w-100" alt=""/>
                            
                        </div>
               </div>

               <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="gly_img gly_img_big mb_20">
                            <img src={l5} class="w-100" alt=""/>
                        </div>
                        <div class="gly_img ">
                            <img src={s5} class="w-100" alt=""/>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="gly_img mb_20">

                            <video height="320px" controls>
                            <source class="w-100" src={s6} type="video/mp4"/>
                          </video>
                        </div>
                        <div class="gly_img gly_img_big">
                            <img src={l6} class="w-100" alt=""/>
                        </div>
                    </div>

           </div>

       </section>
    );
};

export default GalleryMain;