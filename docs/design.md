## Player
```ts
type Player {
  id: string, // uuid
  name: string,
  positionId: number
}
type Postion = {
  id: number, // 1～11
  x: number,
  y: number,
}
type Formation = {
    name: "4-4-2" | "4-3-3" | "3-5-2",
    positions: Position[]
}
type Eleven = {
  formation: Formation,
  players: Player[]
}
```

## State
```ts
const [eleven, setEleven] = useState<Eleven>({
  formation: formations[0],
  players: [],
})
```

