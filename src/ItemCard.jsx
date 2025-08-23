export default function ItemCard({img, title, boughtCount, setBoughtCount, price}) {
  return (
    <article>
      <img src={img} height="200px"></img>
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
      <button onClick={()=>{
        console.log(`add ${title } to cart`);
        setBoughtCount(boughtCount+1)}}>Add to Cart</button>
    </article>
  );
}
