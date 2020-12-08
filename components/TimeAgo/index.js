import { useState, useEffect } from 'react'
import moment from 'moment'

moment.locale('pt-br')

const TimeAgo = (props) => {
  const { date, live, interval } = props
  const [ timeAgo, setTimeAgo ] = useState('agora')

  useEffect(() => {
    const updateElapsedTime = () => {
      setTimeAgo(moment(date).fromNow())
    }
    
    if(live) {
      const updateInterval = setInterval(updateElapsedTime, interval || 60000)
      return () => clearInterval(updateInterval)
    }

  }, [live, interval, date])

  return timeAgo
}

export default TimeAgo