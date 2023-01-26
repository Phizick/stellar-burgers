import { useSelector} from "react-redux";
import Modal from "../../components/Modal/Modal";
import PropTypes from "prop-types";
import { ComponentType, FC } from "react";

interface IModalSwitcher {
    readonly ModalComponent: ComponentType;
    readonly PageComponent: ComponentType;
    readonly modalTitle: string;
    readonly nameOfModal?: string;
}

const ModalSwitcher: FC<IModalSwitcher> = ({ ModalComponent, PageComponent, modalTitle, nameOfModal }) => {
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
    modalTitle: PropTypes.string.isRequired,
    nameOfModal: PropTypes.string.isRequired,
};

export default ModalSwitcher;
