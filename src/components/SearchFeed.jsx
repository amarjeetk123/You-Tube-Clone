// import React from 'react'

// export default function SearchFeed() {
//   return (
//     <div>F</div>
//   )
// }

import React from 'react'
import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"

import { fetchFromApi } from '../utils/fetchFromApi'

import { Videos } from "./"

import {useParams} from "react-router-dom"

import "./searchFeeds.css"

function SearchFeed() {


  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box className='searchfeed_box' p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
      <Typography  variant='h4' fontWeight="bold" sx={{ color: "#ffffff" , marginBottom:"10px" }} > 
       Search result for:- <span style={{ color: "#ff0000" }}> {searchTerm} </span>
      </Typography>

      <Box >
      <Videos  videos={videos} className="video"  />
      </Box>


    </Box>
  )
}

export default SearchFeed


//    