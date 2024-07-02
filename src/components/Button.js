import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 py-2 bg-gray-200 text-sm font-semibold rounded-lg text-nowrap hover:bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button
