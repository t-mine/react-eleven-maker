
import "./PlayerSelectModal.css";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

function PlayerSelectModal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-body">
                    モーダルのサンプルです。
                </div>

                <div className="modal-actions">
                    <button
                        className="modal-button modal-button-primary"
                        onClick={onClose}
                    >
                        閉じる
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerSelectModal;
