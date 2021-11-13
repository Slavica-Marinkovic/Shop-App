import React from 'react'
import { link } from 'react-router-dom'
import classes from './About.module.css'
import Footer from '../../Components/Footer'
import Navigationbar from '../../Components/NavigationBar'

function About() {
  return (
    <React.Fragment>
      <Navigationbar />
      <div className={classes.container}>
        <div className={classes.text}>
          <div>
            <h1>Our</h1>
            <h1>Company</h1>
            <h2>Company</h2>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            earum? At, dolores. Minus cupiditate qui expedita eius eaque
            consectetur animi rem dolore reprehenderit quia numquam iure, dicta
            asperiores, cumque quasi, enim facere hic quibusdam quam aperiam
            assumenda earum debitis? Deserunt hic, error dicta corrupti fugiat
            tempora quas quisquam. Placeat, nesciunt?
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            earum? At, dolores. Minus cupiditate qui expedita eius eaque
            consectetur animi rem dolore reprehenderit quia numquam iure, dicta
            asperiores, cumque quasi, enim facere hic quibusdam quam aperiam
            assumenda earum debitis? Deserunt hic, error dicta corrupti fugiat
            tempora quas quisquam. Placeat, nesciunt?
          </p>
        </div>
        <div className={classes.img}>
          <div className={classes.img1}>1</div>
          <div className={classes.img2}>2</div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About
