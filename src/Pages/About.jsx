import { HolaMundo } from "../Components/HolaMundo";
import { Menu } from "../Components/Menu";

export function About() {
  return (
    <div>
    <Menu />
      <h1>About</h1>
      <p>This is the about page</p>
      <HolaMundo nombre={"Ramon"} />
    </div>
  );
}