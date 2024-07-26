import React from "react";
import Navbar from "../components/Navbar";
import Trajectory from "../components/Trajectory";
import PhotoSection from "../components/PhotoSection";
import fullPhotos from "../content/fullPhotos.json"

function Main(props) {

  const {portrait, advertising, executive, editorial} = fullPhotos
  return (
    <>
      <div className="row">
        <Navbar />
      </div>
      <div className="row  bg-danger container-fluid">
        <div className="col-12 bg-info container-img" >
          <img src="" alt="background-img" />
        </div>
        <div className="col-12 title-container">
          <h1>Marlex Brando</h1>
          <h3>Portafolio fotográfico</h3>
        </div>
      </div>
      {/* El contenedor fluido siempre se ajusta al ancho de la pantalla a diferencia del container*/}
      {/* JSX para representar la interfaz de usuario del componente */}

      <div className="row m-3 trajectory">
        <Trajectory />
      </div>
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
        <PhotoSection />
      </div>
    </>
  );
}

export default Main;
