import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {

  return (
    <div className='flex overflow-hidden'>
      <Sidebar/>
      <MainContainer/>
    </div>
  )
}

export default Body
