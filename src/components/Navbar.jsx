import React from 'react'
import { Stack } from "@mui/material"
import {Link} from "react-router-dom"

// import {logo} from "../utils/constants"
import logo from "../images/logo.png" 

import Searchbar from './Searchbar'

export default function Navbar() {
  return (
     < Stack direction="row" alignItems="ceter" p={2} 
     sx = {{position:"sticky" , background:"#000000" , top:"0" , justifyContent :"space-between" }} >
     
     <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

     <Searchbar />
     
     </Stack>
  )
}
