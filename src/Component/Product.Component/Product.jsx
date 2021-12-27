import React , {useState , useEffect } from "react";
import Products from '../Products.Component/products'




export default function Product(props){



    return(
        <div>
            <h1>Store</h1>
        <p>{props.name} , {props.price} , {props.units} , {props.IfSeason}</p>
      </div>
    )
}