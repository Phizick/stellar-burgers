import {useSelector} from "react-redux";
import Modal from "../../components/Modal/Modal";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";


const ModalSwitcher = ({ModalComponent, PageComponent, modalTitle, nameOfModal}) => {

    const { isOpened, modalType } = useSelector(state => state.modalState);

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