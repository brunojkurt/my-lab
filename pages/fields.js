import { useState } from 'react'

function Fields() {
  const [ fields, setFields ] = useState([
    {
      id: new Date().getTime() + Math.random(),
      value: ''
    }
  ])

  const addInput = () => {
    setFields(fields => fields.concat([
      { 
        id: new Date().getTime() + Math.random(),
        value: ''
      }
    ]))
  }

  const handleTyping = (id, value) => {
    if (id === fields[fields.length - 1].id) {
      addInput()
    }
    setFields(state => state.map(input => {
      return {
        ...input,
        value: input.id === id ? value : input.value
      }
    }))
  }

  return (
    <div style={{ width: '500px', height: '300px', margin: '50px', background: '#ccc' }}>
      <ul>
        { fields.map(input => (
          <li>
            <input key={input.id} onChange={(e) => handleTyping(input.id, e.target.value)} value={input.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fields;