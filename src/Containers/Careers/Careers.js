import React from 'react'
import classes from './Careers.module.css'
import NavigationBar from '../../Components/NavigationBar'
import Footer from '../../Components/Footer'

function Careers() {
  return (
    <>
      <NavigationBar />
      <div className={classes.container}>
        <h1>Careers</h1>
        <div className={classes.jobContainer}>
          <h2>Job Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptatem autem placeat, doloribus dolores deleniti sint aliquam
            quos at neque!
          </p>
          <h3>Requirements:</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className={classes.jobContainer}>
          <h2>Job Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptatem autem placeat, doloribus dolores deleniti sint aliquam
            quos at neque!
          </p>
          <h3>Requirements:</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers
