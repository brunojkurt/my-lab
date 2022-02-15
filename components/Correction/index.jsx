import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import Tooltip from '../Tooltip'

const Correction = ({ markup, image }) => {
  const markupContainerRef = useRef(null)
  const [comments, setComments] = useState([])
  const [displayedComment, setDisplayedComment] = useState(null)

  useEffect(() => {
    const containerEl = markupContainerRef.current
    if (containerEl) {
      const commentEls = containerEl.querySelectorAll('span')
      setComments([...commentEls].map(anchorEl => ({
        id: new Date().getTime() + Math.random(),
        anchorEl,
        title: anchorEl.getAttribute('data-title'),
        content: anchorEl.getAttribute('data-content')
      })))
    }
  }, [markupContainerRef.current])

  useEffect(() => {
    if (comments?.length) {
      comments.forEach(({ id, anchorEl }) => anchorEl.addEventListener('mouseover', () => setDisplayedComment(id)))
      comments.forEach(({ id, anchorEl }) => anchorEl.addEventListener('mouseout', () => setDisplayedComment(null)))
    }

    return () => {
      comments.forEach(({ id, anchorEl }) => anchorEl.removeEventListener('mouseover', () => setDisplayedComment(id)))
      comments.forEach(({ id, anchorEl }) => anchorEl.removeEventListener('mouseout', () => setDisplayedComment(null)))
    }
  }, [comments])

  return (
    <Container>
      {image && (
        <CorrectionImage src={image} />
      )}
      <CorrectionMarkup
        ref={markupContainerRef}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      {comments.map((comment) => (
        <Tooltip
          key={comment.id}
          title={comment.title}
          content={comment.content}
          anchorEl={comment.anchorEl}
          show={comment.id === displayedComment}
        />
      ))}
    </Container>
  )
}

const CorrectionImage = styled.img`
  width: 100%;
  height: 100%;
`

const CorrectionMarkup = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  min-height: 700px;
  margin-top: 80px;
  padding: 15px;
  font-size: 21px;
  position: relative;

  > div {
    span {
      cursor: help;
      &.mark {
        position: absolute;
        opacity: 0.5;
      }
    }

    .erro-comentario {
      background-color: rgba(0,123,255,1)!important;
      color: #fff!important;
    }

    .erro-erro-gramatical {
      background-color: #d4487a;
      color: #ffffff;
    }

    .erro-convencao-de-escrita {
      background-color: #5a5fd6;
      color: #ffffff;
    }

    .erro-precisao-vocabular {
      background-color: #09ba85;
      color: #ffffff;
    }

    .erro-escolha-de-registro {
      background-color: #f2e355;
      color: #544949;
    }

    .erro-conectivos {
      background-color: #d156f0;
      color: #ffffff;
    }

    .erro-sintaxe {
      background-color: #de8a0d;
      color: #ffffff;
    }
  }
`

export default Correction
