import { useEffect, useState } from "react";
import { Menu } from "../Components/Menu";

export function Counter() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador === 5) return;
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador === 0) return;

    setContador(contador - 1);
  };

  useEffect(() => {
    console.log("Hola");
  }, [contador]);

  return (
    <>
      <Menu />
      <h3 className="text-3xl">Contador</h3>
      <p className="text-2xl">{contador}</p>
      <button
        onClick={() => sumar()}
        id="boton-mas"
        className={`text-2xl rounded-md ${
          contador === 5 ? "bg-slate-600" : "bg-green-700"
        } text-white py-2 px-4 ml-2`}
      >
        +
      </button>
      <button
        onClick={() => restar()}
        className={`text-2xl rounded-md ${
          contador === 0 ? "bg-slate-600" : "bg-red-600"
        } text-white py-2 px-4 ml-2`}
      >
        -
      </button>
    </>
  );
}
