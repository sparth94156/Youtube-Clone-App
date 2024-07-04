import React from 'react'
import Button from './Button'

const List = ["All", 'Music', 'News', 'Mixes', 'Trailer', 'Japanese Cuisines', 'Restaurants', 'Thriller', 'Restaurants', 'Zoos', 'Anime', 'Cooking', 'Investing', 'React', 'Javescript', 'Comedy', 'Horror']

const ButtonList = () => {
  return (
      <div className='flex gap-x-3 py-4 px-5 overflow-x-scroll scrollbar-hide'>
        {
          // Not recommeded to use index as unique keys
          List.map((button, index) => <Button key={index} name={button} />)
        }
      </div>
  )
}

export default ButtonList
