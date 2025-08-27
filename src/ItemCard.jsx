import { Link } from 'react-router-dom';

export default function ItemCard({img, title, boughtCount, setBoughtCount, price, id}) {
  return (
    <article>
      <Link to={`/item/${id}`}>
      <img src={img} height="200px"></img>
      <h2>{title}</h2>
      </Link>
      <p className="price"><span>$</span>{price.toFixed(2)}</p>
      <button className="buy-button" onClick={()=>{
        console.log(`add ${title } to cart`);
        setBoughtCount(boughtCount+1)}}>Add to Cart</button>
    </article>
  );
}
