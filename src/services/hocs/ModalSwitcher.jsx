import {useSelector} from "react-redux";
import Modal from "../../components/Modal/Modal";

const ModalSwitcher = ({ModalComponent, PageComponent, modalTitle, nameOfModal}) => {

    const { isOpened, modalType } = useSelector(state => state.modalState);
    console.log(3215)

    return isOpened && modalType === nameOfModal
    ? (ModalComponent &&
        <Modal title={ modalTitle ? modalTitle : ''} >
            <ModalComponent/>
        </Modal>
        )
        :
        (PageComponent &&
            <PageComponent />
        )
}

export default ModalSwitcher