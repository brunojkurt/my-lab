import styled, { css } from 'styled-components'

export const CalendarWrapper = styled.div`
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
export const WeekDay = styled.div`
  padding: 5px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  background-color: #FFF;
  color: rgba(0,0,0,.5);
  ${fadeInAnimation}
  animation: fadein 300ms;
`
export const DayCube = styled.div`
  background-color: #FFF;
  padding: 3px;
  ${fadeInAnimation}
  animation: fadein 300ms;
`
export const CubeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 30px;
`
export const CubeHeaderLabel = styled.div`
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  letter-spacing: .3px;
  min-width: 24px;
  width: max-content;
  white-space: nowrap;
  text-align: center;
  border-radius: 50%;
  background: ${({ currDay }) => currDay ? '#1a73e8' : 'transparent'};
  font-weight: 500;
  color: ${({ currDay, currMonth }) => {
    if (currDay) return '#FFF'
    return currMonth ? 'rgba(0,0,0,.8)' : 'rgba(0,0,0,.5)'
  }};

  :hover {
    margin-top: ${({ currDay }) => currDay ? 0 : -1 }px;
    background: ${({ currDay }) => currDay ? '#1967d2' : '#f1f3f4' };
  }
  cursor: pointer;
`