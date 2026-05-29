import type { ScoreRecord } from '../App'
import { totalScore } from '../utils/scoreUtils'

type Props = {
  scores: ScoreRecord[]
}

export function ScoreHistory({ scores }: Props) {
  if (scores.length === 0) {
    return (
      <section className="section">
        <h2>Score History</h2>
        <p>No scores submitted yet.</p>
      </section>
    )
  }

  return (
    <section className="section">
      <h2>Score History</h2>
      <table className="score-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Math</th>
            <th>Reading / Writing</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={i}>
              <td>{s.date}</td>
              <td>{s.math}</td>
              <td>{s.readingWriting}</td>
              <td>{totalScore(s)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
