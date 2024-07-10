import React, { useCallback, useEffect, useState } from 'react'
import { YOUTUBE_API } from './constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addVideos } from '../utils/videoSlice'

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  const fetchVideos = useCallback(async (pageToken = '') => {

    setLoading(true);
    try {
      const response = await fetch(YOUTUBE_API + '&pagetoken=' + pageToken)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json()
      setVideos((prevVideos) => [...prevVideos, ...json.items]);
      setNextPageToken(json.nextPageToken);
      console.log(json)
      dispatch(addVideos(json.items))
    }
    catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500 && !loading) {
      fetchVideos(nextPageToken);
    }
  }, [fetchVideos, loading, nextPageToken]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (!videos) return;

  return (
    <div className=''>
      <div className='mt-6 py-2 mx-6 flex flex-wrap gap-x-[21px] gap-y-10 w-screen'>
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
        {loading && <div className="text-center mt-4">Loading...</div>}
    </div>
  )
}

export default VideoContainer
