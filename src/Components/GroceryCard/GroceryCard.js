import React from 'react'
import classes from './GroceryCard.module.css'

const GroceryCard = (props) => {
  return (
    <div className={classes.ItemCard} onClick={props.click}>
      <div className={classes.ProductImg}>
        <img
          src={props.image}
          alt={props.name}
          className={classes.ProductImage}
        />
      </div>
      <div className={classes.ProductDetails}>
        <div>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default GroceryCard
