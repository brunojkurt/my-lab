import Board from 'react-trello'

const Taskboard = ({ data }) => {
  return <Board 
    data={data} 
    hideCardDeleteIcon
    
  />
}

export default Taskboard