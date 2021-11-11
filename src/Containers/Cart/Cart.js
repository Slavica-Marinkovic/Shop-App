import React, { useEffect, useState } from 'react'
import { link } from 'react-router-dom'
import classes from './Cart.module.css'
import Footer from '../../Components/Footer'
import Navigationbar from '../../Components/NavigationBar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'

function Cart() {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch(actions.clearCart())
  }

  return (
    <React.Fragment>
      <Navigationbar />
      <button onClick={clearCart}>CLEAR CART</button>
      <div className={classes.mainDiv}>
        {cart.map((cartItem, index) => {
          return (
            <div key={index}>
              <div>
                <img
                  style={{ height: '200px', width: '200px' }}
                  src={cartItem.image}
                />
              </div>
              <div>{cartItem.name}</div>
              <div>{cartItem.price}</div>
              <div 
              style={{display: 'flex', columnGap: '5px', alignItems: 'center'}}
              >
              <button
                style={{padding: '5px 7px'}}
                onClick={() => {
                  dispatch(actions.addQuantity(index))
                }}
              >+</button>
              <div>{cartItem.quantity}</div>
              <button
                style={{padding: '5px 7px'}}
                onClick={() => {
                  dispatch(actions.subQuantity(index))
                }}
              >-</button>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default React.memo(Cart)
