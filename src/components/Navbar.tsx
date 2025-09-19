import { useState } from "react";
import "../style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const downloadCV = (selectedLanguage: string) => {

    const pdfUrl = selectedLanguage == "en" ? "/myPDF/alec_pham_resume_eng.pdf" : "/myPDF/alec_pham_resume_fr.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = selectedLanguage == "en" ? "alec_pham_resume_eng.pdf" : "alec_pham_resume_fr.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Alec Pham</h1>
      </div>

      <div
        className={`navbar-right ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="dropdown">
          <button className="dropbtn">Download CV</button>
          <div className="dropdown-content">
            <a href="#" onClick={(e) => { e.preventDefault(); downloadCV("en"); }}>
              In English
            </a>

            <a href="#" onClick={(e) => { e.preventDefault(); downloadCV("fr"); }}>
              In French
            </a>
          </div>
        </div>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
