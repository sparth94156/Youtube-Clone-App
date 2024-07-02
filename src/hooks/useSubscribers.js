import { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../components/constants'

const useSubscribers = (channelId) => {

    const [subscribers, setSubscribers ] = useState(null)

    useEffect(() => {
        getSubscriberInfo()
      },[])

    const getSubscriberInfo = async () => {
        const info = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id='+ channelId+ '&key='+ YOUTUBE_API_KEY)
        const json = await info.json()
        console.log(json)
        setSubscribers(json.items)
        // setSubscribers(json.items)
    }

    return subscribers;
 
}

export default useSubscribers
