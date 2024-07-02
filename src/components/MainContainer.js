import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex-col pl-[74px] mt-14 w-screen overflow-x-clip'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
