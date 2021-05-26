import { useEffect, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import styled from 'styled-components'

const Calendar = () => {
  const today = DateTime.now()
  const [daysInCurrMonth, setDaysInCurrMonth] = useState([])
  //const [selDay, setSelDay] = useState(today.day)
  const [yearMonth, setYearMonth] = useState({
    month: today.month,
    year: today.year,
  })
  const [yearMonthWeek, setYearMonthWeek] = useState({
    monthStarts: DateTime.local(today.year, today.month, today.day).weekdayLong,
    monthEnds: DateTime.local(today.year, today.month, today.daysInMonth).weekdayLong
  })
  const [dayCubeMeasures, setDayCubeMeasures] = useState({ width: 0 })
  const wrapper = useRef(null)

  useEffect(() => {
    const calcMeasures = () => {
      const wrapperWidth = wrapper.current.offsetWidth
      setDayCubeMeasures(measure => ({ ...measure, width: wrapperWidth / 7 }))  
    }

    if (wrapper.current) {
      calcMeasures()
    }
    window.addEventListener('resize', calcMeasures)
    
    return () => window.removeEventListener('resize', calcMeasures)
  }, [wrapper])

  useEffect(() => {
    const setDaysInTheMonth = () => {
      const d = DateTime.local(yearMonth.year, yearMonth.month)
      const monthStartWeekDay = DateTime.local(d.year, d.month, d.day).weekdayLong
      const monthEndWeekDay = DateTime.local(d.year, d.month, d.daysInMonth).weekdayLong
      const monthStartWeekIndex = Object.entries(weekDays).map(([key, _]) => key).indexOf(monthStartWeekDay)
      const monthEndWeekIndex = Object.entries(weekDays).map(([key, _]) => key).indexOf(monthEndWeekDay)
      console.log(monthStartWeekIndex, monthEndWeekIndex)
      setDaysInCurrMonth([...Array(d.daysInMonth).keys()].map(x => ++x))
    }

    setDaysInTheMonth()
  }, [yearMonth])
  
  return (
    <CalendarWrapper
      ref={wrapper}
      width={dayCubeMeasures.width}>
      { Object.entries(weekDays).map(([key, obj]) => (
        <WeekDay key={key}>{obj.label}</WeekDay>
      )) }
      { daysInCurrMonth.map((day, index) => (
        <DayCube key={`${index}-${day}`}>
          <CubeHeader>
            <CubeHeaderLabel curr={today.day === day}>
              {day}
            </CubeHeaderLabel>
          </CubeHeader>
        </DayCube>
      )) }
    </CalendarWrapper>
  )
}

const weekDays = {
  Sunday: {
    label: 'Dom'
  },
  Monday: {
    label: 'Seg'
  },
  Tuesday: {
    label: 'Ter'
  },
  Wednesday: {
    label: 'Qua'
  },
  Thursday: {
    label: 'Qui'
  },
  Friday: {
    label: 'Sex'
  },
  Saturday: {
    label: 'Sab'
  }
}

const CalendarWrapper = styled.div`
  background-color: #CCC;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: ${({ width }) => `repeat(7, ${width}px)`};
  padding: 1px;
`
const WeekDay = styled.div`
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: #FFF;
`
const DayCube = styled.div`
  background-color: #FFF;
  padding: 5px;
  height: 140px;
`
const CubeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const CubeHeaderLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  padding: 5px;
  background: ${({ curr }) => curr ? 'blue' : 'transparent'};
  color: ${({ curr }) => curr ? 'white' : 'black'};
`

export default Calendar