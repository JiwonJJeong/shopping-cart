import { Link, useOutletContext } from 'react-router-dom';

export default function CartAside() {
    const [boughtCounts, items, changeBoughtCountOfId] = useOutletContext();

    return(
        <aside>
        <h2>Cart</h2>
        {Object.entries(boughtCounts).filter(([_,val])=>val > 0).map(([key,val])=>
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
    )
}