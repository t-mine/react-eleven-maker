import { useState } from "react";
import PlayerSelectModal from "./PlayerSelectModal";

function PlayerSlot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                style={{
                    backgroundColor: "skyblue",
                    width: "60px",
                    height: "60px",
                }}
            >
                PlayerSlot
                <button onClick={() => setIsOpen(true)}>
                    モーダルを開く
                </button>
                <PlayerSelectModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </>
    )
}

export default PlayerSlot