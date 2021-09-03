import styled from 'styled-components'

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F2F2F2;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  cursor: ${({ pointerDown }) => pointerDown ? 'grabbing' : 'default'};
`
export const SwipeableContainer = styled.div`
  min-width: ${({ width }) => width}px;
  height: 100%;
  background-color: blue;
  border: 1px solid #CCC;
`