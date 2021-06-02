import Board from '../components/Board'
import TimeAgo from '../components/TimeAgo'

const TaskBoard = () => {
  const itemsFromBackend = [
    { id: '1', content: <TimeAgo date={new Date().toISOString()} live/> },
    { id: '2', content: "Second task" },
    { id: '3', content: "Third task" },
    { id: '4', content: "Fourth task" },
    { id: '5', content: "Fifth task" }
  ];
  
  const columns = {
    ['requested']: {
      name: "Requested",
      items: itemsFromBackend
    },
    ['toDo']: {
      name: "To do",
      items: []
    },
    ['inProgress']: {
      name: "In Progress",
      items: []
    },
    ['done']: {
      name: "Done",
      items: []
    }
  };

  return (
    <Board data={columns}/>
  )
}

export default TaskBoard