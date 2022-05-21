import { SET_PROTUCTS } from "../actionTypes"
import Cake from "../../components/products/product/Cake"
import Donut from "../../components/products/product/Donut"
import Cupcake from "../../components/products/product/Cupcake";
import PinkDonut from "../../components/products/product/PinkDonut";
import Donuts from "../../components/products/product/Donuts";
// import ChocklateCake from "../../components/products/product/ChocklateCake";
// import StrawberryCake from "../../components/products/product/StrawberryCake";

const initialState = {
  products: [
    {
      id: 1,
      name: "Cake",
      price: 567,
      model: Cake,
      quantity: 1,
      materials: ["candals", "chocklates", "strawberry"],
      type: "cake",
      rating: 5,
    },
    {
      id: 2,
      name: "donut",
      price: 600,
      model: Donut,
      quantity: 1,
      materials: ["chocklate", "bread", "sprinklers"],
      type: "donut",
      rating: 5,
    },
    {
      id: 3,
      name: "Cupcake",
      price: 300,
      model: Cupcake,
      quantity: 1,
      materials: ["cherry", "bread", "sprinklers"],
      type: "cake",
      rating: 5,
    },
    {
      id: 4,
      name: "Pink Donut",
      price: 1000,
      model: PinkDonut,
      quantity: 1,
      materials: ["bread", "chesse", "sprinklers"],
      type: "donut",
      rating: 5,
    },
    {
      id: 5,
      name: "Donuts",
      price: 200,
      model: Donuts,
      quantity: 1,
      materials: ["chocklate", "bread", "sprinklers"],
      type: "donut",
      rating: 5,
    },
    // {
    //   id: 6,
    //   name: "Chocklate Cake",
    //   price: 200,
    //   model: ChocklateCake,
    //   quantity: 1,
    //   materials: [],
    //   type: "cake",
    //   rating: 5
    // },
    // {
    //   id: 5,
    //   name: "StrawberryCake",
    //   price: 200,
    //   model: StrawberryCake,
    //   quantity: 1,
    //   materials: [],
    //   type: "cake",
    //   rating: 5
    // },
  ],
};

export default function productReducer(state = initialState, { type, payload }){
    switch (type ){
        case SET_PROTUCTS:
            return {
                ...state
            }

        default: 
            return state

    }
}