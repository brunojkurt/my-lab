import { useEffect, useState } from 'react'

const SliderInputs = () => {
  const [inputs, setInputs] = useState(new Array(10).fill({}))
  const [inputRange, setInputRange] = useState(1)

  useEffect(() => {
    const buildInputs = () => {
      setInputs(state => {
        let id = 1
        return state.map(() => {
          return {
            id: id++,
            value: '',
          }
        })
      })
    }
    buildInputs()
  }, [])

  useEffect(() => {
    const handleInputRangeChange = () => {
      setInputs(state => state.map(input => ({
        ...input,
        value: inputRange < input.id ? '' : input.value
      })))
    }
    handleInputRangeChange()
  }, [inputRange])

  const handleInputChange = (id, value) => {
    setInputs(state => state.map(input => {
      return {
        ...input,
        value: input.id === id ? value : input.value
      }
    }))
  }
  
  return (
    <div  style={{ width: '500px', minHeight: '500px', padding: '15px', margin: '50px', background: '#ccc' }}>
      <h2>Inputs:</h2>

      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={inputRange}
        onChange={e => setInputRange(e.target.value)}
        style={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}/>

      <ul>
        { inputs.map(input => (
          input.id && (
            <li key={input.id} style={{ marginTop: '5px' }}>
              <input onChange={(e) => handleInputChange(input.id, e.target.value)} value={input.value} disabled={inputRange < input.id} />
            </li>
          )
        )) }
      </ul>
    </div>
  )
}

export default SliderInputs