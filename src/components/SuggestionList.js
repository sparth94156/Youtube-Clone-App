import React, { useMemo, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { YOUTUBE_API_KEY } from './constants'
import { nthPrime } from '../utils/helper'

const SuggestionList = () => {

  // const [searchQuery] = useSearchParams()
  // const [searchResults, setsearchResults] = useState(null)

  // const clickedQuery = searchQuery.get('q')


  // const fetchSuggestion = async () => {
  //   const data = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + clickedQuery + '&key=' + YOUTUBE_API_KEY)
  //   const json = await data.json()
  //   console.log(json)
  //   setsearchResults(json.items)
  // }

  // useEffect(() => {
  //   fetchSuggestion()
  // }, [])

  // if(!searchResults) return ;

  // const [count, setCount] = useState(50)
  // const element = []

  // useEffect(() => {

  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= window.scrollY - 10) {
  //       setCount(count + 50) // Just when the count updates the useffect will be called so count should be added in the dependencies
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll)

  // }, [count])

  // for (let i = 0; i < count; i++) {
  //   element.push(<div key={i}>{i + 1}</div>)
  // }

  // return (
  //   <main>
  //     {element}
  //     <h2>Loading...</h2>
  //   </main>
  // )

  const [isDark, setIsDark] = useState(false)
  const [text, setText] = useState(0)

  // useMemo caches a calculatedValue and its dependency is text so whenever the text updates only then it re renders the component
  const prime = useMemo(() => {
    console.log('calculate prime of ' + text)
    return nthPrime(text)
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className={'w-96 h-96 border border-slate-950 ' + (isDark && 'bg-black')}>
        <button className='bg-blue-600 p-2 m-5'
          onClick={() => setIsDark(!isDark)}>Toggle</button>
        <input type='number' className='border border-slate-600 p-2 m-5'
          onChange={handleChange}></input>
        <p className='m-5'>{prime}</p>
      </div>
    </div>
  )
}

export default SuggestionList
