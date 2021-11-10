import React from 'react'
import { link } from 'react-router-dom'
import classes from './Cart.module.css'
import Footer from '../../Components/Footer'
import Navigationbar from '../../Components/NavigationBar'


function Cart(){
    return (
        <React.Fragment>
            <Navigationbar />
            <Footer />
        </React.Fragment>
    )
}
export default Cart