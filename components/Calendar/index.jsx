import { useEffect, useRef, useState } from 'react'
import { DateTime, Settings as LuxonSettings, Info as LuxonInfo } from 'luxon'

import {
  CalendarWrapper,
  DayCube,
  CubeHeader,
  CubeHeaderLabel,
  WeekDay
} from './styles'

const Calendar = ({
  year = DateTime.now().year,
  month = DateTime.now().month,
  locale = 'en-US',
  schedules = []
}) => {
  LuxonSettings.defaultLocale = locale

  const weekdays = {
    short: [LuxonInfo.weekdays('short')[6], ...LuxonInfo.weekdays('short').slice(0, 6)],
    long: [LuxonInfo.weekdays('long')[6], ...LuxonInfo.weekdays('long').slice(0, 6)],
    narrow: [LuxonInfo.weekdays('narrow')[6], ...LuxonInfo.weekdays('narrow').slice(0, 6)]
  }

  const today = DateTime.now()

  const [daysInCurrMonth, setDaysInCurrMonth] = useState([])
  const [gridMeasures, setGridMeasures] = useState({ width: 0, height: 0, gap: 1, headerHeight: 30 })
  const wrapper = useRef(null)

  useEffect(() => {
    const calcMeasures = () => {
      const wrapperWidth = wrapper.current.offsetWidth
      const wrapperHeight = wrapper.current.offsetHeight
      setGridMeasures(measures => ({
        ...measures,
        width: wrapperWidth / 7,
        height: (wrapperHeight - measures.headerHeight - (measures.gap * 5)) / 6
      }))  
    }

    if (wrapper.current) {
      calcMeasures()
    }
    window.addEventListener('resize', calcMeasures)
    
    return () => window.removeEventListener('resize', calcMeasures)
  }, [wrapper])

  useEffect(() => {
    const setDaysInTheMonth = () => {
      const curr = DateTime.local(year, month)
      const prev = DateTime.local(curr.month === 1 ? curr.year - 1 : curr.year, curr.month === 1 ? 12 : curr.month - 1)
      const next = DateTime.local(curr.month === 12 ? curr.year + 1 : curr.year, curr.month === 12 ? 1 : curr.month + 1)
      const monthStartWeekDay = DateTime.local(curr.year, curr.month, curr.day).weekdayShort
      const monthEndWeekDay = DateTime.local(curr.year, curr.month, curr.daysInMonth).weekdayShort
      const monthStartWeekDayIndex = weekdays.short.indexOf(monthStartWeekDay)
      const monthEndWeekDayIndex = weekdays.short.indexOf(monthEndWeekDay)
      const prevTail = [...Array(prev.daysInMonth).keys()].map(x => ({ day: ++x, month: prev.month, year: prev.year })).slice(prev.daysInMonth - monthStartWeekDayIndex, prev.daysInMonth)
      const nextTail = [...Array(next.daysInMonth).keys()].map(x => ({ day: ++x, month: next.month, year: next.year })).slice(0, 6 - monthEndWeekDayIndex)
      
      setDaysInCurrMonth([...prevTail, ...[...Array(curr.daysInMonth).keys()].map(x => ({ day: ++x, month: curr.month, year: curr.year })), ...nextTail])
    }

    setDaysInTheMonth()
  }, [year, month])

  const isCurrentYear = (date) => {
    return today.year === date.year
  }

  const isCurrentMonth = (date) => {
    return (today.month === date.month &&
            today.year === date.year)
  }

  const isCurrentDay = (date) => {
    return (today.day === date.day &&
            today.month === date.month &&
            today.year === date.year)
  }
  
  return (
    <CalendarWrapper
      ref={wrapper}
      cubeWidth={gridMeasures.width}
      cubeHeight={gridMeasures.height}
      cubeGap={gridMeasures.gap}>
      { weekdays.short.map(wDay => (
        <WeekDay key={wDay}>
          {wDay}
        </WeekDay>
      )) }
      { daysInCurrMonth.map(date => (
        <DayCube key={`${date.day}-${date.month}`}>
          <CubeHeader>
            <CubeHeaderLabel
              currYear={isCurrentYear(date)}
              currMonth={isCurrentMonth(date)}
              currDay={isCurrentDay(date)}>
              {date.day}
            </CubeHeaderLabel>
          </CubeHeader>
        </DayCube>
      )) }
    </CalendarWrapper>
  )
}

export default Calendar