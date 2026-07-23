import './App.css'
import DownloadButton from './components/DownloadButton'
import ElevenArea from './components/ElevenArea'
import FormationDropDown from './components/FormationDropDown'
import PlayerList from './components/PlayerList'

function App() {

  return (
    <>
      <FormationDropDown/>
      <ElevenArea/>
      <DownloadButton/>
      <PlayerList/>
    </>
  )
}

export default App
