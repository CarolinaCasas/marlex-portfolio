import React from "react";

function Navbar(props) {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-dark container-fluid " style={{position:"fixed", right: "0",}}>
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-grow-1">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="yo-soy">YO SOY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="retrato">RETRATO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="publicitario">PUBLICITARIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="ejecutivo">EJECUTIVO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="editorial">EDITORIAL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="contacto">CONTACTO</a>
        </li>
      </ul>
    </div>
    <div className="logo">
       <p>MARLEX <br/> BRANDO</p>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
 