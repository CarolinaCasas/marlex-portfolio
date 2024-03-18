import React from 'react';
import Navbar from '../components/Navbar';

function Main(props) {

  return (
    <>
        <Navbar/>
        <div className='container-fluid img-main z-3'>
          <div className='title-container d-flex  flex-column justify-content-center align-items-center container-fluid z-2'>
          <h1>Marlex Brando</h1>
            <h3>Portafolio fotográfico</h3>
          </div>
        </div>
         {/* El contenedor fluido siempre se ajusta al ancho de la pantalla a diferencia del container*/}
      {/* JSX para representar la interfaz de usuario del componente */}

      <div className='trajectory'>
        <h3>Yo soy</h3>
        <img src="..." class="img-thumbnail" alt="..."/>
        </div>
      <div className='portrait'>
        <h3>Retrato</h3>
        </div>
      <div className='advertising'><h3>Publicitario</h3></div>
      <img src="..." class="img-thumbnail" alt="..."/>
      <img src="..." class="img-thumbnail" alt="..."/>
      <img src="..." class="img-thumbnail" alt="..."/>
      <div className='executive'><h3>Ejecutivo</h3></div>
      <div className='editorial'><h3>Editorial</h3></div>
      <div className='contact'><h3>Contacto</h3></div>
    </>

    
  );
}

export default Main;