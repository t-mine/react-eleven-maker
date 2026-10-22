import type { Eleven } from "../types/eleven"
import PlayerSlot from "./PlayerSlot"

type Props = {
    eleven: Eleven
}

function ElevenArea({ eleven }: Props) {

    /**
     * フォーメーション名を配列に変換する
     * "4-4-2" → [2, 4, 4, 1]
     * "4-2-1-3" → [3, 1, 2, 4, 1]
     */
    function formationNameToArray(formation: string): number[] {
        return [1, ...formation.split("-").map(Number)].reverse();
    }

    const formation = formationNameToArray(eleven.formation);

    let index = 10;

    return (
        <>
            <div style={{
                backgroundColor: "green",
                height: "400px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                {formation.map(num => (
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        {Array.from({ length: num }).map(() => <PlayerSlot player={eleven.players[index--]}></PlayerSlot>)}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ElevenArea