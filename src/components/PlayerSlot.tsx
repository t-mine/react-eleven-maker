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
                width: "100px",
                position: "absolute",
                left: position.x,
                top: position.y
            }}
        >
            PlayerSlot {position.id}
        </div>
    </>
    )
}

export default PlayerSlot