import {useEffect, useState} from 'react';
import ItemCard  from "./ItemCard.jsx"

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
                setBoughtCount={changeBoughtCountOfId(item.id)} // partial application
            />)}
        </>
    )
}