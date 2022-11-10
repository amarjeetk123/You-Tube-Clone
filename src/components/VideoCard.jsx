
import {Link} from "react-router-dom"
import { Typography, Card , CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl , demoVideoTitle , demoVideoUrl , demoChannelTitle , demoChannelUrl } from '../utils/constants'


const VideoCard = ({ video: { id: {videoId} , snippet  }  }) => {
 
  // console.log(videoId ,snippet)

  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
      <CardMedia 
       image={snippet?.thumbnails?.high?.url} 
       alt={snippet?.title}
       sx={{width:358 , height:180}}
        />
      </Link>
   
      <CardContent  sx={{background:"#1e1e1e" , height:"106px"}}>

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography fontSize={26} color="#ffffff" fontWeight={400} >
            {snippet?.title.slice(0,60) || demoVideoTitle}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
          <Typography fontSize={26} color="#ffffff" fontWeight={400} >
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle}
          </Typography>
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard