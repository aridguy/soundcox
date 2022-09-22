import React from "react";
import './Home.css';
import Instagram from '../../Assets/Instagram.png';
import Twitter from '../../Assets/Twitter.png';
import Facebook from '../../Assets/Facebook.png';
import Headphone from '../../Assets/Headphone.png';
import Rectangle from '../../Assets/Rectangle.png';
import Slant from '../../Assets/Slant.png'

const Home = () => {
    return (
        <div>
            <div className="container backg">
                <div className="row">
                    <div className="col-md-5">
                        <div className="titles">
                            <h1 className="htxt">GET LOST</h1>
                            <h3 className="sbtxt">IN THE <k>MUSIC</k></h3>
                            <p className="stxt">3 Wireless Headphones</p>
                            <p className="txtextra">More Music, Less Noise <br /> Experience Premium Sound <br />Available in Different Colours</p>
                            <h2 className="price">$349.94</h2>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="hphone" src={Headphone} />
                    </div>
                    <div className="col-md-2">
                        <div className="wrap-last">
                            <img width="230px" src={Rectangle} />
                            <div className="extxt">
                                <p className="new text-white">New Arrivlas</p>
                                <h2 className="percentage text-white">10%</h2>
                                <p className="discount text-white">Discount</p>
                            </div>
                        </div>

                    </div>
                </div>
                <img className="slant" src={Slant} />
                <div className="row mt-4 scolom">
                    <div className="col-md-12">
                        <div className="btn-down">
                            <button className="botin">BUY NOW &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></button>
                        </div>
                        <div className="socials mt-5">
                            <img width="40px" src={Instagram} /> <img width="40px" src={Twitter} /> <img width="40px" src={Facebook} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home