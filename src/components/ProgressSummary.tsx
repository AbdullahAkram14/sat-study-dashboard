import type { ScoreRecord } from '../App'
import { totalScore, calcImprovement } from '../utils/scoreUtils'

type Props = {
  scores: ScoreRecord[]
}

export function ProgressSummary({ scores }: Props) {
  if (scores.length === 0) {
    return (
      <section className="section">
        <h2>Progress Summary</h2>
        <p>No scores yet. Submit a test to see your progress.</p>
      </section>
    )
  }

  const totals = scores.map(totalScore)
  const latest = totals[0]
  const best = Math.max(...totals)
  const improvement = calcImprovement(scores)

  return (
    <section className="section">
      <h2>Progress Summary</h2>
      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-label">Latest Total</span>
          <span className="stat-value">{latest}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Best Total</span>
          <span className="stat-value">{best}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Improvement</span>
          <span className="stat-value">{improvement > 0 ? `+${improvement}` : improvement}</span>
        </div>
      </div>
    </section>
  )
}
