import styled from 'styled-components'
import Swiper from '../components/Swiper'

const Container = styled.div`
  width: 100%;
  height: 800px;
`
const SwiperItem = styled.div`
  background: ${({ color }) => color};
  width: 100%;
  height: 800px;
`

const SwiperPage = () => {
  return (
    <Container>
      <Swiper>
        <SwiperItem color="red">Slider 1</SwiperItem>
        <SwiperItem color="blue">Slider 2</SwiperItem>
        <SwiperItem color="grey">Slider 3</SwiperItem>
      </Swiper>
    </Container>
  )
}

export default SwiperPage