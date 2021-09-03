import styled from 'styled-components'
import Swiper from '../components/Swiper'

const Container = styled.div`
  width: 100%;
  padding-left: 10vw;
  padding-right: 10vw;
  margin-top: 5vh;
  height: 800px;
`

const SwiperPage = () => {
  return (
    <Container>
      <Swiper>
        <h2>Slider 1</h2>
        <h2>Slider 2</h2>
        <h2>Slider 3</h2>
      </Swiper>
    </Container>
  )
}

export default SwiperPage