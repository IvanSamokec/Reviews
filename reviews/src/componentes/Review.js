import React from "react";
import "../stylesheets/Reviews.css";

export function Review(props) {
  
  return (
    <div className="contenedor-reviews">
      <img 
        className="imagen-reviews"
        src={require(`../imagenes/Joystick-${props.imagen}.png`)}
        alt={props.alt} />
      <div className="contenedor-texto-reviews">
        <p className="nombre-reviews">
          <strong>{props.nombre}</strong> desde <strong>{props.pais}</strong>
        </p>
        <p className="texto-reviews">
          "{props.reviews}"
          </p>
      </div>
    </div>
  );

}

