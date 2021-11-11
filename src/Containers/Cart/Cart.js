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
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch(actions.clearCart())
  }

  useEffect(() => {
    let totalPrice = 0
    cart.map((item) => {
      totalPrice += item.price
    })
    setTotal(totalPrice)
  }, [cart])

  return (
    <div className={classes.Wrapper}>
      <Navigationbar />
      <div className={classes.mainDiv}>
        {cart.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <button className={classes.clearCart} onClick={clearCart}>
              CLEAR CART
            </button>
            <div
              style={{
                marginLeft: '2rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Total Price: {total}$
            </div>
          </div>
        )}
        {cart.map((cartItem, index) => {
          return (
            <div
              key={index}
              style={{
                border: '2px solid #ffe05d',
                padding: '1rem',
                borderRadius: '5px',
                marginBottom: '1rem',
              }}
            >
              <div>
                <img
                  style={{ height: '200px', width: '200px' }}
                  src={cartItem.image}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginBottom: '0.3rem' }}>{cartItem.name}</div>
                <div style={{ marginBottom: '0.3rem' }}>{cartItem.price}$</div>
                <div
                  style={{
                    display: 'flex',
                    columnGap: '5px',
                    alignItems: 'center',
                  }}
                >
                  <button
                    style={{
                      padding: '5px 8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '20px',
                      marginRight: '0.3rem',
                      transition: 'opacity 0.25s',
                    }}
                    className={classes.quantityButton}
                    onClick={() => {
                      dispatch(actions.addQuantity(index))
                    }}
                  >
                    +
                  </button>
                  <div>{cartItem.quantity}</div>
                  <button
                    style={{
                      padding: '5px 10px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '20px',
                      marginLeft: '0.3rem',
                      transition: 'opacity 0.25s',
                    }}
                    className={classes.quantityButton}
                    onClick={() => {
                      dispatch(actions.subQuantity(index))
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
export default React.memo(Cart)
