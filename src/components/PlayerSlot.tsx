import type { Position } from "../types/position"

type Props = {
    position: Position
}

function PlayerSlot({position}: Props) {

    const x = position.x;
    const y = position.y;

    return (
    <>
        <div 
            style={{ 
                backgroundColor: "blue",
                width: "100px"
            }}
        >
            PlayerSlot
        </div>
    </>
    )
}

export default PlayerSlot