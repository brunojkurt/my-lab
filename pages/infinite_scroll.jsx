import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'


const mock = () => [...Array(10).keys()].map(_ => `Item ${new Date().getTime() + Math.random()}`)

const InfiniteScroll = () => {
  const [list, setList] = useState(mock())
  const wrapper = useRef(null)

  useEffect(() => {
    const listWrapper = wrapper.current

    const isListEnded = () => {
      return listWrapper.scrollHeight - listWrapper.clientHeight === listWrapper.scrollTop
    }

    const fetchMoreOnListEnd = () => {
      if (isListEnded()) {
        setList(state => [...state, ...mock()])
      }
    }

    if (listWrapper) {
      listWrapper.addEventListener('scroll', fetchMoreOnListEnd)
    }

    return () => {
      listWrapper.removeEventListener('scroll', fetchMoreOnListEnd)
    }
  }, [wrapper])

  return (
    <InfiniteScrollWrapper ref={wrapper}>
      <ul>
        { list.map(item => (
          <ListItem key={item}>
            {item}
          </ListItem>
        ))}
      </ul>
    </InfiniteScrollWrapper>
  )
}

const InfiniteScrollWrapper = styled.div`
  height: 300px;
  background-color: #CCC;
  width: 500px;
  overflow-y: auto;
`
const ListItem = styled.li`
  padding: 10px;
  color: #000;
  background-color: #FFF;
  margin: 3px;
`

export default InfiniteScroll