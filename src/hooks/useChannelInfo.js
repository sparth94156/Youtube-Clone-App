import { useEffect, useState } from "react"
import { YOUTUBE_API_KEY } from "../components/constants"

const useChannelInfo = (queryParams) => {

    const [videoInfo, setvideoInfo] = useState(null)

    const getMovieInfo = async () => {
        const info = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+ queryParams + '&key='+ YOUTUBE_API_KEY)
        const json = await info.json()
        setvideoInfo(json.items)
        // console.log(json)
    }
  
    useEffect(() => {
      getMovieInfo()
    },[])

  return videoInfo;
}

export default useChannelInfo
