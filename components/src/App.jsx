import { useState } from "react";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent"; //Importandolo

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayOfPeople = [
  //Informacion de una API en forma de JSON
  {
    id: 1,
    name: "Uriel",
    age: 20,
  },
  {
    id: 2,
    name: "Juan",
    age: 24,
  },
  {
    id: 3,
    name: "Simon",
    age: 22,
  },
  {
    id: 4,
    name: "Alejo",
    age: 40,
  },
];

function App() {
  const [value, setValue] = useState(0); //

  const numberItems = arrayOfNumbers.map((item) => (
    <li key={`array-number-ite-${item}`}>{item}</li>
  )); //El item va a enumar la lista de array, con el key unico declarando cada uno de los elementos y siempre tiene que ir un key
  const peopleItem = arrayOfPeople.map((person) => (
    <li
      key={`array-person-item-${person.id}`}
    >{`${person.id}: ${person.name}`}</li> //Estos key provienen del person y hacen referencia a los atributos que se quieren mostrar
  )); //Debido a que cada uno de los elementos tiene un id como mapeo se le coloca eb el person.id

  return (
    <>
      <h1>Vite + React</h1>
      <MyFirstComponent propOne={value} propTwo={2} propThree={{}} />
      {/*Todos los tipos de datos que queramos mandar*/}
      {/*PascalCase, quiere decir que se inicia el componente en mayuscula  */}
      <ul>
        {numberItems} {/*Renderizado de las listas con map   */}
      </ul>
      <ul>{peopleItem}</ul>
    </>
  );
}

export default App;
