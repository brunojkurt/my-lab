import { useState } from 'react'
import styled from 'styled-components'
import TreeView from "../components/ThreeView"
import treeDataJson from '../data/tree_data.json'

const Three = () => {
  const [treeData, setTreeData] = useState(treeDataJson.users)

  return (
    <TreeWrapper>
      <TreeView
        data={treeData}
        onItemClick={(item) => console.log(item)}
        onAddClick={(item) => console.log(item)}
        onRemoveClick={(item) => console.log(item)}
      />
    </TreeWrapper>
  )
}

const TreeWrapper = styled.div`
  padding: 50px;
`

export default Three
