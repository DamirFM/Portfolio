import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
    // Function to handle click events on icons
    const handleClickIcon = (icon) => {
      // Implement action based on the icon clicked
      if (icon === "github") {
        window.open("https://github.com/DamirFM", "_blank");
      } else if (icon === "linkedin") {
        window.open("https://www.linkedin.com/in/damir-yakupov-73b868223/", "_blank");
      } 
    };
  
    return (
      <div className="footer-box">
        <footer className="footer">
          <div className="footer-icons">
            {/* GitHub icon */}
            <FaGithub
              onClick={() => handleClickIcon("github")} // Handle click event for GitHub icon
              className="icon"
            />
            {/* LinkedIn icon */}
            <FaLinkedin
              onClick={() => handleClickIcon("linkedin")} // Handle click event for LinkedIn icon
              className="icon"
            />
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;