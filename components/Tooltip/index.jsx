import { useEffect, useState } from 'react'
import styled from 'styled-components'

const DEFAULT_POSITION = { x: 0, y: 0 }

const Tooltip = ({ position = DEFAULT_POSITION, anchorEl, title, content, show }) => {
  const [coordinates, setCoordinates] = useState(DEFAULT_POSITION)

  useEffect(() => {
    const getCoordinates = () => {
      if (!anchorEl) {
        return DEFAULT_POSITION
      }
      const rect = anchorEl.getBoundingClientRect()
      return {
        x: rect.x + (rect.width / 2),
        y: rect.y
      }
    }

    const coordinatesAxis = getCoordinates()

    setCoordinates(coordinatesAxis)
  }, [position, anchorEl])

  return (
    <Container show={show} coordinates={coordinates}>
      <Title>
        {title || 'Comment'}
      </Title>
      <Content>
        {content}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  opacity: ${({ show }) => show ? 1 : 0};
  transition: all 300ms ease;
  min-width: 120px;
  max-width: 200px;
  min-height: 80px;
  border-radius: 8px;
  background: #FFF;
  border: 1px solid #000;
  position: absolute;
  top: ${({ coordinates }) => coordinates.y}px;
  left: ${({ coordinates }) => coordinates.x}px;
  pointer-events: none;
  transform: translate(-50%, calc(-100% - 10px));
`
const Title = styled.div`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #000;
`

const Content = styled.div`
  padding: 10px;
  font-size: 12px;
`

export default Tooltip
