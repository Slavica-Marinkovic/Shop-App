import React from 'react'
import classes from './Styles/navigationbar.module.css'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp'
import mainLogo from '../Assets/main-logo.png'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarPrimary}>
        <div id="logo">
          <Link to="/"><img src={mainLogo}></img></Link>
        </div>
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
