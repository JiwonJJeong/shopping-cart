import { Link, useParams, useOutletContext } from "react-router-dom";
import CartAside from "./CartAside";
import "./styles/Item.css"

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
        <img src={specificItem.img} width="350px"></img>
        <div>
        <p className='description'>{specificItem.description}</p>
        <p className="price"><span>$</span>{specificItem.price.toFixed(2)}</p>
        <button className="buy-button" onClick={incrementBoughtCountOfSpecific}>Add to Cart</button>
        </div>
      </main>
      <CartAside></CartAside>
    </>
  );
}
