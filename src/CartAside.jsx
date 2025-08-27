import { Link, useOutletContext } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import "./styles/CartAside.css";

export default function CartAside() {
  const { boughtCounts, items, changeBoughtCountOfId } = useOutletContext();

  // destructure (pattern matching) of the current value in reduce funtion with [...]
  const totalPrice = Object.entries(boughtCounts).reduce(
    (sum, [id, count]) => sum + count * items[id - 1].price,
    0
  );

  return (
    <aside>
      <header>
        <h2>Cart</h2>
        {totalPrice > 0 && <p className="price">Total: <span>$</span>{totalPrice.toFixed(2)}</p>}
        <Link to="/checkout">Go to Cart</Link>
      </header>
      {Object.entries(boughtCounts)
        .filter(([_, val]) => val > 0)
        .map(([key, val]) => (
          <CartItem
            key={key}
            img={items[key - 1].img}
            price={items[key - 1].price}
            boughtCount={val}
            setBoughtCount={(newCount) => changeBoughtCountOfId(key)(newCount)}
          />
        ))}
    </aside>
  );
}
