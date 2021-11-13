import React from 'react'
import classes from './FAQs.module.css'
import NavigationBar from '../../Components/NavigationBar'
import Footer from '../../Components/Footer'

function FAQs() {
  return (
    <>
      <NavigationBar />
      <div className={classes.container}>
        <details>
          <summary>Question 1</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
        <details>
          <summary>Question 2</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
        <details>
          <summary>Question 3</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
        <details>
          <summary>Question 4</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
        <details>
          <summary>Question 5</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
      </div>
      <Footer />
    </>
  )
}

export default FAQs
