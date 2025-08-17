import { useState, useEffect } from "react";

export default function useFetchData() {
  const [itemData, setItemData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchOne = async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            { mode: "cors" }
          );
          if (response.status >= 400) {
            throw new Error("server error");
          }
          const responseObj = await response.json();
          const item = {
            id: responseObj.id,
            title: responseObj.title,
            price: responseObj.price,
            img: responseObj.image,
          };
          return item;
        };
        const fetchAll = async () => {
            return await Promise.all(Array.from({length:20}, (_,i)=>i+1).map((id)=>fetchOne(id)));
        }        
        setItemData(await fetchAll());
      } catch (error) {
        setError(error);
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data: itemData, loading, error };
}

