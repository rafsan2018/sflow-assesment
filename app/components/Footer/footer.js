import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{ backgroundColor: "rgba(6, 78, 164, 1)", padding: "80px 120px" }}
    >
      <div className="container">
        <div className="row gx-4 text-light">
          <div className="col-md-3 d-flex flex-column gap-3">
            <h2 className="fs-6">Software Recruitment co.</h2>
            <div className="conatiner d-flex gap-3">
              <FaLinkedinIn />
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="col-md-3 gap-5">
            <h2>Explore</h2>
            <ul className="nav flex-column gap-2">
              <li className="nav-item">Homepage</li>
              <li className="nav-item">Software engineering</li>
              <li className="nav-item">For jobseekers</li>
              <li className="nav-item">DevOps</li>
              <li className="nav-item">For clients</li>
            </ul>
          </div>
          <div className="col-md-3  gap-5">
            <h2>Sectors</h2>
            <ul className="nav flex-column gap-2">
              <li className="nav-item">Homepage</li>
              <li className="nav-item">Software engineering</li>
              <li className="nav-item">For jobseekers</li>
              <li className="nav-item">DevOps</li>
              <li className="nav-item">For clients</li>
            </ul>
          </div>
          <div className="col-md-3  gap-5  align-self-start">
            <h2>Services</h2>
            <ul className="nav flex-column gap-2">
              <li className="nav-item">Homepage</li>
              <li className="nav-item">Software engineering</li>
              <li className="nav-item">For jobseekers</li>
              <li className="nav-item">DevOps</li>
              <li className="nav-item">For clients</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
