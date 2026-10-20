import { useState } from "react";
import PlayerSelectModal from "./PlayerSelectModal";

function PlayerSlot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                style={{
                    backgroundColor: "skyblue",
                    width: "60px",
                    height: "60px",
                }}
            >
                PlayerSlot
            </div>
            <PlayerSelectModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )
}

export default PlayerSlot