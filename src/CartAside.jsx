import { Link, useOutletContext } from 'react-router-dom';
import CartItem from "./CartItem.jsx"

export default function CartAside() {
    const {boughtCounts, items, changeBoughtCountOfId} = useOutletContext();

    // destructure (pattern matching) of the current value in reduce funtion with [...]
    const totalPrice = Object.entries(boughtCounts).reduce((sum, [id, count])=> sum + count * items[id].price, 0);

    return(
        <aside>
        <h2>Cart</h2>
        {(totalPrice > 0) && <p>Total: ${totalPrice}</p>}
        <Link to="/checkout">Go to Cart</Link>
        {Object.entries(boughtCounts).filter(([_,val])=>val > 0).map(([key,val])=>
            <CartItem
                key={key}
                img={items[key-1].img}
                price={items[key-1].price}
                boughtCount={val}
                setBoughtCount={(newCount)=>changeBoughtCountOfId(key)(newCount)}
            />)
        }
        </aside>
    )
}