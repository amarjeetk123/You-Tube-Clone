import React from 'react'
import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { fetchFromApi } from '../utils/fetchFromApi'

import { SideBar , Videos} from "./"
import "./style.css"

function Feed() {

  const [selectedCategory , setSelectedCategory] = useState('New')
  const [videos  , setVideos] = useState([])

  useEffect( ()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }} >
        <SideBar selectedCategory = {selectedCategory}    setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright'  sx={{mt:1.5 , color:"#fff"}}   >

          @CopyRight 2022 A.K
      
        </Typography>
      </Box>



      <Box  p={2} sx={{overflowY:"auto"  , height:"88vh" , flex:2 }} >
        <Typography variant='h4' fontWeight="bold"   sx={{color:"#ffffff"}} > 
        {selectedCategory} <span style={{color:"#ff0000"}}> Video </span>
        </Typography>

        <Videos className="abcd" videos={videos} />
        

      </Box>

    </Stack>
  )
}

export default Feed 


// selectedCategory   