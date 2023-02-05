
import {Link} from "react-router-dom"
import { Typography, Card , CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl , demoVideoTitle , demoVideoUrl , demoChannelTitle , demoChannelUrl } from '../utils/constants'


const VideoCard = ({ video: { id: {videoId} , snippet  }  }) => {
 
  // console.log(videoId ,snippet)
 

  return (
    <Card className="main-card" sx={{borderRadius:"0px"}} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
      <CardMedia 
       image={snippet?.thumbnails?.high?.url} 
       alt={snippet?.title}
       sx={{width:"100%" , height:190}}
        />
        {/* <img src={ snippet ? snippet?.thumbnails?.high?.url : "https://pixnio.com/free-images/2017/12/19/2017-12-19-21-28-15.jpg" } className="video-image" /> */}
      </Link>
   
      <CardContent  sx={{background:"#1e1e1e" , height:"90px" }}>

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography fontSize={18} color="#ffffff" fontWeight={400} >
            {snippet?.title.slice(0,47) || demoVideoTitle} .....
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
          <Typography fontSize={15} color="#808080" fontWeight={600} display="flex" marginTop={1} >
            {snippet?.channelTitle.slice(0,12) || demoChannelTitle}
            <CheckCircle sx={{fontSize:22 , color:"#808080" , ml:1}} />
          </Typography>
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard