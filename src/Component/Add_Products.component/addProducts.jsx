import React, { useState, useEffect } from "react";
import Product from "../Product.Component/Product";
import Products from "../Products.Component/products";

export default function AddProducts() {
  const [object, setObject] = useState({});
  const [listOfObject, setlistOfObject] = useState([]);

    const holdInputInfo = (event)=>{
        object[event.target.name] = event.target.value
    }


    const onClickFun = (e)=>{
        e.preventDefualt();
        setlistOfObject(listOfObject.push({...object}));

    }


  return (
    <div>
      <h2>Form To Add product</h2>
      Name Of Produnct:
      <input name="productName" type="text" onChange={holdInputInfo}></input>
      <br />
      Price:
      <input name="price" type="number" onChange={holdInputInfo}></input>
      <br />
      How many units?
      <input name="units" type="number" onChange={holdInputInfo}></input>
      <br />
      Is products is in Season?
      <input name="IfSeason" type="text" onChange={holdInputInfo}></input>
      <br />
      <button type="button" onClick={onClickFun}>Send</button>

      <div>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Product price</th>
                        <th>Product units</th>
                        <th>Product If in Season</th>
                    </tr>
                    {
                        listOfObject.map((pItem =>
                            <tr>
                                <td>{pItem.productName}</td>
                                <td>{pItem.price}</td>
                                <td>{pItem.units}</td>
                                <td>{pItem.IfSeason}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>


    </div>
    
  );
}
