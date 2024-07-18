import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Cards } from "./Pages/Cards";
import { Counter } from "./Pages/Counter";


export function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards /> } /> 
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}