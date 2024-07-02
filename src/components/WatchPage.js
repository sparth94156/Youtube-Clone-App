import { useSelector } from 'react-redux'
import SideMenu from './SideMenu'
import useChannelInfo from '../hooks/useChannelInfo'
import { useSearchParams } from 'react-router-dom'
import useSubscribers from '../hooks/useSubscribers'

const WatchPage = () => {

  const showMenu = useSelector(store => store.header.isMenuOpen)
  const [searchParams] = useSearchParams();

  const urlParams = searchParams.get('v')        // get method used to get search query of the URL

  //custom hook
  const videoInfo = useChannelInfo(urlParams)

  if (!videoInfo) return;

  const { snippet, statistics } = videoInfo[0];
  const { tags, thumbnails, title, channelTitle } = snippet
  const { viewCount } = statistics;

  const stringArray = title.split(' ')
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
                  <p className='text-gray-400 text-sm font-poppins'>10M subscribers</p>
                </div>
                <button className='bg-gray-600 hover:bg-slate-700 text-sm font-poppins py-2 px-4 rounded-full'>Subscribe</button>
              </div>
              <div className='w-[50%] flex items-center justify-end'>
                <button className='bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-s-full'><i class="fa-solid fa-thumbs-up"></i> {Math.floor(statistics.likeCount / 1000)}K</button>
                <button className='bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-e-full'><i class="fa-solid fa-thumbs-down"></i></button>
                <button className='bg-gray-600 hover:bg-gray-700 text-sm font-poppins py-2 px-4 rounded-full mx-3'>Share</button>
                <button className='bg-gray-600 hover:bg-gray-700 py-[5px] px-[10px]  rounded-full'><i class="fa-solid fa-ellipsis"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[402px] flex-col'>
          <div className='w-full mb-10'>
            <button className='w-full bg-black text-white p-2 rounded-full'>Show chat replay</button>
          </div>
          <div className='flex overflow-x-scroll flex-nowrap gap-2 scrollbar-hide'>
            {
              tags && tags.map(tag => (
                <button className='bg-gray-800 text-white text-[14px] text-nowrap p-2 rounded-lg'>{tag}</button>
              ))
            }
          </div>
          <div className='w-[100%] my-4'>
            <div className='w-[100%] flex'>
              <div className='w-[40%]'>
                <img src={thumbnails.standard.url} className='object-cover w-full rounded-lg cursor-pointer'></img>
              </div>
              <div className='w-[59%] cursor-pointer pl-3'>
                <div>
                {
                  stringArray.length >= 8 ? (<span className='font-semibold text-[13px] flex flex-nowrap overflow-y-clip'>{title}</span>)
                    :
                    (<span className='font-semibold text-[13px] mb-1 flex flex-nowrap'>{title}</span>)
                }
                </div>
                <p className='text-[12px] mt-1 mb-0 p-0'>{channelTitle}</p>
                <span className='text-[12px]'>{Math.floor(viewCount / 1000)}K views . 1 day ago</span>
              </div>
              <div className='w-[1%] flex justify-end '>
                <div className='cursor-pointer'>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default WatchPage
