import { useState, useEffect } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 600px;
`

const CharsSubsequence = () => {
  const [state, setState] = useState({
    pattern: 'SUE',
    string: 'SUBSEQUENCE'
  })
  const [subsequences, setSubsequences] = useState(0)

  function countSubsequences(pattern, string, patternSize, stringSize) {
    if (patternSize === 0)
      return 1
      
    if (stringSize === 0)
      return 0

    return (pattern[patternSize - 1] === string[stringSize - 1] ?
      countSubsequences(pattern, string, patternSize - 1, stringSize - 1) : 0) +
      countSubsequences(pattern, string, patternSize, stringSize - 1)
  }

  const getSubsequencesCount = () => {
    const { pattern, string } = state
    return countSubsequences(pattern, string, pattern.length, string.length)
  }

  useEffect(() => {
    if (state.pattern.length) {
      setSubsequences(getSubsequencesCount())
    } else {
      setSubsequences(0)
    }
  }, [state])

  return (
    <Container>
      <Input
        placeholder='Pattern'
        value={state.pattern}
        onChange={({ target: { value }}) => setState(state => ({ ...state, pattern: value }))}
      />
      <Input
        placeholder='String'
        value={state.string}
        style={{ marginTop: 15 }}
        onChange={({ target: { value }}) => setState(state => ({ ...state, string: value }))}
      />
      {`Subsequences: ${subsequences}`}
    </Container>
  )
}

export default CharsSubsequence
