import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";


const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div className={isModalOpen ? 'modal-overly show-modal':'modal-overly'}>
        <div className={isModalOpen ? 'modal-container  show-modal':'modal-container'}>
            <h3>modal content</h3>
            <button type="button" className="close-modal-btn" onClick={closeModal}>
                <FaTimes />
            </button>
        </div>
    </div>
  )
}

export default Modal;