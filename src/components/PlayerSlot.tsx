import { useState } from "react";
import PlayerSelectModal from "./PlayerSelectModal";
import type { Player } from "../types/player";

type Props = {
    player: Player
}

function PlayerSlot({player} : Props) {
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
                {player.name}
            </div>
            <PlayerSelectModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )
}

export default PlayerSlot