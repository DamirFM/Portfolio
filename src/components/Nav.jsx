import '../styles/Navbar.css';



export default function Nav() {
  
  
    return (
      <nav  className="navbar">
         <div className="navbar-container container">
          <div >
            <a href="#">About Me</a>
          </div>
          <div >
            <a href="#">Portfolio</a>
          </div>
          <div >
            <a href="#">Resume</a>
          </div>
          <div >
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    );
  }