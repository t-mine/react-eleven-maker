import type { Eleven } from "../types/eleven"
import PlayerSlot from "./PlayerSlot"

type Props = {
    eleven: Eleven
}

function ElevenArea({ eleven }: Props) {

    /**
     * フォーメーション名を配列に変換する
     * "4-4-2" → [1, 4, 4, 2]
     * "4-2-1-3" → [1, 4, 2, 1, 3]
     */
    function formationNameToArray(formation: string): number[] {
        return [1, ...formation.split("-").map(Number)];
    }

    return (
        <>
            <div style={{
                backgroundColor: "green",
                position: "relative",
                height: "400px",
                width: "350px"
            }}>
                <div>ElevenArea</div>
                {
                    eleven.formation.positions.map(position => <PlayerSlot position={position} key={position.id} />)
                }
            </div>
        </>
    )
}

export default ElevenArea