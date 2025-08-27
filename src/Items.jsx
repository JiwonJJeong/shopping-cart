import ItemCard from "./ItemCard.jsx";
import { Link, useOutletContext } from "react-router-dom";
import CartAside from "./CartAside.jsx";
import "./styles/Items.css";

export default function Items() {
  const { items, boughtCounts, changeBoughtCountOfId } = useOutletContext();

  return (
    <>
      <main className="cards">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            boughtCount={boughtCounts[item.id] || 0}
            setBoughtCount={(newCount) =>
              changeBoughtCountOfId(item.id)(newCount)
            } // partial application
          />
        ))}
      </main>
      <CartAside></CartAside>
    </>
  );
}
