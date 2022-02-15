import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import markup from '../data/markup_data'

import Tooltip from '../components/Tooltip'

const MarkupComments = () => {
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
      <div
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

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  min-height: 700px;
  background: #f4f4f4;
  margin-top: 80px;
  padding: 15px;
  font-size: 21px;

  > div {
    span {
      cursor: help;
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

export default MarkupComments
