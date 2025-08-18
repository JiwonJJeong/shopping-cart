import ItemCard  from "./ItemCard.jsx"
import { Link, useOutletContext } from 'react-router-dom';
import CartAside from "./CartAside.jsx"

export default function Items(){
    const [items, boughtCounts, changeBoughtCountOfId] = useOutletContext();

    return (
        <>
            {items.map((item) => <ItemCard
                key={item.id}
                img= {item.img}
                title={item.title} 
                price={item.price}
                boughtCount={boughtCounts[item.id]}
                setBoughtCount={(newCount)=>changeBoughtCountOfId(item.id)(newCount)} // partial application
            />)}
            <CartAside></CartAside>
        </>
    )
}