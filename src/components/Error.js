import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const response = useRouteError()
    const { message } = response?.error;

    return (
        <div className='pt-20 ml-10'>
            <p className='text-2xl'>Oops! Looks Like you've encountered an error😥</p>
            <h2 className='text-2xl'>{message}</h2>
        </div>
    )
}

export default Error
