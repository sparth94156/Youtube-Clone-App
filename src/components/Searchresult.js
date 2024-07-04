import React from 'react'

const Searchresult = ({info}) => {
    const { snippet } = info;
    const { title, channelTitle, thumbnails } = snippet;

    const stringArray = title.split(' ')
    return (
        <div className='w-[1040px] flex-col mx-auto align-middle bg-blue-400'>
          <div className='w-[100%] my-4'>
            <div className='w-[100%] flex'>
              <div className='w-[40%] h-[150px] bg-orange-500 flex justify-center '>
                <img alt='thumbnail' src={thumbnails.high.url} className='object-cover w-[50%] rounded-lg cursor-pointer'></img>
              </div>
              <div className='w-[59%] cursor-pointer pl-3'>
                <div>
                  {
                    stringArray.length >= 8 ? (<span className='font-semibold text-[20px] flex flex-nowrap overflow-y-clip'>{title}</span>)
                      :
                      (<span className='font-semibold text-[20px] mb-1 flex flex-nowrap'>{title}</span>)
                  }
                </div>
                <p className='text-[18px] mt-1 mb-0 p-0'>{channelTitle}</p>
              </div>
              <div className='w-[1%] flex justify-end '>
                <div className='cursor-pointer'>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>  
              </div>
            </div>
          </div>
        </div>
    )
}

export default Searchresult
