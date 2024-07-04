
const VideoCard = ({ info }) => {
    const { snippet, statistics, contentDetails } = info;
    const { title, channelTitle, thumbnails } = snippet;
    const { viewCount } = statistics;
    const { licensedContent } = contentDetails;

    const stringArray = title.split(' ')
    return (
        <div className='flex-col w-[370px] h-[330px] rounded-lg '>
            <div className='h-[60%] w-full'>
                <img src={thumbnails.high.url} className='h-[100%] w-[100%] rounded-2xl hover:rounded-none object-cover cursor-pointer' alt='thumbnail' />
            </div>
            <div className='h-[40%] flex'>
                <div className='w-[10%] flex mt-1'>
                    <img src='' alt='' className='w-8 h-8 bg-gray-400 rounded-full mt-4 cursor-pointer object-cover' />
                </div>
                <div className='w-[80%] bg-white mt-4 cursor-pointer font-roboto flex-col  '>
                    <div className='h-[45%] flex flex-nowrap '>
                        {
                            stringArray.length >= 12 ? (<p className='font-semibold flex flex-nowrap overflow-y-clip'>{title}</p>)
                                :
                                (<p className='font-semibold mb-1 flex flex-nowrap'>{title}</p>)
                        }
                    </div>
                    <div className="flex gap-x-1">
                        <span className='text-sm text-gray-500 mt-0'>{channelTitle} </span>
                        <span className="mt-[2px]">
                            {
                                licensedContent && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" />
                                    </svg>
                                )
                            }
                        </span>
                    </div>
                    <p className='text-sm text-gray-500'>{Math.floor(viewCount / 1000)}K views</p>
                </div>
                <div className='w-[10%] flex justify-end px-2 mt-4'>
                    <div className='cursor-pointer'>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default VideoCard
