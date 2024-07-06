import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { GenerateName } from '../utils/helper'
import { GenerateMessage } from '../utils/helper'

const liveMessage = [{
    name: 'Parth',
    message: 'Lorem ipsum hello world'
}]

const LiveChat = () => {

    const [liveChat, setLiveChat] = useState('')
    const dispatch = useDispatch()
    const liveMessage = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: GenerateName(),
                message: GenerateMessage(20)
            }))
        }, 1000)

        // Clear the interval when components unmounts
        return () => clearInterval(i)
    }, [])
    return (
        <div>
            <div className=' flex-row-reverse w-full h-[332px] overflow-y-scroll my-3'>
                {
                    liveMessage.map(chat => <ChatMessage name={chat.name} message={chat.message} />)
                }
            </div>
            <form className='w-full px-2 flex gap-x-2' onSubmit={(e) => {
                e.preventDefault()
                dispatch(addMessage({
                    name:'Parth',
                    message: liveChat
                }))
                setLiveChat('')
            }}>
                <input type='text' 
                value={liveChat}
                className='border border-gray-400 rounded-lg w-[70%] px-2 outline-none'
                onChange={(e) => setLiveChat(e.target.value)}>
                </input>
                <button className='bg-blue-500 px-4 py-1 rounded-lg text-white'>Send</button>
            </form>
        </div>
    )
}

export default LiveChat
