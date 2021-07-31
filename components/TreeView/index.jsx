import { useState, useCallback, useRef } from 'react'
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
  const newFieldRef = useRef(null)
  const [collapsedLists, setCollapsedLists] = useState([])
  const [newItemParent, setnewItemParent] = useState(null)

  const toggleList = (itemId) => {
    setCollapsedLists(list => list.includes(itemId) ? list.filter(i => i !== itemId) : [...list, itemId])
  }

  const handleNewClick = (e, item) => {
    e.stopPropagation()
    setnewItemParent(item.id)
  }

  const handleAddClick = () => {
    onAddClick({ parent: newItemParent, text: newFieldRef.current.value })
    setnewItemParent(null)
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
                <ListItemBtn
                  onClick={(e) => handleNewClick(e, item)}
                  visibleOnListHover
                >
                  <HiOutlinePlusSm />
                </ListItemBtn>
              )}
              { onRemoveClick && (
                <ListItemBtn
                  color="#eb4034"
                  onClick={(e) => handleRemoveClick(e, item)}
                  visibleOnListHover
                >
                  <HiOutlineTrash />
                </ListItemBtn>
              )}
            </ActionsWrapper>
          )}
        </StyledListItem>
        {newItemParent === item.id && (
          <FieldWrapper>
            <InputField ref={newFieldRef} />
            <InputControlsWrapper>
              <ListItemBtn onClick={() => handleAddClick()}>
                <HiOutlineCheck />
              </ListItemBtn>
              <ListItemBtn onClick={() => setnewItemParent(null)}>
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
