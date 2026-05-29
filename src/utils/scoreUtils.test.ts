import { describe, it, expect } from 'vitest'
import { totalScore, calcImprovement } from './scoreUtils'

describe('totalScore', () => {
  it('sums math and readingWriting', () => {
    expect(totalScore({ date: '2024-01-01', math: 600, readingWriting: 650 })).toBe(1250)
  })
})

describe('calcImprovement', () => {
  it('returns latest total minus first total', () => {
    const scores = [
      { date: '2024-03-01', math: 650, readingWriting: 700 },
      { date: '2024-01-01', math: 600, readingWriting: 620 },
    ]
    expect(calcImprovement(scores)).toBe(130)
  })

  it('returns 0 with a single score', () => {
    expect(calcImprovement([{ date: '2024-01-01', math: 600, readingWriting: 650 }])).toBe(0)
  })
})
