import React from "react";
import { Link } from "react-router-dom";
import "../Components/style.css";
// import { Link } from "react-router-dom";
import FrameOne from "../images/frame-1.png";
import FrameTwo from "../images/frame-2.png";
import FrameThree from "../images/frame-3.png";
import FrameFour from "../images/frame-4.png";
import ProfilePic from "../images/olumide.png";
import Stars from "../images/stars.png";

function Home() {
  return (
    <React.Fragment>
      <div className="body-content">
        <main>
          <section className="first-section">
            <div className="first-frame">
              <h1>View and Update Debtors from your School</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate.
              </p>
              <button className="btn-home">Sign Up</button>
              <button className="btn-works">How it works</button>
            </div>

            <div className="second-frame">
              <img src={FrameOne} className="signing" alt="Laptop Signing" />
            </div>
          </section>

          <section className="about-us">
            <div className="about-frame">
              <h2>About us</h2>
              <p className="about-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nunc vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate.
              </p>
            </div>

            <div>
              <img src={FrameTwo} className="about-img" alt="Meeting" />
            </div>
          </section>

          <section className="mission">
            <div>
              <img src={FrameThree} className="mission-img" alt="Missions" />
            </div>

            <div>
              <h2>Mission and Goals</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nunc vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate.
              </p>
            </div>
          </section>

          <section className="how-section">
            <div className="how-frame">
              <h2>How it works</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nunc vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate.
              </p>
            </div>

            <div>
              <img src={FrameFour} className="teaching" alt="Woman Teaching" />
            </div>
          </section>

          <h2 className="rating-title">What people say about us</h2>
          <section className="rating">
            

            <div className="card-frame">
            <div className="card-slide">
              <div>
                <img
                  src={ProfilePic}
                  className="profile-pic"
                  alt="Olumide Pic"
                />
              </div>
              <div className="card-name">
                <h4>Olumide Joseph</h4>
                <p>Olumide Joseph</p>
                <img src={Stars} alt="Star Rating" className="stars" />
              </div>
            </div>
            <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </div>

            <div className="card-frame">
            <div className="card-slide">
              <div>
                <img
                  src={ProfilePic}
                  className="profile-pic"
                  alt="Olumide Pic"
                />
              </div>
              <div className="card-name">
                <h4>Olumide Joseph</h4>
                <p>Olumide Joseph</p>
                <img src={Stars} alt="Star Rating" className="stars" />
              </div>
            </div>
            <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </div>

            <div className="card-frame">
            <div className="card-slide">
              <div>
                <img
                  src={ProfilePic}
                  className="profile-pic"
                  alt="Olumide Pic"
                />
              </div>
              <div className="card-name">
                <h4>Olumide Joseph</h4>
                <p>Olumide Joseph</p>
                <img src={Stars} alt="Star Rating" className="stars" />
              </div>
            </div>
            <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </div>

            <div className="card-frame">
            <div className="card-slide">
              <div>
                <img
                  src={ProfilePic}
                  className="profile-pic"
                  alt="Olumide Pic"
                />
              </div>
              <div className="card-name">
                <h4>Olumide Joseph</h4>
                <p>Olumide Joseph</p>
                <img src={Stars} alt="Star Rating" className="stars" />
              </div>
            </div>
            <p className="feedback">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </div>
            
          </section>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Home;
