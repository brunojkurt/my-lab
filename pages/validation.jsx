import { useState } from 'react'
import useValidator from '../hooks/useValidator'

const Validation = () => {
  const [state, setState] = useState({
    min_five_max_ten: 0,
    required: ''
  })

  const { errors } = useValidator([
    {
      name: 'min_five_max_ten',
      value: state.min_five_max_ten,
      validation: 'min:5,max:10'
    },
    {
      name: 'required',
      value: state.required,
      validation: 'required'
    }
  ])
  
  return (
    <div style={{ padding: 30 }}>
      <input
        name='min_five_max_ten'
        placeholder='min_five_max_ten'
        onChange={({ target: { value } }) => setState(state => ({ ...state, min_five_max_ten: value }))}
      />
      <br/>
      <input
        type='text'
        name='required'
        placeholder='required'
        onChange={({ target: { value } }) => setState(state => ({ ...state, required: value }))}
      />
      {errors.map((error, i) => (
        <div key={i}>
          {JSON.stringify(error)}
        </div>
      ))}
    </div>
  )
}

export default Validation
