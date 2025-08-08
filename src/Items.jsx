import {useEffect, useState} from 'react';
import ItemCard  from "./ItemCard.jsx"
import { Link } from 'react-router-dom';
import CartItem from "./CartItem.jsx"

export default function Items(){
    const [items, setItems] = useState([]);
    const [error, setError]= useState(false);
    const [loading, setLoading] = useState(true);
    const [boughtCounts, setBoughtCounts] = useState({}); // a dictionary of key as the id of bought item and value as number of bought

    useEffect(() => {
        const fetchData = async()=> {
            try{
                const fetchOne = async (id) => {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {mode:"cors"});
                    if (response.status >= 400){
                        throw new Error("server error");
                    }
                    const responseObj = await response.json();
                    return responseObj;
                }
                const fetchAll = async () => {
                    return await Promise.all(Array.from({length:20}, (_,i)=>i+1).map((id)=>fetchOne(id)));
                }
                setLoading(true);
                const data = await fetchAll();
                const items = data.map((obj)=> ({id:obj.id, title:obj.title, price:obj.price, img:obj.image}));
                setBoughtCounts(items.reduce((acc, item) => ({...acc, [item.id]: 0}), boughtCounts))
                setItems(items);
            } catch (error){
                setError(error);
                throw new Error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // use currying to do partial application on this function
    const changeBoughtCountOfId = id => newCount => {
        const newBoughtCounts = {...boughtCounts};
        newBoughtCounts[id] = newCount;
        setBoughtCounts(newBoughtCounts);
        console.log(`Item ${id} bought count: ${newCount}`)
    }

    if (error){
        return (<p>There was a network error.</p>)
    }
    if (loading){
        return (<p>Loading...</p>)
    }


    return (
        <>
            {!loading && items.map((item) => <ItemCard
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
                        img={items[key].img}
                        price={items[key].price}
                        boughtCount={val}
                        setBoughtCount={(newCount)=>changeBoughtCountOfId(key)(newCount)}
                    />)
                }
                <Link to="/checkout">Go to Cart</Link>
            </aside>
        </>
    )
}