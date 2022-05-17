import React from 'react'
import Item from './Item'
import Donut from "../products/product/Donut";
import Cupcake from '../products/product/Cupcake';


export const Cart = () => {
    return (
      <div className="p-11 m-12">
       <Item model={<Donut />}/>
       <Item model={<Cupcake />}/>
      </div>
    );
}
