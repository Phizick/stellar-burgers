import {useAppSelector} from "../../services/hooks/hooks";
import Modal from "../Modal/Modal";
import { ComponentType, FC } from "react";

interface IModalSwitcher {
    readonly ModalComponent: ComponentType;
    readonly PageComponent: ComponentType;
    readonly modalTitle: string;
    readonly nameOfModal?: string;
}

const ModalSwitcher: FC<IModalSwitcher> = ({ ModalComponent, PageComponent, modalTitle, nameOfModal }) => {
    const { isOpened, modalType } = useAppSelector((state) => state.modalState);

    return isOpened && modalType === nameOfModal
        ? ModalComponent && (
        <Modal title={modalTitle ? modalTitle : ""}>
            <ModalComponent />
        </Modal>
    )
        : PageComponent && <PageComponent />;
};

export default ModalSwitcher;
