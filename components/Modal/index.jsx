import ClickAway from '../ClickAway'
import { ModalPaper, ModalHeader, ModalContent, ModalFooter, ModalWrapper } from './styles'

const Modal = (props) => {
  const { header, children, footer, show, size, position, onClose } = props
  return show ? (
    <ModalWrapper position={position}>
      <ClickAway customWrapper={ModalPaper}
        customWrapperProps={{ size }}
        onClickAway={() => onClose()}>
          { header && (
            <ModalHeader>
              { header }
            </ModalHeader>
          ) }
          { children && (
            <ModalContent>
              { children }
            </ModalContent>
          ) }
          { footer && (
            <ModalFooter>
              { footer }
            </ModalFooter>
          ) }
      </ClickAway>
    </ModalWrapper>
  ) : <></>
}

export default Modal