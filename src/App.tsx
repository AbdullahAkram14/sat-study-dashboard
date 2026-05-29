import { ScoreEntry } from './components/ScoreEntry'
import { ProgressSummary } from './components/ProgressSummary'
import { WeakAreas } from './components/WeakAreas'

export default function App() {
  return (
    <div className="app">
      <h1>SAT Study Dashboard</h1>
      <ScoreEntry />
      <ProgressSummary />
      <WeakAreas />
    </div>
  )
}
