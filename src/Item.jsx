import { Link, useParams, useOutletContext } from "react-router-dom";
import CartAside from "./CartAside";

export default function Item() {
  const { itemId } = useParams();
  const { items, changeBoughtCountOfId, boughtCounts } = useOutletContext();
  const id = Number(itemId);

  const specificItem = items[id - 1];
  const incrementBoughtCountOfSpecific = () =>
    changeBoughtCountOfId(id)(boughtCounts[id] + 1 || 1);

  return (
    <>
      <main>
        <Link to="/items">Back to items</Link>
        <h1>{specificItem.title}</h1>
        <img src={specificItem.img} height="400px"></img>
        <p><span>$</span>{specificItem.price.toFixed(2)}</p>
        <p>{specificItem.description}</p>
        <button onClick={incrementBoughtCountOfSpecific}>Add to Cart</button>
      </main>
      <CartAside></CartAside>
    </>
  );
}
