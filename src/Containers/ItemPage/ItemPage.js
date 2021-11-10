import React, { useEffect, useState } from 'react'
import classes from './ItemPage.module.css'
import data from '../../Components/data'
import NavigationBar from '../../Components/NavigationBar'
import Footer from '../../Components/Footer'

const ItemPage = (props) => {
  const [currentProduct, setCurrentProduct] = useState({})
  useEffect(() => {
    setCurrentProduct({})
    data.vegetables.map((product) => {
      console.log(product)
      if (product.id.includes(props.match.params.product_id)) {
        setCurrentProduct(product)
      }
    })
  }, [props.match.params])

  return (
    <React.Fragment>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <NavigationBar />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div>
            {currentProduct.name !== undefined
              ? currentProduct.name
              : "This product doesn't exist"}
          </div>
          <div>{currentProduct.price}</div>
          <div>
            <img
              style={{ height: '200px', width: '200px' }}
              src={
                currentProduct.image !== undefined
                  ? currentProduct.image
                  : 'https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg'
              }
            />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default ItemPage
