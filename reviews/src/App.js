import "./App.css";
import {Review} from "./componentes/Review"

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Reviews sobre Joystick 2022</h1>
      <Review 
        nombre="Diego Armando"
        pais="Argentina"
        imagen="steam"
        marca="Steam"
        reviews="Alta facha loro. Tengo el original de xbox one y la única diferencia es que es un poquito más liviano y este tiene unos botones extra atrás que están muy buenos. Tiene como un encastre más profundo para proteger la ficha mini usb para que no se doble. Si están indecisos comprenlo. Me fui a jugar the witcher 3 nv."
        altimagen="Foto de Steam" />
      <Review 
        nombre="Luis Sanchez"
        pais="Paraguay"
        imagen="xbox"
        marca="Xbox"
        reviews="El joystick más cómodo creado hasta el momento. Me re calenté y me compré el electric volt , teniendo el de la xbox series x y otro más. ¿era necesario? claramente no, pero acá estoy escribiendo sobre el mismo. El color es hermoso y soy un consumista empedernido."
        altimagen="Foto de Xbox" />
      <Review 
        nombre="Yasmin Elias"
        pais="Chile"
        imagen="ps4"
        marca="PlayStation"
        reviews="Muy bueno el joystick de la ps4 (v2), tiene una excelente calidad en los materiales ademas de ser ergonomico mantiene la estetica del original (v1) si bien cambia minimamente con el detalle de la luz en el panel tactil eso es solo cuestion de gustos, ya que jugar de noche en la oscuridad puede llegar a incomodar un poco por lo demas ni suma ni resta es practicamente el mismo concepto del (v1). Compren seguro que entre esta version y la anterior no hay ninguna diferencia."
        altimagen="Foto de PS4" />
      </div>
    </div>
  );
}

export default App;
