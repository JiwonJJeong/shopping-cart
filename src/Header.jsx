import { Link } from "react-router-dom";
import "./styles/Header.css"

export default function Header(){


    return (
        <header className="page">
            <h1>The Odin Shop</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/items">Items</Link></li>
                    <li><Link to="/checkout">Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}