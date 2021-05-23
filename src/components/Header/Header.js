/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
    <div className="header-section" style={{backgroundColor: "white", padding:'20px'}}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">

                    <div className="container-fluid">
                        <img style={{height:"40px", width:"180px"}} className="nav-img" src={logo} alt="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Explore</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/home">Discover</Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">For Professionals</Link>
                                </li>
                                <li className="nav-item dropdownBtn">
                              
                                        <button type="button" style={{border:'none' }} data-bs-toggle="dropdown" aria-expanded="false"> 
                                        <FontAwesomeIcon icon={faEllipsisH} />
                                        </button>
                                        <ul class="dropdown-menu dropdown-content">
                                        <li><Link class="dropdown-item" to="/">Home</Link></li>
                                        <li><Link class="dropdown-item" to="/"> Developer</Link></li>
                                        <li><Link class="dropdown-item" to="/">Author</Link></li>
                                        <li><Link class="dropdown-item" to="/">Contents</Link></li>
                                        <li><Link class="dropdown-item" to="/">Contents</Link></li>
                                        <li><Link class="dropdown-item" to="/">Contents</Link></li>
                                        <li><Link class="dropdown-item" to="/">Contents</Link></li>
                                        </ul>
                          
                                </li>
                                <li className="nav-item">
                                   <Link className="nav-link" to="/home"> <button type="button" class="btn btn-light">Submit Photos</button></Link>
                                </li>
                               <li className="nav-item">
                                 <Link className="nav-link" to="/login">Login</Link>
                                </li>
                               <li className="nav-item">
                               <Link className="nav-link" to="/home"> <button style={{background:'#E17800'}} type="button" class="btn">Join Free</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    );
};

export default Header;