import React, { Children } from 'react'
import Slider from './Slider'
import { SwiperContainer } from './styles'

const Swiper = ({ children, showButtons, showCounter, visible }) => {
  const contents = Children.toArray(children).map(content => ({ content }))

  return (
    <SwiperContainer>
      <Slider
        items={contents}
        showButtons={showButtons}
        showCounter={showCounter}
        visible={visible}
      >
        {({ content }, i) => (
          <div key={i}>
            {content}
          </div>
        )}
      </Slider>
    </SwiperContainer>
  )
}

export default Swiper
