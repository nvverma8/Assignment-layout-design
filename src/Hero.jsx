import React from "react";
import "./Hero.css";
import image1 from "./images/img1.png";
import image2 from "./images/img2.png";
import image4 from "./images/image 4.png";
import image5 from "./images/image 5.png";
import image6 from "./images/image 6.png";
import image7 from "./images/image 7.png";
import image8 from "./images/image 8.png";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero_container1">
        <div className="hero_container1_left">
          <p className="highlighted_text">Revolutionize</p>
          <p>Your Supply Chain.</p>
          <div className="description">
            Welcome to Rosstech, the ultimate platform for seamless,
            transparent, and efficient trading of fruits and vegetables. Connect
            producers, suppliers, transport providers, and retailers in a
            unified system to manage quality, track deliveries, and resolve
            disputes effortlessly.
          </div>
          <div className="getStarted_button">
            <button>Get Started</button>
          </div>
        </div>
        <div className="hero_container1_right">
          <img src={image1} alt="image3" className="hero_image3" />
        </div>
      </div>
      <div className="hero_container2">
        <div className="hero_container2_left">
          <img src={image2} alt="image2" />
        </div>
        <div className="hero_container2_right">
          <p>
            Key <span>Features</span> Of Rosstech
          </p>
          <div className="features_container">
            <ul type="none">
              <li className="icon1">Centralized Data Repository</li>
              <li className="icon2">Seamless Communication</li>
              <li className="icon3">Real-Time Updates</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero_container3">
        <div className="howIt_Works">
          <h1>
            How It <span>Works ?</span>
          </h1>
          <p>
            Learn How Rosstech Transforms The Trading Of Fruits And Vegetables
            By Connecting Producers, Suppliers, Transport Providers, And
            Retailers Through Our Unified Platform. Our Step-By-Step Video
            Guides Will Walk You Through The Entire Process, Ensuring You
            Understand How To Make The Most Of FreshTrade.
          </p>
        </div>
        <div className="section_video1">
          <div className="section_video1_left">
            <a href="#" className="link1">
              Sign Up
            </a>
            <p>Create Your Account Tailored To Your Role-</p>
            <p>Producer, Supplier, Transport Provider, Or Retailer</p>
            <a href="#">
              "Watch The Video To See How Easy it is to Get Started."
            </a>
          </div>
          <div className="section_video1_right">
            <a
              href="https://youtu.be/EzM4oWq5Vbs?si=WfNTt3u_DIUvRThU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image4} />
            </a>
          </div>
        </div>
        <div className="section_video2">
          <div className="section_video2_left">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={image5} />
            </a>
          </div>
          <div className="section_video2_right">
            <a href="#" className="link2">
              Centralized Dashboard
            </a>
            <p>
              Acess Your Personalized Dashboard To Manage Orders, Track
              Deliveries, And Communicate Seamlessly with Other Parties involved
              in The Supply Chain.
            </p>
            <a href="#">
              "See How The Centralized Dashboared Simpifies Your Workflow"
            </a>
          </div>
        </div>
        <div className="section_video3">
          <div className="section_video3_left">
            <a href="#" className="link3">
              Real-Time Updates
            </a>
            <p>
              Stay Informed With Real-Time Notofications And Live Transaction
              Views. Recieve instant Updates On Order Statuses, Delivery
              Confirmations, And Any Issues That Arise.
            </p>
            <a href="#">"Learn How Real-Time Updates Keep you Informed"</a>
          </div>
          <div className="section_video3_right">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={image6} />
            </a>
          </div>
        </div>
        <div className="section_video4">
          <div className="section_video4_left">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={image7} />
            </a>
          </div>
          <div className="section_video4_right">
            <a href="#" className="link4">
              Efficient Dispute Resolution
            </a>
            <p>
              Handle Quality or Quantity Disputes Swiftly Through Our
              Streamlined Support Case System. Upload Documents, Communicate
              with Relevant Parties, And Work Automated Resolutions.
            </p>
            <a href="#">
              "Understand Our Efficient Dispute Resolution Process"
            </a>
          </div>
        </div>
      </div>
      <div className="form_heading">
        <h1>Join <span>Rosstech</span> Today</h1>
      </div>
      <div className="form_description">
        <p>Transform Tour Trading Operations with Rosstech.Simplyfy Processes, Improve Communication, And Ensure Top-Quality Standards.</p>
      </div>
      <div className="hero_container4">
        <div className="hero_container4_left">
        <div className="hero_container4_left">
        <form>
          <div className="form_group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form_group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form_group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form_group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form_group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          
        </form>
      </div>
        
        </div>
        <div className="hero_container4_right">
            <img src={image8}/>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
