import React from "react";
import "./App.css";
import "./js/ContactManager";
class Contactos extends React.Component {
  render() {
    return (
      <div class="contenedor-contactos">
        <table class="tabla-contactos" id="tablaContactos">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody id="tablaCuerpo">
            <tr>
              <td>Brian</td>
              <td>Pelegrin</td>
              <td>829-360-7260</td>
            </tr>
            <tr>
              <td>Brian</td>
              <td>Pelegrin</td>
              <td>829-360-7260</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}

export default Contactos;
