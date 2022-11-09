import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper , IconButton } from "@mui/material"


import SearchIcon from '@mui/icons-material/Search';
export default function Searchbar() {
  return (
    <Paper component="form" onSubmit ={ () => {} } sx={{borderRadius:5 , border:"1px solid #e3e3e3 " , pl:2, boxShadow:"none" , mr:{sm:5} }} >
        <input type="text" className='search-bar' placeholder='Search.....' value="" onChange={() => {}} />
       <IconButton type='submit' color='primary' sx={{p:"10px" , color:"red"}} >
        <SearchIcon />
       </IconButton>
    </Paper>
  )
}
