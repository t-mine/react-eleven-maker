import { useState } from 'react'
import './App.css'
import DownloadButton from './components/DownloadButton'
import ElevenArea from './components/ElevenArea'
import FormationDropDown from './components/FormationDropDown'
import PlayerList from './components/PlayerList'
import type { Eleven } from './types/eleven'
import type { Formation } from './types/formation'

function App() {

const formations: Formation[] = [
  {
    name: "4-4-2",
    positions: [
      // GK
      { id: 1, x: 50, y: 90 },

      // DF
      { id: 2, x: 15, y: 70 }, // 左SB
      { id: 3, x: 38, y: 70 }, // CB
      { id: 4, x: 62, y: 70 }, // CB
      { id: 5, x: 85, y: 70 }, // 右SB

      // MF
      { id: 6, x: 15, y: 45 }, // 左MF
      { id: 7, x: 38, y: 45 }, // CM
      { id: 8, x: 62, y: 45 }, // CM
      { id: 9, x: 85, y: 45 }, // 右MF

      // FW
      { id: 10, x: 40, y: 20 }, // FW
      { id: 11, x: 60, y: 20 }, // FW
    ],
  },
];

  const [eleven, setEleven] = useState<Eleven>({
    formation: formations[0],
    players: [],
  })

  return (
    <>
      <FormationDropDown/>
      <ElevenArea eleven={eleven}/>
      <DownloadButton/>
      <PlayerList/>
    </>
  )
}

export default App
