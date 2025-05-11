import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/CardProjetos.css";
import eu from "../images/Eu.jpeg"; 
import github from "../images/github.png";

function CardProjetos({ imagem, titulo, descricao, linkGit }) {
  return (
    <div className="card-container">
      <div className="card">
          <div className="card-image">
        <img className="Foto-projeto" src={imagem} alt="Imagem de Ryan Calmon" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{titulo}</h3>
          <p className="card-description">{descricao}</p>
          <a href={linkGit} target="_blank" rel="noopener noreferrer">
            <img className="github" src={github} alt="GitHub" />
          </a>
          </div>
         
           <div className="color-overlay"></div>
        
    </div>
    </div>
    
  );
}

export default CardProjetos;

