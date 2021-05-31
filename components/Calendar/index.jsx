import { useEffect, useMemo, useRef, useState } from 'react'
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

  const schedulesWithDateObjs = useMemo(() => schedules.map(schdl => ({
    ...schdl,
    start_date: DateTime.fromISO(schdl.date),
    end_date: DateTime.fromISO(schdl.date).plus({ days: schdl.daysRange })
  })), [schedules])

  const weekdays = {
    short: [LuxonInfo.weekdays('short')[6], ...LuxonInfo.weekdays('short').slice(0, 6)],
    long: [LuxonInfo.weekdays('long')[6], ...LuxonInfo.weekdays('long').slice(0, 6)],
    narrow: [LuxonInfo.weekdays('narrow')[6], ...LuxonInfo.weekdays('narrow').slice(0, 6)]
  }

  const [today, setToday] = useState(DateTime.now())

  const [daysInCurrMonth, setDaysInCurrMonth] = useState([])
  const [gridMeasures, setGridMeasures] = useState({ width: 0, height: 0, gap: 1, headerHeight: 20 })
  const wrapper = useRef(null)

  useEffect(() => {
    const watchDayChange = () => {
      if (today.day !== DateTime.now().day)
        setToday(DateTime.now().day)
    }
    
    const updateInterval = setInterval(watchDayChange, 1000)
    return () => clearInterval(updateInterval)
  }, [])

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
  }, [year, month, today])

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

  const isBetweenDates = (cubeDate, startDate, endDate) => {
    return startDate <= cubeDate && cubeDate <= endDate
  }

  const isValidWeekday = (cubeDate, recurrencyWeekdays) => {
    return recurrencyWeekdays.includes(cubeDate.setLocale('en-US').weekdayLong.toLowerCase())
  }

  const isValidRecurrency = (cubeDate, startDate, recurrency) => {
    switch (recurrency) {
      case 'daily':
        return true
      case 'weekly':
        return cubeDate.weekday === startDate.weekday
      case 'monthly':
        const monthsDiff = cubeDate.diff(startDate, 'months').toObject().months
        return cubeDate.day === startDate.plus({ month: monthsDiff }).day
      case 'annually':
        const yearsDiff = cubeDate.diff(startDate, 'years').toObject().years
        return cubeDate.day === startDate.plus({ year: yearsDiff }).day
      default:
        return false
    }
  }

  const isValidCustomRecurrency = (cubeDate, startDate, customRecurrency) => {
    switch (customRecurrency.frequency_unit) {
      case 'day':
        const daysDiff = cubeDate.diff(startDate, 'days').toObject().days
        return (daysDiff % customRecurrency.frequency_gap) === 0
      case 'week':
        console.log(cubeDate.weekday, cubeDate.weekdayLong)
        const cubeWeekStart = cubeDate.startOf('week')
          .plus({ weeks: cubeDate.weekday === 7 ? 1 : 0 }) // needed coz luxon weeks start on monday
        const startDateWeekStart = startDate.startOf('week')
          .plus({ weeks: startDate.weekday === 7 ? 1 : 0 }) // needed coz luxon weeks start on monday
        const weeksDiff = cubeWeekStart.diff(startDateWeekStart, 'weeks').toObject().weeks
        return (weeksDiff % customRecurrency.frequency_gap) === 0
      case 'month':
        const monthsDiff = cubeDate.diff(startDate, 'months').toObject().months
        return (monthsDiff % customRecurrency.frequency_gap) === 0
      case 'year':
        const yearsDiff = cubeDate.diff(startDate, 'years').toObject().years
        return (yearsDiff % customRecurrency.frequency_gap) === 0
      default:
        return false
    }
  }

  const isValidOnRecurrencyScope = (cubeDate, startDate, recurrency, customRecurrency) => {
    if (customRecurrency) {
      if (customRecurrency.frequency_unit === 'week') {
        return isValidWeekday(cubeDate, customRecurrency.weekdays) &&
          isValidCustomRecurrency(cubeDate, startDate, customRecurrency)
      }
      return isValidCustomRecurrency(cubeDate, startDate, customRecurrency)
    }
    return isValidRecurrency(cubeDate, startDate, recurrency)
  }

  const getDaySchedules = (date) => {
    const cubeDate = DateTime.local(date.year, date.month, date.day)
    return schedulesWithDateObjs.filter(schdl => {
      return isBetweenDates(cubeDate, schdl.start_date, schdl.end_date) &&
        isValidOnRecurrencyScope(cubeDate, schdl.start_date, schdl.recurrency, schdl.custom_recurrency)
    })
  }
  
  return (
    <CalendarWrapper
      ref={wrapper}
      headerHeight={gridMeasures.headerHeight}
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
          <ul>
          { getDaySchedules(date).map(schdl => (
            <li key={schdl.id}>
              {`${schdl.title} ${schdl.time.start_hour}:${schdl.time.start_minute} -\ 
                ${schdl.time.end_hour}:${schdl.time.end_minute}`}
            </li>
          )) }
          </ul>
        </DayCube>
      )) }
    </CalendarWrapper>
  )
}

export default Calendar