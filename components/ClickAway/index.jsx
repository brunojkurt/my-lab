import { useEffect, useRef, useCallback } from 'react'

const ClickAway = (props) => {
  const {
    children,
    onClickAway,
    customWrapper: CustomWrapper,
    customWrapperProps
  } = props
  
  const ref = useRef(null)

  const clickListener = useCallback((e) => {
    if (!(ref.current).contains(e.target)) {
      onClickAway?.()
    }
    e.stopPropagation()
  }, [onClickAway])

  useEffect(() => {
    document.addEventListener('click', clickListener)

    return () => {
      document.removeEventListener('click', clickListener)
    }
  }, [clickListener])

  return CustomWrapper ? (
    <CustomWrapper ref={ref} {...customWrapperProps}>
      { children }
    </CustomWrapper>
  ) : (
    <div ref={ref}>
      { children }
    </div>
  )
}

export default ClickAway