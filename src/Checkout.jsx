import { useOutletContext } from "react-router-dom";

export default function Checkout() {
  const { items, boughtCounts } = useOutletContext();
  
  function handleCheckout (){
    alert("This feature is not implemented in this project. Thank you!")
  }

  return (
    <div>
      <p>This is checkout.</p>
      <ul>
        {Object.entries(boughtCounts)
          .filter(([_, val]) => val > 0)
          .map(([key, val]) => (
            <li key={key}>
              <p>{items[key - 1].title}</p>
              <img src={items[key - 1].img}></img>
              <p>Count: {val}</p>
              <p>${(items[key - 1].price * val).toFixed(2)}</p>
            </li>
          ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
