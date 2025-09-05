
import React from 'react';
import CardProjetos from './CardProjetos';
import '../styles/Projects.css';
import ryanportifolio from '../images/ryanportifolio.png';
import cifrafacil from '../images/cifrafacil.png'
import brotherscup from '../images/brothers-2.jpeg'

const Projects = () => {
  
  return (
    <div className="section hidden">
    <section id="projects" className="about-section">
       <div className="container-fluid">
        <div className="row">
         <h2 className="numbered-heading">Projetos</h2>
         <p className="texto-sobre"> Aqui estão os meus projetos mais recentes!</p>
         
          <div className="projetos-container">
            <div className="row">
              <div className="col col-lg-4 mb-4">
                <CardProjetos 
                imagem={ryanportifolio}
                titulo ="v1-portfolio"
                descricao="Construir esse portfólio me rendeu muitos ensinamentos, principalmente com hooks e animações."
                linkGit={"https://github.com/Ryan-Calmon/portifolio-ryan"} />
                </div>
                <div className="col col-lg-4 mb-4">
                <CardProjetos imagem={cifrafacil}
                titulo ="Cifra Fácil"
                 descricao="O projeto que me inseriu ao desenvolvimento Web."
                linkGit={"https://github.com/Ryan-Calmon/cifrafacil"} />
                </div>
                 <div className="col col-lg-4 mb-4">
                <CardProjetos imagem={brotherscup}
                titulo ="Brothers Cup"
                 descricao="Site para realizar e organizar torneios!"
                linkGit={"https://github.com/Ryan-Calmon/brothers-cup"} />
                </div>
                </div>
              </div>
           </div>
         </div>
    </section>
    </div>
  );
};

export default Projects;
