import type { Formation } from "./formation"
import type { Player } from "./player"

export type Eleven = {
    formation: Formation,
    players: Player[]
}