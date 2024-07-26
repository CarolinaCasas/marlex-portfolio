import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    const modalStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
      },
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      },
    };
  
    if (!isOpen) return null;
  
    return (
      <div style={modalStyles.overlay} onClick={onClose}>
        <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>Cerrar</button>
          {children}
        </div>
      </div>
    );
  };

  export default Modal