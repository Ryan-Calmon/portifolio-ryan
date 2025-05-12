
import React from 'react';
import CardProjetos from './CardProjetos';
import '../styles/Projects.css';
import ryanportifolio from '../images/ryanportifolio.png';
import cifrafacil from '../images/cifrafacil.png'

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
              <div className="col col-lg-6 mb-4">
                <CardProjetos 
                imagem={ryanportifolio}
                titulo ="v1-portifolio"
                descricao="Construir esse portifólio me rendeu muitos ensinamentos, principalmente com hooks e animações."
                linkGit={"https://github.com/Ryan-Calmon/portifolio-ryan"} />
                </div>
                <div className="col col-lg-6 mb-4">
                <CardProjetos imagem={cifrafacil}
                titulo ="Cifra Fácil"
                 descricao="O projeto que me inseriu ao desenvolvimento Web."
                linkGit={"https://github.com/Ryan-Calmon/cifrafacil"} />
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
