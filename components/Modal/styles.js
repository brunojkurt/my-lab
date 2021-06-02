import styled, { css } from 'styled-components'

const sizes = {
  xs: 444,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const fadeInAnimation = css`
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

export const ModalPaper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
              0px 24px 38px 3px rgb(0 0 0 / 14%),
              0px 9px 46px 8px rgb(0 0 0 / 12%);
  ${fadeInAnimation}
  animation: fadein 200ms;

  width: 100%;
  height: auto;
  max-width: ${({ size }) => size ? sizes[size] : sizes['md']}px;

  @media(max-width: ${sizes['xs']}px) {
    max-width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ModalContent = styled.div`
  display: flex;
  flex: 1;
`
export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ModalWrapper = styled.div`
  position: fixed;
  ${({ position }) => (position?.top || position?.left) ? css`
    top: ${position.top}px;
    left: ${position.left}px;
    height: fit-content;
    width: fit-content;
  ` : css`
    height: 100%;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
  @media(max-width: ${sizes['xs']}px) {
    padding: 0;
  }
`