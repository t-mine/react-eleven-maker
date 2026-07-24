import type { Position } from "./position"

export type Formation = {
    name: "4-4-2" | "4-3-3" | "3-5-2",
    positions: Position[]
}