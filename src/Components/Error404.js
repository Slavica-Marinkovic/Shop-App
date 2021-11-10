import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>ERROR 404</h1>
      <Link to="/" exact>
        Go back
      </Link>
    </div>
  )
}

export default Error404
