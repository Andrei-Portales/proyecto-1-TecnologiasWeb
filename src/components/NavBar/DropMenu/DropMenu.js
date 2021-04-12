import React from "react";
import "./DropMenu.scss";
import addIcon from "../../../assets/icons/add-icon.svg";

const dropMenu = (props) => {
  return (
    <div className="drop-down-menu">
      <div className="menu-section">
        <ul>
          <li>Lista de seguimiento</li>
          <li>Cuenta y configuracion</li>
          <li>Dispositivos compatibles</li>
          <li>Ayuda</li>
          <li>¿No eres Andrei? Cerrar sesion</li>
        </ul>
      </div>
      <div className="divider-vertical" />
      <div className="menu-section">
        <ul>
          <li>
            <div className="list-item-with-icon">
              <img
                src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png"
                alt="Star avatar"
                className="star-avatar"
              ></img>
              <div>Infantil</div>
            </div>
          </li>
          <li>
            <div className="list-item-with-icon">
              <div className="add-avatar">
                <img src={addIcon} alt="Add Icon"></img>
              </div>
              <div>Añadir perfil</div>
            </div>
          </li>
          <li>Editar perfiles</li>
          <li>Mas infomacion</li>
        </ul>
      </div>
    </div>
  );
};

export default dropMenu;
