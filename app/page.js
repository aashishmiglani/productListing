"use client"
// import 'tailwindcss/tailwind.css';
// import "./globals.css";
import Navbar from "@/Components/Navbar";
import { AppContext } from "@/context/contextProvider"
import { useContext, useEffect } from 'react';
import axios from "axios";
// import ProductCard from "@/Components/ProductCard";
import ProductList from "@/Components/ProductList";
import Loader from "@/Components/Loader";

export default function Home() {
  const { loader, setLoader, data, setData } = useContext(AppContext);
  const { state } = useContext(AppContext);
  const { theme } = state;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data)
      setLoader(false)
    })

  }, [])
  return (
    <>
      <div className="mb-3">

        <Navbar />
      </div>

      {loader ?
        <div className="mb-3 " >


          <Loader />
        </div>

        :

        <div className="container mx-auto ">
          <ProductList products={data} theme={theme} />
        </div>

      }

    </>
  );
}
