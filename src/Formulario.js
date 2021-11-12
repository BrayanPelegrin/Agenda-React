import { render } from "@testing-library/react";
import React from "react";
import react from "react";
import "./App.css";
class Formulario extends React.Component {
  render() {
    return (
      <div class="contenedor-formulario">
        <form id="formulario">
          <table class="tabla-formulario" id="tabla-formulario">
            <tr>
              <th class="fila-info">
                <img src="img/avatar.png" class="avatar" />
                <h2>Registro de Contactos</h2>
              </th>
              <th class="fila-form">
                <h2>Informacion del Contacto</h2>
                <br />
                <p align="left">Nombre*</p>
                <input type="text" id="nombre" placeholder="Nombre..." />
                <br />
                <p align="left">Apellido*</p>
                <input type="text" id="apellido" placeholder="Apellido..." />
                <br />
                <p align="left">Telefono*</p>
                <input type="text" id="telefono" placeholder="Telefono..." />
                <br />
                <button class="btn-guardar" onclick="enviarContactos()">
                  Guardar Contacto
                </button>
              </th>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default Formulario;
