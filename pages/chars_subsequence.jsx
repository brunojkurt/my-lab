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
    string: 'SUBSEQUENCE',
    subsequences: 0
  })

  function countSubsequences(pattern, string, patternSize, stringSize) {
    if (stringSize === 0)
      return 0

    if (patternSize === 0)
      return 1

    return (pattern[patternSize - 1] === string[stringSize - 1] ?
      countSubsequences(pattern, string, patternSize - 1, stringSize - 1) : 0) +
      countSubsequences(pattern, string, patternSize, stringSize - 1)
  }

  const getSubsequencesCount = () => {
    const { pattern, string } = state
    return countSubsequences(pattern, string, pattern.length, string.length)
  }

  useEffect(() => {
    if (state.pattern.length === 3) {
      console.log(getSubsequencesCount())
    } else {
      setState(state => ({
        ...state,
        subsequences: 0
      }))
    }
  }, [state])

  return (
    <Container>
      <Input
        placeholder='Pattern'
        maxLength={3}
        value={state.pattern}
        onChange={({ target: { value }}) => setState(state => ({ ...state, pattern: value }))}
      />
      {state.pattern.length !== 3 && (
        <small style={{ color: 'red' }}>Pattern must have 3 chars</small>
      )}
      <Input
        placeholder='String'
        value={state.string}
        style={{ marginTop: 15 }}
        onChange={({ target: { value }}) => setState(state => ({ ...state, string: value }))}
      />
      {`Subsequences: ${state.subsequences}`}
    </Container>
  )
}

export default CharsSubsequence
