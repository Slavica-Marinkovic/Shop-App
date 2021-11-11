import React from 'react'
import classes from './GroceryCard.module.css'

const GroceryCard = (props) => {
  return (
    <div className={classes.ItemCard}>
      <div className={classes.ProductImg} onClick={props.click}>
        <img
          src={props.image}
          alt={props.name}
          className={classes.ProductImage}
        />
      </div>
      <div className={classes.ProductDetails}>
        <div>
          <p>{props.name}</p>
          <p>{props.price}$</p>
        </div>
        <button style={{ cursor: 'pointer' }} onClick={props.addCart}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default GroceryCard
