import { useState } from 'react'
import './App.css'
import DownloadButton from './components/DownloadButton'
import ElevenArea from './components/ElevenArea'
import DropDown from './components/DropDown'
import type { Eleven } from './types/eleven'
import type { Option } from './types/option'

function App() {

  // イレブンのデータ
  const [eleven, setEleven] = useState<Eleven>({
    formation: "4-4-2",
    players: [
        { id: 1, name: "鈴木彩艶", position: "GK" },
        { id: 2, name: "菅原由勢", position: "DF" },
        { id: 3, name: "板倉滉", position: "DF" },
        { id: 4, name: "冨安健洋", position: "DF" },
        { id: 5, name: "伊東純也", position: "MF" },
        { id: 6, name: "遠藤航", position: "MF" },
        { id: 7, name: "守田英正", position: "MF" },
        { id: 8, name: "三笘薫", position: "MF" },
        { id: 9, name: "久保建英", position: "MF" },
        { id: 10, name: "南野拓実", position: "FW" },
        { id: 11, name: "上田綺世", position: "FW" },
    ],
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
    </>
  )
}

export default App
