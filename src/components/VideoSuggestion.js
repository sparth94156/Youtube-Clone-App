import React from 'react'

const VideoSuggestion = ({ info }) => {

    const { snippet, statistics } = info;
    const { thumbnails, title, channelTitle } = snippet
    const { viewCount } = statistics;   

    const stringArray = title.split(' ')

    return (
        <div className='w-[100%] flex mb-3'>
            <div className='w-[40%]'>
                <img alt='thumbnail' src={thumbnails.standard.url} className='object-cover w-full rounded-lg cursor-pointer'></img>
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
    )
}

export default VideoSuggestion
