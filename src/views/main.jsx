import React from "react";
import Navbar from "../components/Navbar";
import Trajectory from "../components/Trajectory";
import PhotoSection from "../components/PhotoSection";
import fullPhotos from "../content/fullPhotos.json"
import ContactForm from "../components/ContactForm";

function Main(props) {

  const {portrait, advertising, executive, editorial} = fullPhotos
  return (
    <>
      <div className="row">
        <Navbar />
      </div>
 
      <div className="row p-0 m-0 mt-5 bg-danger container-fluid full-screen-div  d-flex justify-content-center align-items-center">
  
          <img src="" alt="background-img" />
        <div className="title-container  d-flex flex-column text-center">
        
          <h1 className="">Marlex Brando</h1>
          <h3 className=" ">Portafolio fotográfico</h3>
 
          
        </div>
      </div>
      {/* El contenedor fluido siempre se ajusta al ancho de la pantalla a diferencia del container*/}
      {/* JSX para representar la interfaz de usuario del componente */}
      <div className="row m-3 portrait">
        <h3>Retrato</h3>
        <PhotoSection photos={portrait} />
      </div>
      <div className="row m-3 advertising">
        <h3>Publicitario</h3>
        <PhotoSection photos={advertising}/>
      </div>
      <div className="row m-3 executive">
        <h3>Ejecutivo</h3>
        <PhotoSection photos={executive}/>
      </div>
      <div className="row m-3 editorial">
        <h3>Editorial</h3>
        <PhotoSection photos={editorial}/>
      </div>
      <div className="row m-3 contact">
        <h3>Contacto</h3>
        <ContactForm />
      </div>
      <div className="row m-3 trajectory full-screen-div ">
        <Trajectory />
      </div>
    </>
  );
}

export default Main;
