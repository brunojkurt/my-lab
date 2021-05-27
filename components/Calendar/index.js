import { useEffect, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import styled, { css } from 'styled-components'

const Calendar = ({ year = DateTime.now().year, month = DateTime.now().month }) => {
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
      const monthStartWeekDay = DateTime.local(curr.year, curr.month, curr.day).weekdayLong
      const monthEndWeekDay = DateTime.local(curr.year, curr.month, curr.daysInMonth).weekdayLong
      const monthStartWeekIndex = Object.entries(weekDays).map(([key, _]) => key).indexOf(monthStartWeekDay)
      const monthEndWeekIndex = Object.entries(weekDays).map(([key, _]) => key).indexOf(monthEndWeekDay)
      const prevTail = [...Array(prev.daysInMonth).keys()].map(x => ({ day: ++x, month: prev.month })).slice(prev.daysInMonth - monthStartWeekIndex, prev.daysInMonth)
      const nextTail = [...Array(next.daysInMonth).keys()].map(x => ({ day: ++x, month: next.month })).slice(0, 6 - monthEndWeekIndex)
      
      setDaysInCurrMonth([...prevTail, ...[...Array(curr.daysInMonth).keys()].map(x => ({ day: ++x, month: curr.month })), ...nextTail])
    }

    setDaysInTheMonth()
  }, [year, month])
  
  return (
    <CalendarWrapper
      ref={wrapper}
      cubeWidth={gridMeasures.width}
      cubeHeight={gridMeasures.height}
      cubeGap={gridMeasures.gap}>
      { Object.entries(weekDays).map(([key, obj]) => (
        <WeekDay key={key}>{obj.label}</WeekDay>
      )) }
      { daysInCurrMonth.map(date => (
        <DayCube key={`${date.day}-${date.month}`}>
          <CubeHeader>
            <CubeHeaderLabel
              curr={today.day === date.day && today.month === date.month}>
              {date.day}
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
  height: 100%;
  min-height: calc(5 * 140px);
  background-color: #CCC;
  padding: 1px;
  display: grid;
  grid-gap: ${({ cubeGap }) => cubeGap || 1}px;
  grid-template-rows: ${({ cubeHeight }) => cubeHeight >= 140 ? `
    30px repeat(auto-fit, minmax(${cubeHeight - 1}px, auto))
  ` : `
    30px repeat(5, auto)
  `};
  grid-template-columns: ${({ cubeWidth }) => `repeat(7, ${cubeWidth - 1}px)`};
`
const fadeInAnimation = css`
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`
const WeekDay = styled.div`
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: #FFF;
  ${fadeInAnimation}
  animation: fadein 300ms;
`
const DayCube = styled.div`
  background-color: #FFF;
  padding: 5px;
  ${fadeInAnimation}
  animation: fadein 300ms;
`
const CubeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 30px;
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