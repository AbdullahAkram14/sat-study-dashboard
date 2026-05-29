import { useState } from 'react'
import type { ScoreRecord } from '../App'

type Props = {
  onSubmit: (entry: ScoreRecord) => void
}

export function ScoreEntry({ onSubmit }: Props) {
  const [date, setDate] = useState('')
  const [math, setMath] = useState('')
  const [readingWriting, setReadingWriting] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({ date, math: Number(math), readingWriting: Number(readingWriting) })
    setDate('')
    setMath('')
    setReadingWriting('')
  }

  return (
    <section className="section">
      <h2>Score Entry</h2>
      <form className="score-form" onSubmit={handleSubmit}>
        <label>
          Test Date
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Math Score
          <input
            type="number"
            min={200}
            max={800}
            value={math}
            onChange={e => setMath(e.target.value)}
            required
          />
        </label>
        <label>
          Reading / Writing Score
          <input
            type="number"
            min={200}
            max={800}
            value={readingWriting}
            onChange={e => setReadingWriting(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Score</button>
      </form>
    </section>
  )
}
