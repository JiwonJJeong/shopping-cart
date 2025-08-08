export default function ItemCard({img, title, boughtCount, setBoughtCount}) {
  return (
    <article>
      <img src={img} height="200px"></img>
      <h2>{title}</h2>
      <button onClick={()=>{
        console.log(`add ${title } to cart`);
        setBoughtCount(boughtCount+1)}}>Add to Cart</button>
    </article>
  );
}
