import { useSelector } from 'react-redux'
import SideMenu from './SideMenu'
import useChannelInfo from '../hooks/useChannelInfo'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import { useState } from 'react'
import VideoSuggestion from './VideoSuggestion'
import { numberWithCommas } from '../utils/helper'

const WatchPage = () => {

  const [showDesc, setShowDesc] = useState(false)
  const showMenu = useSelector(store => store.header.isMenuOpen)
  const [searchParams] = useSearchParams();
  const [showChat, setShowChat] = useState(false)
  const videoList = useSelector(store => store.video.popularVideos)
  console.log(videoList)

  const urlParams = searchParams.get('v')        // get method used to get search query of the URL

  //custom hook
  const videoInfo = useChannelInfo(urlParams)

  if (!videoInfo) return;

  const { snippet, statistics } = videoInfo[0];
  const { tags, localized } = snippet
  const { viewCount, commentCount } = statistics;


  return (
    <div>
      {
        showMenu && <SideMenu />
      }
      <div className='pt-20 mx-[86px] flex justify-between overflow-clip'>
        <div className='w-[640px]'>
          <div className='rounded-lg'>
            <iframe width="640" height="360"
              src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?autoplay=1"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className='rounded-lg'>
            </iframe>
          </div>
          <div className='w-[640px]'>
            <p className='text-xl font-semibold mt-3'>{snippet.title}</p>
            <div className='w-full py-2 flex'>
              <div className='flex items-center w-[50%]'>
                <img src='' alt='' className='w-9 h-9 bg-gray-400 rounded-full my-2 cursor-pointer object-cover' />
                <div className='ml-4 mr-8'>
                  <p className='font-semibold text-sm font-poppins'>{snippet.channelTitle}</p>
                  <p className='text-sm font-poppins'>10M subscribers</p>
                </div>
                <button className='border border-gray-400 hover:bg-slate-700 text-sm font-poppins py-2 px-4 rounded-full'>Subscribe</button>
              </div>
              <div className='w-[50%] flex items-center justify-end'>
                <button className='border border-gray-400 hover:bg-slate-700 py-2 px-4 rounded-s-full'><i class="fa-solid fa-thumbs-up"></i> {Math.floor(statistics.likeCount / 1000)}K</button>
                <button className='border border-gray-500 hover:bg-slate-700 py-2 px-4 rounded-e-full'><i class="fa-solid fa-thumbs-down"></i></button>
                <button className='border border-gray-500 hover:bg-slate-700 text-sm font-poppins py-2 px-4 rounded-full mx-3'>Share</button>
                <button className='border border-gray-500 hover:bg-slate-700 py-[5px] px-[10px]  rounded-full'><i class="fa-solid fa-ellipsis"></i></button>
              </div>
            </div>
            <div className='text-sm mb-3 p-2 rounded-lg'>
              <p className='font-semibold mb-2'>{numberWithCommas(viewCount)} views</p>
              {
                showDesc ? 
                (
                <div className='overflow-hidden h-[80px] my-2 py-2 rounded-lg leading-6'>
                  {localized.description}
                </div>
                ) : 
                (
                <div className='my-2 p-2 rounded-lg leading-6'>
                  {localized.description}
                </div>
                )
              }

              <button onClick={() => setShowDesc(!showDesc)}>
                {
                  showDesc ? 'Show More' : 'Show less'
                }</button>
            </div>
          </div>
          <p className='text-lg'>Comments ({commentCount})</p>
          <CommentsContainer />
        </div>

        <div className='w-[402px] flex-col'>
          <div className='w-full mb-10'>
            <button className='w-full p-2 rounded-full border border-gray-300 bg-slate-200 hover:bg-slate-300'
              onClick={() => {
                setShowChat(!showChat)
              }}>Show chat replay</button>
            {
              showChat && <LiveChat />
            }
          </div>
          <div className='flex overflow-y-scroll flex-nowrap gap-2 scrollbar-hide mb-4'>
            {
              // DON'T USE INDEX AS KEYS
              tags && tags.map((tag, index) => (
                <button key={index} className='bg-gray-800 text-white text-[14px] text-nowrap p-2 rounded-lg'>{tag}</button>
              ))
            }
          </div>
          <div className='w-[100%]'>
            {
              videoList.map(video => <VideoSuggestion key={video.id} info={video} />)
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default WatchPage
