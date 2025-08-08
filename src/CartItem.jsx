export default function CartItem({ img, price, boughtCount, setBoughtCount }) {
  function handleOptionChange(e) {
    const value = Number(e.target.value);
    if (value != boughtCount) {
      setBoughtCount(value);
    }
  }

  function handleUpdateCountClick(e) {
    e.preventDefault();
    const newBuyCount = e.target.previousSibling.value;
    setBoughtCount(newBuyCount);
  }

  function handleTrashClick(e) {
    e.preventDefault();
    setBoughtCount(0);
  }

  return (
    <article>
      <img src={img} height="100px"></img>
      <p>${price * boughtCount}</p>
      {boughtCount < 10 && (
        <select
          name="buy count"
          value={boughtCount}
          onChange={handleOptionChange}
        >
          {Array.from({ length: 9 }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
          <option key="10" value="10">
            10+
          </option>
        </select>
      )}
      {boughtCount >= 10 && (
        <form>
          <input type="number" defaultValue={boughtCount}></input>
          <button onClick={handleUpdateCountClick}>Update</button>
        </form>
      )}
      <button onClick={handleTrashClick}>🗑️</button>
    </article>
  );
}
