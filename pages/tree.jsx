import { useState } from 'react'
import styled from 'styled-components'
import TreeView from "../components/TreeView"
import treeDataJson from '../data/tree_data.json'

const Three = () => {
  const [treeData, setTreeData] = useState(treeDataJson.users)

  const handleItemClick = (item) => {
    alert(`${item.id}: ${item.text}`)
  }

  const handleAddItem = (item) => {
    const newItem = {
      id: new Date().getTime() + Math.random(),
      ...item
    }
    setTreeData(state => [...state, newItem])
  }

  const handleRemoveItem = (item) => {
    setTreeData(state => state.filter(i => i.id !== item.id).filter(i => i.parent !== item.id))
  }

  return (
    <TreeWrapper>
      <TreeView
        data={treeData}
        onItemClick={(item) => handleItemClick(item)}
        onAddClick={(item) => handleAddItem(item)}
        onRemoveClick={(item) => handleRemoveItem(item)}
      />
    </TreeWrapper>
  )
}

const TreeWrapper = styled.div`
  padding: 50px;
`

export default Three
