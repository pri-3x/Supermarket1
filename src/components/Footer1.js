import React from "react";
import { icons } from "react-icons";
import "./Footer1.css";
import queppelin from "./q.png";
import { SocialIcon } from 'react-social-icons';

function Footer1() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          {/* <div className="col">
            <h4>THICC MEMES INC</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1>
          </div> */}
          {/* Column2 */}
          <div className="col">
           <img className="img" src= {queppelin}/>
            
          </div>
          {/* Column3 */}
          <div className="col">
            
            <div className="list-unstyled">
            <SocialIcon url="https://instagram.com/queppelin_metaverse/" />___        
            <SocialIcon url="https://twitter.com/queppelin"/>___
            <SocialIcon url="https://in.linkedin.com/company/queppelin" />___
            <SocialIcon url="https://www.youtube.com/channel/UCopafFtBCyzOnKkKF-VG4nA" />___
            <SocialIcon url="https://www.facebook.com/queppelin/" />
              {/* <BsInstagram/>? Linkedin Twitter */}
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} QUEPPELIN TECHNOLOGIES | All rights reserved |
            Terms Of Service 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer1;