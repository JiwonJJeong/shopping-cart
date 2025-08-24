import OdinPng from "./assets/odin-lined.png";
import { Link } from "react-router-dom";
import "./styles/Home.css";

export default function Home() {
  return (
    <section className="home">
        <div className="image">
        <img src={OdinPng}></img>
        </div>

      <div className="content">
        <p>Simplicity, elegance, peace</p>
        <hr></hr>
        <h1>The Shop for Web Devs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/items">See Products</Link>
      </div>
    </section>
  );
}
