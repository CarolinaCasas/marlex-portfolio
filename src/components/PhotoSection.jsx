import React, { useState } from "react";

function PhotoSection({ photos }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (src) => {
    console.log("src", src)
    setSelectedImage(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };
  return (
    <div className="row">
      {photos && photos.length > 0 ? (
        photos.map((photo, index) => (
        <div  key={index} className="col-3" >
          <img
            key={photo.id}
            src={photo.src}
            onClick={() => handleImageClick(photo.src)}
            className="img-fluid m-1 custom-img"
            alt={photo.alt}           
          /> 
          </div>
         
        ))

      ) : (
        <p>No hay fotos</p>
      )}

{modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Imagen en modal" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        </div>
      )}

    </div>
  );
}

export default PhotoSection;