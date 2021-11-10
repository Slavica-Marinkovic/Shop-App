import React from 'react'

import classes from './Modal.module.css'

import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? /*'translateY(0)'*/'' : 'translateX(-100vw)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <div className={classes.ProductImage}>
          <img
            className={classes.ProductImg}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={classes.Data}>
          <div className={classes.Heading} style={{ fontSize: '1.2rem' }}>
            <div>
              <h3 style={{ fontWeight: '500' }} className={classes.H3}>
                {props.name}
              </h3>
            </div>
            <div className={classes.Price}>${props.price} per kg</div>
          </div>
          <div className={classes.Text}>
            <p>
              Description: <br></br>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className={classes.Icon}>
            <div className={classes.IconText}>
              <div>
                <i
                  style={{ color: '#FF9642', fontSize: '40px' }}
                  className="fas fa-cart-plus"
                ></i>
              </div>
              <div style={{ fontSize: '15px' }}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(modal)
