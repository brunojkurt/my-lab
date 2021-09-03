import { Children, useRef, useEffect, useState } from 'react'

import {
  SwiperContainer,
  SwipeableContainer
} from './styles'

const Swiper = ({ children }) => {
  const containerRef = useRef(null)
  const contents = Children.toArray(children)

  const [pointerState, setPointerState] = useState({
    down: false,
    startX: 0,
    containerScroll: 0
  })
  const [measures, setMeasures] = useState({
    swipeable: {
      width: 0
    }
  })

  useEffect(() => {
    if (containerRef.current) {
      setMeasures(state => ({
        ...state,
        swipeable: {
          ...state.swipeable,
          width: containerRef.current.offsetWidth
        }
      }))
    }
  }, [containerRef.current])

  const handleMovement = (e) => {
    if (pointerState.down) {
      const dx = e.clientX - pointerState.startX;
      containerRef.current.scrollLeft = pointerState.containerScroll - dx
    }
  }

  return (
    <SwiperContainer
      onMouseDown={(e) => setPointerState({
        down: true,
        startX: e.clientX,
        containerScroll: containerRef.current.scrollLeft
      })}
      onMouseUp={() => setPointerState(state => ({ ...state, down: false, startX: 0 }))}
      onMouseMove={handleMovement}
      ref={containerRef}
      pointerDown={pointerState.down ? 'true' : false}
    >
      {contents.map((content, i) => (
        <SwipeableContainer
          key={i}
          width={measures.swipeable.width}
        >
          {content}
        </SwipeableContainer>
      ))}
    </SwiperContainer>
  )
}

export default Swiper
