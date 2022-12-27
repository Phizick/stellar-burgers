import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import PropTypes from "prop-types";

const ModalSwitcher = ({ ModalComponent, PageComponent, modalTitle, nameOfModal }) => {
    const { isOpened, modalType } = useSelector((state) => state.modalState);

    return isOpened && modalType === nameOfModal
        ? ModalComponent && (
        <Modal title={modalTitle ? modalTitle : ""}>
            <ModalComponent />
        </Modal>
    )
        : PageComponent && <PageComponent />;
};

ModalSwitcher.propTypes = {
    ModalComponent: PropTypes.func.isRequired,
    PageComponent: PropTypes.func.isRequired,
    nameOfModal: PropTypes.string.isRequired,
};

export default ModalSwitcher;
