import { useState } from "react";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent"; //Importandolo

function App() {
  const [value, setValue] = useState(0); //

  setTimeout(() => {
    setValue(value + 1);
  }, 5000);

  console.log('App rendered')
  return (
    <>
      <h1>Vite + React</h1>
      <MyFirstComponent propOne={value} propTwo={2} propThree={{}} />
      {/*Todos los tipos de datos que queramos mandar*/}
      {/*PascalCase, quiere decir que se inicia el componente en mayuscula  */}
    </>
  );
}

export default App;
