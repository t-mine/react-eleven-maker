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
            <PlayerSlot/>
        </div>
    </>
    )
}

export default ElevenArea