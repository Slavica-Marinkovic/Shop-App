import React from 'react'
import classes from './Styles/navigationbar.module.css'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarPrimary}>
        <h1 id="logo">
          <Link to="/">logo</Link>
        </h1>
        <div className={classes.search}>
          <Link to="/cart">
            <div className={classes.cartIconWrapper}>
              <AddShoppingCartSharpIcon
                className={classes.AddShoppingCartSharpIcon}
              />
            </div>
          </Link>
          <input
            type="text"
            className={classes.searchBar}
            placeholder="What are you looking for?"
          />
          <button type="submit" className={classes.searchBtn}>
            Search
          </button>
          
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
