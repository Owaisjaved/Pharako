import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

import M from 'materialize-css'
export const Photos = (item) => {
  const [cart, setCart] = useContext(CartContext);
  const [isCardView, setState] = useState(false)
  
//Handle Icon Toggle  
const toggleclick=()=>{
  setState({ isCardView: !isCardView })
  M.toast({ html: 'Loved' })
}
//Handle AddToCart
  const addToCart = () => {
    const tshirt = { url: item.url, id: item.id };
    setCart(currentState => [...currentState, tshirt]);
    //  console.log(tshirt)
    M.toast({ html: 'Picture Has Been Added to Cart' })
  }

  return (

    <div className="container">
      <img src={item.url} alt="Gallery"></img>
      <h3> {item.price} </h3>
      <button className="button" onClick={toggleclick}>
        {isCardView
          ? <span style={{ color: "red" }} className="ri-heart-fill favorite" />
          : <span style={{ color: "red" }} className="ri-heart-line favorite" />
        }

      </button>

      <button className="button" style={{ float: "right" }} onClick={addToCart}><i className="material-icons">add</i></button>
      <hr />
    </div>
  )
}