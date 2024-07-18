import { HolaMundo } from "../Components/HolaMundo"
import { Menu } from "../Components/Menu";

export function Home() {
  return (
    <div>
        <Menu />
      <h1>Home</h1>
      <p>This is the home page</p>
      
        <HolaMundo nombre={"Ramon"} />
    </div>
  );
}