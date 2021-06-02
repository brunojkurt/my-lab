import { useState } from 'react'
import { Input, Select } from 'antd'

const DynamicFields = () => {
  const [state, setState] = useState({
    vehicle: {
      type: ''
    }
  })
  const inputs = {
    motorcicle: {
      label: 'Moto',
      value: 'motorcicle',
      subInputs: {
        boxType: {
          type: 'select',
          label: 'Tipo de caixa',
          options: [
            {
              label: 'Mochila',
              value: 'Mochila'
            },
            {
              label: 'Caixa',
              value: 'Caixa'
            }
          ]
        },
        bagSize: {
          type: 'number',
          label: 'Tamanho (Litros)',
        }
      }
    },
    car: {
      label: 'Carro',
      value: 'car',
      subInputs: {
        CarBoxQuantity: {
          type: 'select',
          label: 'Capacidade',
          options: [
            {
              label: '1 Caixa de 45 litros',
              value: 1
            },
            {
              label: '2 Caixa de 45 litros',
              value: 2
            },
            {
              label: '3 Caixa de 45 litros',
              value: 3
            },
            {
              label: '4 Caixa de 45 litros',
              value: 4
            },
            {
              label: '5 Caixa de 45 litros',
              value: 5
            }
          ]
        }
      }
    }
  }

  return (
    <>
    <div style={styles.header}>
      <h4>{`Estado: ${JSON.stringify(state.vehicle)}`}</h4>
    </div>
    <div style={styles.container}>
      <h1>Inputs:</h1>
      <div style={styles.form}>
        <ul>
          <li style={styles.listRow}>
            <Select
              placeholder="Tipo de veículo"
              onChange={(value) => setState({ vehicle: { type: value }})}
              value={state.vehicle.type}
              style={{ width: 250 }}>
              { Object.entries(inputs).map(([field, obj]) => (
                <Select.Option key={field} value={obj.value}>{obj.label}</Select.Option>
              )) }
            </Select>
          </li>
          { (state?.vehicle?.type && inputs[state.vehicle.type].subInputs) && 
            Object.entries(inputs[state.vehicle.type].subInputs).map(([field, obj]) => (
              <li style={styles.listRow}>
                { obj.type === 'select' ? (
                  <Select
                    onChange={(value) => setState(state => {
                      return { ...state, vehicle: { ...state.vehicle, [field]: value }}
                    })}
                    placeholder={obj.label}
                    key={field}
                    value={state.vehicle[field]}
                    style={{ width: 250 }}>
                      { obj.options.map(option => (
                        <Select.Option value={option.value}>{option.label}</Select.Option>
                      )) }
                  </Select>
                ) : (
                  <Input
                  onChange={(e) => setState(state => {
                    return { ...state, vehicle: { ...state.vehicle, [field]: e.target.value }}
                  })}
                    placeholder={obj.label}
                    key={field}
                    value={state.vehicle[field]}
                    type={obj.type}
                    style={{ width: 250 }}/>
                )}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    </>
  )
}

const styles = {
  container: {
    padding: '80px 40px 0 40px'
  },
  header: {
    height: 80,
    position: 'fixed',
    width: '100%',
    padding: '15px 40px',
    background: '#F8F8F8',
    display: 'flex',
    justifyContent: 'space-around'
  },
  form: {
    marginTop: 40
  },
  listRow: {
    marginBottom: 20
  }
}

export default DynamicFields