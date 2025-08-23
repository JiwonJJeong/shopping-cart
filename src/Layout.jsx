import Header from "./Header.jsx"
import { Outlet } from 'react-router-dom';
import {useState } from "react"
import useFetchData from "./Fetch.jsx"
import ErrorPage from "./ErrorPage.jsx"
import LoadingPage from "./LoadingPage.jsx"

export default function Layout(){
  const [boughtCounts, setBoughtCounts] = useState({}); // a dictionary of key as the id of bought item and value as number of bought
  // There is no item id 0 and item ids start at 1
  
  const [items, loading, error] = useFetchData();

      // use currying to do partial application on this function
      const changeBoughtCountOfId = id => newCount => {
        const newBoughtCounts = {...boughtCounts};
        newBoughtCounts[id] = newCount;
        setBoughtCounts(newBoughtCounts);
        console.log(`Item ${id} bought count: ${newCount}`)
    }

    return (
      <>
        <Header />
        {!loading && !error && <Outlet context={{boughtCounts, items, changeBoughtCountOfId}}/>}
        {loading && !error && <LoadingPage/>}
        {error != false && <ErrorPage/>}
      </>
    );
  };
  