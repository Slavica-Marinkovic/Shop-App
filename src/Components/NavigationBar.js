import React, { useEffect, useState } from 'react'
import classes from './Styles/navigationbar.module.css'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp'
import mainLogo from '../Assets/main-logo.png'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavigationBar(props) {
  const [inputVal, setInputVal] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const [display, setDisplay] = useState('none')

  const cart = useSelector((state) => state.cart.cart)

  useEffect(() => {
    setShouldNavigate(false)
  }, [shouldNavigate])

  useEffect(() => {
    if (cart.length > 0) {
      setDisplay('block')
    } else if (cart.length === 0) {
      setDisplay('none')
    }
  }, [cart])

  if (shouldNavigate) {
    return <Redirect to={`/products/${inputVal}`} />
  }
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarPrimary}>
        <div id="logo">
          <Link to="/">
            <img src={mainLogo}></img>
          </Link>
        </div>
        <div className={classes.search}>
          <Link to="/cart">
            <div className={classes.cartIconWrapper}>
              <AddShoppingCartSharpIcon
                className={classes.AddShoppingCartSharpIcon}
              />
              <div
                className={classes.circle}
                style={{ display: display }}
              ></div>
            </div>
          </Link>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setInputVal(inputVal.toLowerCase().replace(' ', '-'))
              setShouldNavigate(true)
            }}
          >
            <input
              type="text"
              className={classes.searchBar}
              placeholder="What are you looking for?"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className={classes.searchBtn}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className={classes.navbarSecondary}>
        <ul className={classes.navbarLinks}>
          <li>Products</li>
          <li>by Category</li>
          <li>Popular</li>
          <li>Sale</li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
