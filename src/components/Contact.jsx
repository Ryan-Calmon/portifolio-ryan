import React, { useState } from 'react';
import '../styles/Contato.css';
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

function RedesSociais() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'ryan@calmon.net.br';

  function handleEmailClick() {
    navigator.clipboard.writeText(emailAddress);
    window.location.href = `mailto:${emailAddress}`;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
              <li className="email-wrapper">
                <button onClick={handleEmailClick} className="email-btn">
                  <img className="social-media" src={email} alt="E-mail" />
                </button>
                {copied && <span className="copied-toast">Copiado!</span>}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RedesSociais;
