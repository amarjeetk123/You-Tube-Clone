import axios from "axios";

const Base_Url = "https://youtube-v31.p.rapidapi.com"

const options = {
    
    url: Base_Url,
    params: { videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url) =>{
    const {data}=  await axios.get(`${Base_Url}/${url}` , options);
    return data;
   }

  // above options object is coming from Rapid Api website which allow me to use this fro free for 500 days
  // https://rapidapi.com/ytdlfree/api/youtube-v31  and email= amarjeet123del@gmail.com