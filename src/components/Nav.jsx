import '../styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';


function Nav() {
  const currentPage = useLocation().pathname;
  
    return (
      <ul  className="navbar">
         <li className="navbar-container container">
         <Link to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >
          About Me
        </Link>
        </li>
        <li className="navbar-container container">
         <Link to="/PortfolioPage" className={currentPage === '/PortfolioPage' ? 'nav-link active' : 'nav-link'} >
          Portfolio
          </Link>
        </li>
        <li className="navbar-container container">
         <Link to="/ResumePage" className={currentPage === '/ResumePage' ? 'nav-link active' : 'nav-link'} >
          Resume
          </Link>
        </li>
        <li className="navbar-container container">
         <Link to="/ContactPage" className={currentPage === '/ContactPage' ? 'nav-link active' : 'nav-link'} >
          Contact
        </Link>
        </li>
      </ul>
    );
  }

  export default Nav;