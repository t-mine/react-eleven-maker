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
      { id: 1, x: 175, y: 350 },

      // DF
      { id: 2, x: 40,  y: 250 },
      { id: 3, x: 130, y: 250 },
      { id: 4, x: 220, y: 250 },
      { id: 5, x: 310, y: 250 },

      // MF
      { id: 6, x: 40,  y: 150 },
      { id: 7, x: 130, y: 150 },
      { id: 8, x: 220, y: 150 },
      { id: 9, x: 310, y: 150 },

      // FW
      { id: 10, x: 130, y: 50 },
      { id: 11, x: 220, y: 50 },
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
