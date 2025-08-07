import OdinPng from "./assets/odin-lined.png"
import { Link } from "react-router-dom";

export default function Home(){


    return (
        <section>
            <img src={OdinPng}></img>
            <h1>The Odin Shop</h1>
            <p>The best place to shop for web devs.</p>
            <Link to="/items">See Products</Link>
        </section>
    )
}