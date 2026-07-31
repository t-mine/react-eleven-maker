import type { Eleven } from "../types/eleven"
import PlayerSlot from "./PlayerSlot"

type Props = {
    eleven: Eleven
}

function ElevenArea({ eleven }: Props) {

    return (
    <>
        <div style={{ backgroundColor: "green" }}>
            <div>ElevenArea</div>
            {
                eleven.formation.positions.map(position => <PlayerSlot key={position.id}/>)
            }
        </div>
    </>
    )
}

export default ElevenArea