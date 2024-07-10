import React from 'react'
import SideMenu from './SideMenu'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const showMenu = useSelector(store => store.header.isMenuOpen)

  if (showMenu) return <SideMenu />

  return (
    <div className='grid-flow-row w-[72px] h-screen fixed z-20 mt-14 bg-white'>
      <div className='grid-row-1 hover:bg-slate-200 py-[14px] mb-2 rounded-md  cursor-pointer'>
        <div className='w-full flex justify-center my-3'>
          <i class="fa-solid fa-house fa-lg"></i>
        </div>
        <Link to="/">
          <div className='w-full flex justify-center mt-1'>
            <span className='text-[10px]'>Home</span>
          </div>
        </Link>
      </div>
      <div className='grid-row-2 hover:bg-slate-200 py-[14px] mb-2 rounded-md cursor-pointer'>
        <div className='w-full flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.5 4.5 0 0 0-2.402 4.193a4.52 4.52 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.53 4.53 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.49 4.49 0 0 0 2.39-4.192a4.53 4.53 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z" /></svg>
        </div>
        <div className='w-full flex justify-center mt-1'>
          <span className='text-[10px]'>Shorts</span>
        </div>
      </div>
      <div className='grid-row-3 hover:bg-slate-200 py-[14px] mb-2 rounded-md cursor-pointer'>
        <div className='w-full flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8H4V6h16zm-2-6H6v2h12zm4 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-6 4l-6-3.27v6.53z" /></svg>        </div>
        <div className='w-full flex justify-center mt-1'>
          <span className='text-[10px]'>Subscriptions</span>
        </div>
      </div>
      <div className='grid-row-4 hover:bg-slate-200 py-[14px] mb-2 rounded-md cursor-pointer'>
        <div className='w-full flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
          </svg>
        </div>
        <div className='w-full flex justify-center mt-1'>
          <span className='text-[10px]'>You</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar


