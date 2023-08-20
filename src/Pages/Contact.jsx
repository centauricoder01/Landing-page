import React from "react";
import "../CSS/Contact.css";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaLocationArrow,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";

const Contact = () => {
  return (
    <>
      <footer id="contact">
        <div className="row primary">
          <div className="column about">
            <h3>Centarui</h3>
            <p>
              Centauri revolutionizes human-AI interaction as the pioneer of
              seamless, natural conversations. Engage with our AI, which has
              been finely tuned to emulate human-like dialogue effortlessly.
              Experience the future of communication firsthand with a
              complimentary trial. Elevate your business by integrating
              Centauri's cutting-edge technology, extending your outreach and
              enhancing customer engagement.
            </p>
          </div>
          <div className="column links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className="column subscribe">
            <h3>Contact</h3>
            <div>
              <input type="email" placeholder="Your email id here" />
              <button>Contact</button>
            </div>
            <div className="social">
              <i className="fa-brands fa-facebook-square">
                <FaLinkedin />
              </i>
              <i className="fa-brands fa-instagram-square">
                <FaTwitterSquare />
              </i>
              <i className="fa-brands fa-twitter-square">
                <FaGithubSquare />
              </i>
            </div>
          </div>
        </div>
        <div className="row secondary">
          <div>
            <p>
              <i className="fas fa-phone-alt">
                <BsFillTelephoneFill />
              </i>
            </p>
            <p>+12 123456789</p>
          </div>
          <div>
            <p>
              <i className="fas fa-envelope">
                <ImMail2 />
              </i>
            </p>
            <p>contactai@centauri.com</p>
          </div>
          <div>
            <p>
              <i className="fas fa-map-marker-alt">
                <FaLocationArrow />
              </i>
            </p>
            <p>Mount View, Alpha Centarui</p>
          </div>
        </div>
        <div className="row copyright">
          <p>Copyright &copy; 2021 Centauri | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
