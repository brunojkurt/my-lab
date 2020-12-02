import { useState } from 'react'
import TaskBoard from '../components/TaskBoard'
import TimeAgo from '../components/TimeAgo'
import moment from 'moment'

moment.locale('pt-br')

const DeliveryBoard = () => {
  const [ deliveryState, setDeliveryState ] = useState({
    new: [
      {
        id: '1',
        title: 'Pedido 9999',
        description: '15 Itens, clique para detalhes',
        label: `${moment().format('DD/MMM H:mm')}`,
      }
    ],
    inProgress: [

    ],
    done: [

    ]
  })

  const boardData = {
    hideCardDeleteIcon: true,
    lanes: [
      {
        id: 'new',
        title: 'Novo',
        cards: deliveryState.new
      },
      {
        id: 'inProgress',
        title: 'Em progresso',
        cards: deliveryState.inProgress,
      },
      {
        id: 'done',
        title: 'Finalizado',
        cards: deliveryState.done
      }
    ]
  }

  return (
    <TaskBoard data={boardData}/>
  )
}

export default DeliveryBoard