export default function ItemCard({img, title, boughtCount, setBoughtCount}) {
  return (
    <article>
      <img src={img}></img>
      <h2>{title}</h2>
      {(boughtCount > 0) && (
        <div className="buy buttons">
          <button onClick={() => setBoughtCount(boughtCount - 1)} aria-label="decrease buy count">-</button>
          <p>{boughtCount}</p>
          <button onClick={() => setBoughtCount(boughtCount + 1)} aria-label="increase buy count">+</button>
        </div>
      )}
      {(boughtCount == 0) && (
        <button onClick={() => setBoughtCount(1)}>Buy</button>
      )}
    </article>
  );
}
