import React from 'react';
import banner from '../images/banner.png';
import { Link } from 'react-router-dom';
import Navibar from './Navibar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhoneVolume, faCopyright } from '@fortawesome/free-solid-svg-icons';
import service1 from '../images/icon1.png';
import service2 from '../images/icon2.png';
import service3 from '../images/icon3.png';
import baby from '../images/baby.jpg';
import Dentist from '../images/Dentist1.png';
import client from '../images/client1.png';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <>
            <Navibar />
            <div className="header-container ">
                < div className="container " >
                    <div style={{ height: "100vh" }} className="row d-flex align-content-center">
                        <div className="col-md-5">
                        <br /><br />
                            <h1>Your New Smile <br /> Starts Here</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere aliquid quo itaque repellat voluptatem quidem, ipsum illo, ratione doloribus modi? Tempore dolorum quas rem?</p>
                            <Link to="/appoinment" className="btn btn-main">Get Appoinment</Link>
                        </div>
                        <div className="col-md-7">
                            <img className="w-100" src={banner} alt="" />
                        </div>
                    </div>
                </div >
            </div>
            <div style={{ marginTop: '-50px' }} className="container">
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="Home-icon px-5 py-3">
                            <div className="display-4">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="ml-2">
                                <span>Opening Hours</span> <br />
                                <small>Everyday 08:00 AM - 10:00 PM</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="Home-icon px-5 py-3">
                            <div className="display-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="ml-2">
                                <span>Our Location</span> <br />
                                <small>Lorem ipsum House-1212</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="Home-icon px-5 py-3">
                            <div className="display-4">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                            </div>
                            <div className="ml-2">
                                <span>Contact Us</span> <br />
                                <small>+966-5669-99-99</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="text-center my-5">
                <p className="theme-text mb-0 pb-0">OUR SERVICES</p>
                <h2>SERVICES WE PROVIDE</h2>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img style={{ height: '100px' }} src={service1} alt="" />
                            <h5>Floride Treatmenmt</h5>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam , molestiae enim voluptatum numquam!</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img style={{ height: '100px' }} src={service2} alt="" />
                            <h5>Cavity Filling</h5>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam , molestiae enim voluptatum numquam!</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img style={{ height: '100px' }} src={service3} alt="" />
                            <h5>Teeth Whitening</h5>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam , molestiae enim voluptatum numquam!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={baby} alt="" className="w-100" />
                        </div>
                        <div className="col-md-6 pl-4">
                            <h2>Exeptional Dental Care <br /> On Your Terms.</h2>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, veritatis velit. Libero dolor, ratione culpa assumenda deleniti fugiat consequuntur velit, eveniet architecto at totam similique eaque consequatur nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatibus. Voluptatem labore corporis, doloribus nulla iusto accusantium. Et corrupti quaerat exercitationem quod eaque quae, nihil reprehenderit perspiciatis consequuntur maiores earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam natus perferendis? Consequatur, maiores obcaecati.</p>
                            <button className="btn btn-main">Learn More </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="dentist">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6  d-md-block d-none">
                            <img style={{ height: '590px', transform: 'translateY(-191px)' }} src={Dentist} alt="" />
                        </div>
                        <div className="col-md-6 text-white">
                            <br />
                            <br />
                            <br />
                            <p className="theme-text">APPOINMENT</p>
                            <h2>MAKE APPOINMENT TODAY</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo laborum adipisci placeat dolorem, aliquam obcaecati, laudantium ipsum tenetur maiores voluptatem aperiam cum? Quis, ut!</p>
                            <button className="btn btn-main">Learn More </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="review">
                <div className="container pt-5">
                    <p className="theme-text">TESTIMONIAL</p>
                    <h2 className="display-4">What's Our patients <br />Say</h2> <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur dignissimos temporibus quae minima ducimus blanditiis tempore corrupti fugit. Praesentium, temporibus! hic debitis repudiandae atque mollitia repellendus! Veritatis, unde sed?"</p>
                                <div className="d-flex justify-content-between">
                                    <img className="rounded-circle w-25" src={client} alt="" />
                                    <div>
                                        <span className="theme-text">Steve Jobless</span> <br />
                                        <small className="text-muted">London,UK</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur dignissimos temporibus quae minima ducimus blanditiis tempore corrupti fugit. Praesentium, temporibus! hic debitis repudiandae atque mollitia repellendus! Veritatis, unde sed?"</p>
                                <div className="d-flex justify-content-between">
                                    <img className="rounded-circle w-25" src={client} alt="" />
                                    <div>
                                        <span className="theme-text">Steve Jobless</span> <br />
                                        <small className="text-muted">London,UK</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur dignissimos temporibus quae minima ducimus blanditiis tempore corrupti fugit. Praesentium, temporibus! hic debitis repudiandae atque mollitia repellendus! Veritatis, unde sed?"</p>
                                <div className="d-flex justify-content-between">
                                    <img className="rounded-circle w-25" src={client} alt="" />
                                    <div>
                                        <span className="theme-text">Steve Jobless</span> <br />
                                        <small className="text-muted">London,UK</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<section>
    <div className="container">
        <div className="row">

        </div>
    </div>
</section>

            <section id="Contact">
                <div className="container p-5">
                    <div className="text-center theme-text">
                        <h2>Stay Connected With Us</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlfor="name">Your Name</label>
                            <input type="name" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlfor="phone">Contact Number</label>
                            <input type="text" className="form-control" id="phone" placeholder="Your Phone Number" />
                        </div>
                        <div className="form-group">
                            <label htmlfor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your message Here..."></textarea>
                        </div>
                        <button className="btn btn-main">Submit</button>
                    </form>
                </div>
            </section>
            <footer>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-5">
                            <h6 className="theme-text">About us</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae enim quo repellendus praesentium similique earum totam ratione assumenda nam.adipisicing elit. Doloribus recusandae enim quo repellendus praesentium similique earum totam ratione assumenda nam</p>
                        </div>
                        <div className="col-md-2">
                            <h6 className="theme-text">Help & Support</h6>
                            <ul>
                                <li>Help</li>
                                <li>Support</li>
                                <li>Service</li>
                                <li>Customer Care</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6 className="theme-text">Useful Links</h6>
                            <ul>
                                <li>FAQ</li>
                                <li>Terms</li>
                                <li>Policy</li>
                                <li>Our Blogs</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6 className="theme-text">Address</h6>
                            <p>New York City Road #212, <br /> United States.</p>
                            <div >
                                <FontAwesomeIcon className='fontawsome' icon={faFacebookSquare} />
                                <FontAwesomeIcon className='fontawsome' icon={faTwitterSquare} />
                                <FontAwesomeIcon className='fontawsome' icon={faInstagramSquare} />
                                <FontAwesomeIcon className='fontawsome' icon={faYoutubeSquare} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p>
                        <FontAwesomeIcon className='theme-text' icon={faCopyright} /> Copyright {new Date().getFullYear()} | All Rights Reserved By Hasanul-Banna
                    </p>
                </div>
            </footer>

        </>
    );
};

export default Home;