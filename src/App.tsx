import { useState } from 'react'
import './App.css'
import DownloadButton from './components/DownloadButton'
import ElevenArea from './components/ElevenArea'
import FormationDropDown from './components/FormationDropDown'
import PlayerList from './components/PlayerList'
import type { Eleven } from './types/eleven'
import type { Formation } from './types/formation'

function App() {

const formations: Formation[] = ["4-4-2"];

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
