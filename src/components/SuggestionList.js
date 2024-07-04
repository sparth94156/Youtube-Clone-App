import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_API_KEY } from './constants'
import Searchresult from './Searchresult'

const SuggestionList = () => {

  const [searchQuery] = useSearchParams()
  const [searchResults, setsearchResults] = useState(null)

  const clickedQuery = searchQuery.get('q')


  const fetchSuggestion = async () => {
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + clickedQuery + '&key=' + YOUTUBE_API_KEY)
    const json = await data.json()
    console.log(json)
    setsearchResults(json.items)
  }

  useEffect(() => {
    fetchSuggestion()
  }, [])

  if(!searchResults) return ;

  return (
  <div className='pt-20 flex flex-wrap gap-4'>
    {
      searchResults.map(result => <Searchresult info={result}/>)
    }
  </div>
  )

}

export default SuggestionList
