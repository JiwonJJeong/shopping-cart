import { useOutletContext } from "react-router-dom";
import "./styles/Checkout.css";

export default function Checkout() {
  const { items, boughtCounts, changeBoughtCountOfId } = useOutletContext();

  function handleCheckout() {
    alert("This feature is not implemented in this project. Thank you!");
  }

  const totalPrice = Object.entries(boughtCounts).reduce(
    (sum, [id, count]) => sum + count * items[id - 1].price,
    0
  ).toFixed(2);

  return (
    <div className='checkout'>
      <h1>Your shopping cart.</h1>
      <div className="cart">
        <ul>
          {Object.entries(boughtCounts)
            .filter(([_, val]) => val > 0)
            .map(([key, val]) => (
              <li key={key}>
                <div>
                  <p>{items[key - 1].title}</p>
                  <img src={items[key - 1].img}></img>
                </div>
                <div>
                  <div>
                  <p>Amount: {val}</p>
                  <button className='buy-button' onClick={()=>changeBoughtCountOfId(key)(val+1)}>+</button>
                  <button className='buy-button' onClick={()=>changeBoughtCountOfId(key)(val-1)}>-</button>
                  </div>
                  <p className='price'><span>$</span>{(items[key-1].price*val).toFixed(2)}</p>
                </div>
              </li>
            ))}
        </ul>
        <div className='checkout-button'>
          <p className='price'>Total: <span>$</span>{totalPrice}</p>
        <button className="buy-button" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
