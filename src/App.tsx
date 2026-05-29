import { useState } from 'react'
import { ScoreEntry } from './components/ScoreEntry'
import { ScoreHistory } from './components/ScoreHistory'
import { ProgressSummary } from './components/ProgressSummary'
import { WeakAreas } from './components/WeakAreas'

export type ScoreRecord = {
  date: string
  math: number
  readingWriting: number
}

export default function App() {
  const [scores, setScores] = useState<ScoreRecord[]>([])

  function handleSubmit(entry: ScoreRecord) {
    setScores(prev => [entry, ...prev])
  }

  return (
    <div className="app">
      <h1>SAT Study Dashboard</h1>
      <ScoreEntry onSubmit={handleSubmit} />
      <ScoreHistory scores={scores} />
      <ProgressSummary scores={scores} />
      <WeakAreas />
    </div>
  )
}
