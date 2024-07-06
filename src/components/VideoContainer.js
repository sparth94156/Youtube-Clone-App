import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from './constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addVideos } from '../utils/videoSlice'

const VideoContainer = () => {

  const [videos, setVideos] = useState(null)

  const dispatch = useDispatch()

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    setVideos(json.items)
    dispatch(addVideos(json.items))
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  if (!videos) return;

  return (
    <div className='mt-6 py-2 mx-6 flex flex-wrap gap-x-[21px] gap-y-10  w-screen'>
      {
        videos.map(video => (
          <Link to={'/watch?v=' + video.id}
            key={video.id}>
            <VideoCard info={video} />
          </Link>
        )
        )
      }
    </div>
  )
}

export default VideoContainer
