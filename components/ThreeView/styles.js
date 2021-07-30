import styled, { css } from 'styled-components'

export const TreeListWrapper = styled.div`
  width: fit-content;
  min-width: 270px;
  height: auto;
`
export const CollapsableListWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  max-height: ${({ collapsed }) => collapsed ? '5000px' : '0'};
`
export const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  margin-block-start: 0.3rem !important;
`
export const StyledListItem = styled.li`
  width: 100%;
  padding: 3px 10px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: #f2f2f2;
    opacity: 1;
  }
`
export const ToggleIconWrapper = styled.span`
  padding-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`
export const ItemText = styled.span`
  padding-right: 8px;
`
export const ActionsWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const actionIconWrapper = css`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    border: 0.5px solid #CCC;
    opacity: 1;
  }
`
export const ListItemBtn = styled.span`
  ${actionIconWrapper}

  ${({ visibleOnListHover }) => visibleOnListHover && css`
    visibility: hidden;
    ${StyledListItem}:hover & {
      visibility: visible;
    }
  `}

  color: ${({ color }) => color || '#000'};
`
export const FieldWrapper = styled.div`
  display: flex;
`
export const InputField = styled.input`
  width: calc(100% - 8px);
  border-radius: 3px;
  margin: 3px 3px 3px 8px;
  border: 0.5px solid #CCC;
  :focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 1px #CCC;
  }
`
export const InputControlsWrapper = styled.span`
  width: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  margin-right: 9px;
`
