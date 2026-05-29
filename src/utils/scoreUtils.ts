import type { ScoreRecord } from '../App'

export function totalScore(score: ScoreRecord): number {
  return score.math + score.readingWriting
}

export function calcImprovement(scores: ScoreRecord[]): number {
  const totals = scores.map(totalScore)
  return totals[0] - totals[totals.length - 1]
}
