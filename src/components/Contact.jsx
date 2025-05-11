import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Contato.css';
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

const RedesSociais = () => {
  return (
    <div className="section hidden">
      <section id="contact" className="about-section">
        <div className="container-fluid">
          <div className="row">
            <h2 className="numbered-heading">Contato</h2>
            <ul className="redes-lista">
              <li>
                <a href="https://www.linkedin.com/in/ryan-calmon" target="_blank" rel="noopener noreferrer">
                  <img className="social-media" src={linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ryan-calmon" target="_blank" rel="noopener noreferrer">
                  <img className="social-media" src={github} alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="mailto:ryan@calmon.net.br">
                  <img className="social-media" src={email} alt="E-mail" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RedesSociais;
