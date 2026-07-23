# サッカースタメン図作成ツール設計

## 1. 目的
Reactを学ぶためサッカースタメン図作成ツールを作成する。

---

## 2. 機能
- ドロップダウンでフォーメーションを切り替える
- D&Dで選手をポジションに設定する
- D&Dで選手をポジションから除外する
- 画像出力ボタンでスタメン図の画像をダウンロードする

---

## 3. 画面構成

```
+--------------------------------------+
| フォーメーション ▼     ダウンロード |
+--------------------------------------+
|                                      |
|          スタメンエリア              |
|                                      |
+--------------------------------------+
| プレイヤー一覧                       |
| □ 三笘                              |
| □ 久保                              |
| □ 遠藤                              |
| ...                                 |
+--------------------------------------+
```

---

## 4. コンポーネント構成

```
App
├─ FormationDropDown
├─ ElevenArea
    └─ PlayerSlot
├─ DownloadButton
└─ PlayerList
    └─ PlayerItem
```

### 各コンポーネントの役割

| コンポーネント | 役割 |
|---------------|------|
| App | スタメンデータを管理する |
| FormationDropDown | フォーメーションを切り替える |
| ElevenArea | スタメンを表示する |
| PlayerSlot | 選手を配置する領域 |
| DownloadButton | スタメン図をダウンロードする |
| PlayerList | プレイヤーの一覧を表示する |
| PlayerItem | プレイヤーの情報を表示する |
---

## 5. 状態設計

### Type
```ts
type Player {
  id: string, // uuid
  name: string,
  positionId: number | null
}
type Position = {
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

### State
```ts
const [eleven, setEleven] = useState<Eleven>({
  formation: formations[0],
  players: [],
})
```

