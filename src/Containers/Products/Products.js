import React, { useEffect, useState } from 'react'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import NavigationBar from '../../Components/NavigationBar'
import data from '../../Components/data'
import classes from './Products.module.css'
import Modal from '../../Components/Modal/Modal'
import Pagination from '@material-ui/lab/Pagination'

const Products = () => {
  const [items, setItems] = useState(data.vegetables)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [showValue, setShowValue] = useState({})
  const [showModal, setShowModal] = useState(false)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  const vegetableList = currentItems.map((product) => {
    return (
      <GroceryCard
        key={Math.random()}
        name={product.name}
        price={product.price}
        image={product.image}
        click={() => showData(product)}
      />
    )
  })

  const showData = (product) => {
    setShowValue(product)
    setShowModal(true)
  }

  console.log(showValue)

  const closeModal = () => {
    setShowModal(false)
  }

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  console.log(showModal)

  return (
    <div>
      <NavigationBar />
      <div className={classes.Wrapper}>
        <h2
          style={{
            fontSize: '50px',
            fontWeight: '400',
            marginBottom: '2rem',
          }}
        >
          Vegetables
        </h2>
        <div className={classes.Top}>
          <div className={classes.Categories}>
            <div>Category 1</div>
            <div>Category 2</div>
            <div>Category 3</div>
            <div>Category 4</div>
            <div>Category 5</div>
          </div>
          <div className={classes.Input}>
            Search:{' '}
            <input
              style={{
                marginLeft: '1rem',
                height: '25px',
                border: '1px solid black',
              }}
              type="text"
            ></input>
          </div>
        </div>
        <div className={classes.Cards}>{vegetableList}</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            marginTop: '1rem',
          }}
        >
          <Pagination
            count={pageNumbers.pop()}
            onChange={(event, val) => setCurrentPage(val)}
            variant="outlined"
            shape="rounded"
            size="large"
          />{' '}
        </div>
      </div>
      <Modal
        modalClosed={closeModal}
        show={showModal}
        name={showValue.name}
        image={showValue.image}
        price={showValue.price}
      ></Modal>
    </div>
  )
}

export default Products
