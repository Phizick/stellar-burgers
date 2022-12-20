import {useSelector} from "react-redux";
import Modal from "../../components/Modal/Modal";

export const ModalSwitcher = (props) => {

    const { isOpened, modalType } = useSelector(state => state.modalState);

    return isOpened && modalType === props.nameOfModal
    ? (
        <Modal title={ props.modalTitle ? props.modalTitle : ''} >
            <props.ModalComponent/>
        </Modal>
        )
        :
        (
            <props.PageComponent/>
        )
}