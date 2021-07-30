import { useState, useCallback } from 'react'
import {
  TreeListWrapper,
  CollapsableListWrapper,
  StyledList,
  StyledListItem,
  ToggleIconWrapper,
  ItemText,
  ActionsWrapper,
  ListItemBtn,
  FieldWrapper,
  InputField,
  InputControlsWrapper
} from './styles'
import {
  HiOutlineChevronRight,
  HiOutlineChevronDown,
  HiOutlineTrash,
  HiOutlinePlusSm,
  HiOutlineCheck
} from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

const TreeView = ({ data, onItemClick, onAddClick, onRemoveClick }) => {
  const [collapsedLists, setCollapsedLists] = useState([])
  const [newItem, setNewItem] = useState(null)
  const [newItemValue, setNewItemValue] = useState('')

  const toggleList = (itemId) => {
    setCollapsedLists(list => list.includes(itemId) ? list.filter(i => i !== itemId) : [...list, itemId])
  }

  const handleAddClick = (e, item) => {
    e.stopPropagation()
    setNewItem(item.id)
    setNewItemValue('')
  }

  const handleRemoveClick = (e, item) => {
    e.stopPropagation()
    onRemoveClick(item)
  }

  const Branch = ({ items, collapsed }) => {
    return (
      <CollapsableListWrapper collapsed={collapsed}>
        <StyledList>
          {items.map(item => (
            <BranchItem
              key={item.id}
              item={item}
            />
          ))}
        </StyledList>
      </CollapsableListWrapper>
    )
  }
  
  const BranchItem = ({ item }) => {
    const childrens = data.filter(dataItem => dataItem.parent && item.id === dataItem.parent)
    const isParent = !!childrens.length
    const onClick = () => {
      if  (isParent) {
        toggleList(item.id)
      }
      if (!isParent && onItemClick) {
        onItemClick(item)
      }
    }
    const itemProps = { onClick, isParent }
    const isCollapsed = collapsedLists.includes(item.id)

    return (
      <>
        <StyledListItem {...itemProps}>
          {isParent && (
            <ToggleIconWrapper>
              { isCollapsed ? <HiOutlineChevronDown /> : <HiOutlineChevronRight/> }
            </ToggleIconWrapper>
          )}
          <ItemText>{item.text}</ItemText>
          {(onAddClick || onRemoveClick) && (
            <ActionsWrapper>
              { onAddClick && (
                <ListItemBtn onClick={(e) => handleAddClick(e, item)}>
                  <HiOutlinePlusSm />
                </ListItemBtn>
              )}
              { onRemoveClick && (
                <ListItemBtn color="#eb4034" onClick={(e) => handleRemoveClick(e, item)}>
                  <HiOutlineTrash />
                </ListItemBtn>
              )}
            </ActionsWrapper>
          )}
        </StyledListItem>
        {newItem === item.id && (
          <FieldWrapper>
            <InputField
              value={newItemValue}
              onChange={(e) => setNewItemValue(e.target.value)}
            />
            <InputControlsWrapper>
              {!!newItemValue.length && (
                <ListItemBtn>
                  <HiOutlineCheck />
                </ListItemBtn>
              )}
              <ListItemBtn onClick={() => setNewItem(null)}>
                <IoMdClose />
              </ListItemBtn>
            </InputControlsWrapper>
          </FieldWrapper>
        )}
        {!!childrens.length && (
          <Branch
            items={childrens}
            collapsed={isCollapsed}
          />
        )}
      </>
    )
  }

  return (
    <TreeListWrapper>
      {data.filter(item => !item.parent).map(item => (
        <StyledList key={item.id}>
          <BranchItem item={item} />
        </StyledList>
      ))}
    </TreeListWrapper>
  )
}

export default TreeView
