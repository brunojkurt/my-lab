import { useState } from 'react'
import { DateTime } from 'luxon'
import styled from 'styled-components'
import { InputNumber, Button } from 'antd'

import Calendar from '../components/Calendar'

const Scheduler = () => {
  const today = DateTime.now()
  const [date, setDate] = useState({
    month: today.month,
    year: today.year
  })
  return (
    <Screen>
      <SideControlsWrapper>
        <ControlWrapper>
          <Button onClick={() => setDate(d => ({ ...d, month: d.month > 1 ? d.month - 1 : d.month }))}>
            -
          </Button>
          <InputNumber
            min={1} max={12}
            defaultValue={today.month}
            value={date.month}
            bordered={false}
            readOnly />
          <Button onClick={() => setDate(d => ({ ...d, month: d.month < 12 ? d.month + 1 : d.month }))}>
            +
          </Button>
        </ControlWrapper>
        <ControlWrapper>
          <Button onClick={() => setDate(d => ({ ...d, year: d.year - 1 }))}>
            -
          </Button>
          <InputNumber
            defaultValue={today.year}
            value={date.year}
            bordered={false}
            readOnly />
          <Button onClick={() => setDate(d => ({ ...d, year: d.year + 1 }))}>
            +
          </Button>
        </ControlWrapper>
      </SideControlsWrapper>
      <CalendarWrapper>
        <Calendar month={date.month} year={date.year} />
      </CalendarWrapper>
    </Screen>
  )
}
const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`
const SideControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 15vw;
  height: 100vh;
  background: rgba(0,0,0,0.17);
`
const CalendarWrapper = styled.div`
  width: 85vw;
  height: 100vh;
`
const ControlWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`

export default Scheduler