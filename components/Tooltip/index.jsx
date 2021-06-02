import React, { useRef, useState, useEffect } from 'react'
import { Content as TooltipContent, ChildWrapper } from './styles'

const Tooltip = ({ children, content, placement = 'right' }) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0
  })
  const [show, setShow] = useState(false)
  const childrenRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const calcPosition = () => {
      const childrenRect = childrenRef.current.getBoundingClientRect()
      const docHeight = document.documentElement.clientHeight
      const docWidth = document.documentElement.clientWidth
      const margin = 3

      switch (placement) {
        case 'top':
          setPosition({ bottom: docHeight - childrenRect.top + margin, left: childrenRect.left })
          break
        case 'bottom':
          setPosition({ top: childrenRect.bottom + margin, left: childrenRect.left })
          break
        case 'left':
          setPosition({ top: childrenRect.top, right: docWidth - childrenRect.left + margin })
          break
        case 'right':
          setPosition({ top: childrenRect.top, left: childrenRect.right + margin })
          break
        default:
          setPosition({ bottom: docHeight - childrenRect.top + margin, left: childrenRect.left })
          break
      }
    }

    if (childrenRef.current && contentRef.current) {
      calcPosition()
    }

  }, [childrenRef, contentRef, placement])

  return (
    <>
      <ChildWrapper
        ref={childrenRef}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>
          {children}
      </ChildWrapper>
      <TooltipContent
        ref={contentRef}
        position={position}
        show={show}>
        { content }
      </TooltipContent>
    </>
  )
}

export default Tooltip