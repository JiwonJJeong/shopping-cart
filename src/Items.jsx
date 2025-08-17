import ItemCard  from "./ItemCard.jsx"
import { Link, useOutletContext } from 'react-router-dom';
import CartItem from "./CartItem.jsx"

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
        </>
    )
}