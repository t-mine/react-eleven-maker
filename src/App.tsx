import { useState } from 'react'
import './App.css'
import DownloadButton from './components/DownloadButton'
import ElevenArea from './components/ElevenArea'
import DropDown from './components/DropDown'
import PlayerList from './components/PlayerList'
import type { Eleven } from './types/eleven'
import type { Option } from './types/option'

function App() {

  // イレブンのデータ
  const [eleven, setEleven] = useState<Eleven>({
    formation: "4-4-2",
    players: [],
  })

  // フォーメーションドロップダウンの選択肢
  const formations: Option[] = [
    { value: "4-4-2", label: "4-4-2" },
    { value: "3-5-2", label: "3-5-2" },
    { value: "4-1-2-3", label: "4-1-2-3" }
  ];

  // ドロップダウンでフォーメーション変更時にイレブンのフォーメーションを更新
  const handleFormationChange = (value: string) => {
    setEleven(prev => ({
      ...prev,
      formation: value,
    }));
  };

  return (
    <>
      <DropDown options={formations} value={eleven.formation} onChange={handleFormationChange} />
      <ElevenArea eleven={eleven} />
      <DownloadButton />
      <PlayerList />
    </>
  )
}

export default App
