import React, { useState, useEffect } from "react";
import Product from '../Product.Component/Product';
import AddProducts from '../Add_Products.component/addProducts';

export default function Products() {
  const [product , setProduct] = useState([
    { productName: "Orange", price: 100, units: 20, IfSeason: "Yes" },
    { productName: "Apple", price: 200, units: 30, IfSeason: "No" },
    { productName: "Grape", price: 300, units: 40, IfSeason: "Yes" },
  ]);

  useEffect(() => {
    alert("Hello");
  }, []);


const ShowProduct=()=>product.map((ele) =>{return <Product name={ele.productName}  price={ele.price}  units={ele.units}  IfSeason={ele.IfSeason}/> })
        

  return (
    <div>
     <ShowProduct/>
     <AddProducts/>
    </div>
  );
}
