import { Link } from "react-router-dom";

export default function Header(){


    return (
        <header>
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