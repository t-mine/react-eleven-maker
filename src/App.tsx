import { useState } from 'react'
import './App.css'
import DownloadButton from './components/DownloadButton'
import ElevenArea from './components/ElevenArea'
import FormationDropDown from './components/FormationDropDown'
import PlayerList from './components/PlayerList'
import type { Eleven } from './types/eleven'
import type { Formation } from './types/formation'

function App() {

  const formations : Formation[] = [
    {
      name: "4-4-2",
      positions: [
        {id: 1, x: 10, y: 10,},
        {id: 2, x: 10, y: 10,},
        {id: 3, x: 10, y: 10,},
        {id: 4, x: 10, y: 10,},
        {id: 5, x: 10, y: 10,},
        {id: 6, x: 10, y: 10,},
        {id: 7, x: 10, y: 10,},
        {id: 8, x: 10, y: 10,},
        {id: 9, x: 10, y: 10,},
        {id: 10, x: 10, y: 10,},
        {id: 11, x: 10, y: 10,},
      ],
    }
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
