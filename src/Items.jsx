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
            <aside>
                <h2>Cart</h2>
                {!loading && Object.entries(boughtCounts).filter(([_,val])=>val > 0).map(([key,val])=>
                    <CartItem
                        key={key}
                        img={items[key-1].img}
                        price={items[key-1].price}
                        boughtCount={val}
                        setBoughtCount={(newCount)=>changeBoughtCountOfId(key)(newCount)}
                    />)
                }
                <Link to="/checkout">Go to Cart</Link>
            </aside>
        </>
    )
}