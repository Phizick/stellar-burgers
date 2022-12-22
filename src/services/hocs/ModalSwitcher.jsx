import {useSelector} from "react-redux";
import Modal from "../../components/Modal/Modal";

export const ModalSwitcher = (props) => {

    const { ModalComponent, PageComponent, modalTitle, nameOfModal } = props

    const { isOpened, modalType } = useSelector(state => state.modalState);
    console.log(123)

    return isOpened && modalType === nameOfModal
    ? (
        <Modal title={ modalTitle ? modalTitle : ''} >
            <ModalComponent/>
        </Modal>
        )
        :
        (
            <PageComponent/>
        )
}