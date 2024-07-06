import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex p-2 items-center text-[14px]'>
            <img className='w-8 h-8 bg-black rounded-full'
                alt='profile'
                src='https://imgs.search.brave.com/1b1d7Ismv2CUaBaxvr6DvYK-Ok1r_W7KoTyGQomBUZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWxldmVuZm9ydW0u/Y29tL2RhdGEvYXR0/YWNobWVudHMvODIv/ODI1MjktYWRlNjNl/NDIwOTcwOTI5MjE4/M2Y2NTQ5MDdiMTY4/ZjUuanBn' />
            <span className='ml-3 mr-2 font-semibold'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage
