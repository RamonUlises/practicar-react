import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="bg-black text-white">
      <ul className="flex gap-10 ">
        <li>
          <Link className="hover:text-green-400" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-green-400" to="/about">About</Link>
        </li>
        <li>
          <Link className="hover:text-green-400" to={"/cards"}>Cards</Link>
        </li>
        <li>
          <Link className="hover:text-green-400" to={"/counter"}>Counter</Link>
        </li>
      </ul>
    </nav>
  );
}