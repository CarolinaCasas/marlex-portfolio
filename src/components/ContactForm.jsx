import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div class="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label for="email">Nombre</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label for="email">tuemail@ejemplo.com</label>
            </div>
            <div class="mb-3 form-floating">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Escribe tu mensaje"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label for="floatingTextarea">Mensaje</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
