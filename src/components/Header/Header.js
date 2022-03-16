import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"

function header() {
  return (
    <div className="head">
        <Link to='/' className="title" > Quiz </Link>
    </div>
  )
}

export default header