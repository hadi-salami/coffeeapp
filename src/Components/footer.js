import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer>
        <div id="contant">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">Coffee.Cafe</Link>
            <p className="footer-par">
              Where every cup is a carefully composed moment of pleasure. Come
              as you are. Leave inspired.
            </p>
          </div>
          <div className="footer-block menu">
            <h4>MENU</h4>
            <ul>
              <li><Link to="/Menu">Espresso</Link></li>
              <li><Link to="/Menu">Cold Drinks</Link></li>
              <li><Link to="/Menu">Matcha series</Link></li>
              <li><Link to="/Menu">Pastries</Link></li>
              <li><Link to="/Menu">Seasonal Specials</Link></li>
            </ul>
          </div>
          <div className="footer-block visit">
            <h4>VISIT</h4>
            <ul>
              <li><Link to="/Contact">Our Location</Link></li>
              <li><Link to="/Contact">Hours & Info</Link></li>
              <li><Link to="/About">Private Events</Link></li>
              <li><Link to="/About">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-block connect">
            <h4>CONNECT</h4>
            <ul>
              <li><Link >Instagram</Link></li>
              <li><Link >Tiktok</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Coffee Cafe. All rights reserved.</span>
          <span>Crafted with ♥ for coffee lovers</span>
        </div>
      </footer>
    );
}