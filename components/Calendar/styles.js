import styled, { css } from 'styled-components'

export const CalendarWrapper = styled.div`
  height: 100%;
  background-color: #CCC;
  padding: 1px;
  display: grid;
  grid-gap: ${({ cubeGap }) => cubeGap || 1}px;
  grid-template-rows: ${({ headerHeight, cubeHeight }) => `
    ${headerHeight}px repeat(auto-fit, minmax(${cubeHeight - 1}px, auto))`
  };
  grid-template-columns: ${({ cubeWidth }) => `repeat(7, ${cubeWidth - 1}px)`};
  contain: strict;
`
const fadeInAnimation = css`
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`
export const WeekDay = styled.div`
  padding-top: 8px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  background-color: #FFF;
  color: #70757a;
  ${fadeInAnimation}
  animation: fadein 300ms;
  margin-bottom: -1px;
`
export const DayCube = styled.div`
  background-color: #FFF;
  padding: 3px;
  ${fadeInAnimation}
  animation: fadein 300ms;
  contain: strict;
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
    return currMonth ? '#3c4043' : '#70757a'
  }};

  :hover {
    margin-top: ${({ currDay }) => currDay ? 0 : -1 }px;
    background: ${({ currDay }) => currDay ? '#1967d2' : '#f1f3f4' };
  }
  cursor: pointer;
`