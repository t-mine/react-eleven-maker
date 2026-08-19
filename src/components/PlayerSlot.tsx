import type { Position } from "../types/position"

type Props = {
    position: Position
}

function PlayerSlot({position}: Props) {

    return (
    <>
        <div 
            style={{ 
                backgroundColor: "skyblue",
                width: "60px",
                height: "60px",
                position: "absolute",
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
            }}
        >
            PlayerSlot {position.id}
        </div>
    </>
    )
}

export default PlayerSlot