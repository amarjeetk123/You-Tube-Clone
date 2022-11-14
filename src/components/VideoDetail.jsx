import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import ReactPlayer from "react-player"

import { Videos } from "./"
import { fetchFromApi } from "../utils/fetchFromApi"


function VideoDetail() {

  const [videos, setVideos] = useState([]);  // this for left side recomnded videos list
  const [videoDetail, setVideoDetail] = useState(null)

  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  // console.log(videoDetail)
  if (!videoDetail?.snippet) return "Loading";
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight={"95vh"}>

      <Stack direction={{ xs: "column", md: "row" }} >
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "80px", pl: "16px" }} >

            <ReactPlayer width="100%" height={"65vh"} url={`https://www.youtube.com/watch?v=${id}`} controls />

            <Typography color="#fff" fontSize="32px" sx={{ mt: "12px", color: "red" }} >
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" >
              <Link>
                <Typography fontSize={{ sm: "18px", md: "22px" }} color="#ffffff">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "20px", ml: "4px" }} />
                </Typography>
              </Link>

              <Stack direction="row" gap={3} >
                <Typography fontSize={{ sm: "18px", md: "22px" }} color="#ffffff" sx={{ opacity: 0.8 }} >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography fontSize={{ sm: "18px", md: "22px" }} color="#ffffff" sx={{ opacity: 0.8 }} >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>

          </Box>



        </Box>

        {/* code for left section  */}

        <Box px={2} py={{ md: 1, xs: 5 }} display="flex" justifyContent="center" >
          <Videos videos={videos} direction="column" />

        </Box>

      </Stack>

    </Box>
  )
}
export default VideoDetail
