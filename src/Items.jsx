import {useEffect, useState} from 'react';

export default function Items(){
    const [items, setItems] = useState([]);
    const [error, setError]= useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try{
            const fetchOne = async (id) => {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`, {mode:"cors"});
                if (response.status >= 400){
                    throw new Error("server error");
                }
                return response;
            }
            const fetchAll = async () => {
                return await Promise.all(Array.from({length:20}, (_,i)=>i+1).map((id)=>fetchOne(id)));
            }
            setLoading(true);
            const items = fetchAll().map((response)=> response.json())
                .map((obj)=> {obj.id, obj.title, obj.price, obj.image});
            setItems(items);
        } catch (error){
            setError(error);
            throw new Error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <>
            <p>This is items.</p>
        </>
    )
}