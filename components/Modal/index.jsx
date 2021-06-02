import ClickAway from '../ClickAway'
import { ModalPaper, ModalHeader, ModalContent, ModalFooter, ModalWrapper } from './styles'

const Modal = ({ header, children, footer, size, show, onClose, position }) => {
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