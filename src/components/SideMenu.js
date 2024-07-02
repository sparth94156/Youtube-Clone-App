import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { showMenu } from '../utils/headerSlice'

const SideMenu = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(showMenu())
    }
    return (
        <div className='flex z-20'>
            <div className='grid-flow-row w-[18%] h-screen fixed px-2 shadow-lg z-20 bg-white mt-[56px] '>
                <Link to="/">
                <div className='grid-row-1 hover:bg-slate-200 py-[14px] mb-2 rounded-md cursor-pointer flex items-center px-2'>
                    <div className='pr-[14px] '>
                        <i class="fa-solid fa-house fa-lg"></i>
                    </div>
                        <div className='w-full'>
                            <span className='text-[16px] font-semibold'>Home</span>
                        </div>
                </div>
                </Link>
                <div className='grid-row-2 hover:bg-slate-200 py-[14px] mb-2 rounded-md cursor-pointer flex items-center px-2'>
                    <div className='pr-[14px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.5 4.5 0 0 0-2.402 4.193a4.52 4.52 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.53 4.53 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.49 4.49 0 0 0 2.39-4.192a4.53 4.53 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z" /></svg>
                    </div>
                    <div className='w-full'>
                        <span className='text-[16px] font-semibold'>Shorts</span>
                    </div>
                </div>
                <div className='grid-row-3 hover:bg-slate-200 py-[14px] mb-2 rounded-md cursor-pointer flex justify-start px-2'>
                    <div className='pr-[14px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8H4V6h16zm-2-6H6v2h12zm4 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-6 4l-6-3.27v6.53z" /></svg>
                    </div>
                    <div className='w-full'>
                        <span className='text-[16px] font-semibold '>Subscriptions</span>
                    </div>
                </div>
            </div>
            <div className='w-screen h-screen pt-[56px] ml-[18%] bg-black opacity-25 fixed' onClick={handleClick}>
                vfff
            </div>
        </div>

    )
}

export default SideMenu
