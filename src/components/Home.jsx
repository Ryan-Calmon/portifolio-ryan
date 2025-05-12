import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Home.css'; 

const Home = () => {
   useScrollAnimation();
  return (
    <div className="section hidden">
    <section id="home" className="home-section">
      <div className="container-fluid">
      <div className="texto-home">
        <div>
        <p className="ola">Olá, meu nome é</p>
        </div>
        <div>
        <h1 className="nome">Ryan Calmon.</h1>
        </div>
        <div>
        <p className="sobre">
          Sou um estudante de Ciência da Computação, <br />
          atualmente focado no desenvolvimento front-end e cyber security.
        </p>
        </div>
      </div>
      </div>
       </section>
      </div>
   

  );
};

export default Home;
