import { useState } from "react";

//Declarando una funcion, las props se definen en los argumentos de la funcion
const MyFirstComponent = ({ propOne, propTwo, propThree }) => {
  //Estas props son object destructuring
  const [open, setOpen] = useState(0); //El open es el valor, y el setOpen su respectivo setter donde se actualiza
  const [hola, setHola] = useState("hola");

  console.log('MyFirstComponent rendered');

  return (
    <div id="1" className="myclassname">
      {hola}, este es un componente {open}
    </div>
  );
};

export default MyFirstComponent; //Hay que exportarlo
