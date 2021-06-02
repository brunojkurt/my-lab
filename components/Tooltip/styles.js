import styled, { css } from 'styled-components'

const fadeInAnimation = css`
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`
export const ChildWrapper = styled.div`
  width: fit-content;
`
export const Content = styled.div`
  padding: 3px;
  border-radius: 5px;
  background: #484f58;
  position: fixed;
  ${({ position }) => position.top && css`
    top: ${position.top}px;
  `};
  ${({ position }) => position.left && css`
    left: ${position.left}px;
  `};
  ${({ position }) => position.right && css`
    right: ${position.right}px;
  `};
  ${({ position }) => position.bottom && css`
    bottom: ${position.bottom}px;
  `};
  display: ${({ show }) => show ? 'block' : 'none'};
  pointer-events: none;
  ${fadeInAnimation}
  animation: fadein 300ms;
`