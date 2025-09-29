import React from "react";
import '../styles/Header.css'; 
import MenuMobile from "./MenuMobile";

function Header() {
  
    return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
              <div className="col-3">
                  <div className="logo-container">
                      <a href="#home" rel="noopener noreferrer"> 
                    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" width="50" height="50">
                      <title>Logo</title>
                     
                      <g transform="translate(-8.000000, -2.000000)">
                        <g transform="translate(11.000000, 5.000000)">
                          <polygon
                            id="Shape"
                            stroke="#64ffda"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="39 0 0 22 0 67 39 90 78 68 78 23"
                            fill="none"
                          />
                          <text className="R-logo" x="38" y="45" dominantBaseline="middle" textAnchor="middle" fontSize="30" fill="#64ffda">R</text>
                        </g>
                      </g>
                     
                    </svg>
                     </a>
                </div>
          </div>
          <div className="col-6 col-lg-3">

          </div>
             <div className="col-6 d-lg-block d-none ">
              <div className="navbar">
             <nav className="nav">
            <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
                   </nav>
                   <a
                    className="btn-curriculo"
                    href="/Currículo_Ryan_Calmon.pdf"
                    target="_blank"
                     rel="noopener noreferrer"
                      >
                      Currículo
                    </a>

              </div>
              </div>
             <div className="col-3 d-block d-lg-none">
              <div className="menuContainer">
              <MenuMobile />
             </div>
             </div>
        </div>           
      </div>
  
    </header>
  );
}

export default Header;
