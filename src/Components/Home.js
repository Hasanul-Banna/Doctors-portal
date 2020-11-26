import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import banner from '../images/banner.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="header-container ">
            < div  className="container " >
                <div style={{height:"100vh"}} className="row d-flex align-content-center">
                    <div className="col-md-5">
                        <h1>Your New Smile <br /> Starts Here</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere aliquid quo itaque repellat voluptatem quidem, ipsum illo, ratione doloribus modi? Tempore dolorum quas rem?</p> 
                        <Link to="/appoinment" className="btn btn-main">Get Appoinment</Link>
                    </div>
                    <div className="col-md-7">
                        <img className="w-100" src={banner} alt=""  />
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Home;