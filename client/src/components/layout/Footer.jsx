import {
  FaTwitter,
  FaInstagramSquare,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaGooglePlay,
} from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-main bg-dark ">
      <div className="conatiner-data">
        <div className="about_conatiner">
          <div className="icon-conatiner">
            <SiAboutdotme className="about-icon" />
          </div>
         <div>
         <Link to="/about" className="about-link">About</Link>
         </div>
        </div>
        <div className="line-conatiner"></div>
        <div className="about_conatiner">
          <div className="icon-conatiner">
            <IoMdContact className="about-icon" />
          </div>
          <Link to="/contact"className="about-link">Conatact</Link>
        </div>
        <div className="line-conatiner"></div>
        <div className="about_conatiner">
          <div className="icon-conatiner">
            <MdPolicy className="about-icon" />
          </div>
          <Link to="/policy" className="about-link">Policy</Link>
        </div>
      </div>
      <div className="line-conatiner-2"></div>
      <section className="bg-dark text-center text-white">
        <div className=" p-4 pb-0">
          <section className="mb-4">
            <Link className="btn btn-outline-light btn-floating m-1">
              <FaFacebook />
            </Link>

            <Link className="btn btn-outline-light btn-floating m-1">
              <FaTwitter />
            </Link>

            <Link className="btn btn-outline-light btn-floating m-1">
              <FaInstagramSquare />
            </Link>

            <Link className="btn btn-outline-light btn-floating m-1">
              <FaGithub />
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1">
              <FaGoogle />
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1">
              <FaGooglePlay />
            </Link>
          </section>
        </div>

        <div className="text-center p-3">
          shrawan © 2022 All Rights Reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
