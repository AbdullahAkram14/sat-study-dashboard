const AREAS = [
  'Algebra',
  'Geometry',
  'Grammar',
  'Reading Comprehension',
  'Vocabulary',
] as const

const RECOMMENDATIONS: Record<string, string> = {
  Algebra: 'Practice solving linear equations and systems of equations. Focus on word problems that require setting up expressions.',
  Geometry: 'Review triangle rules, circle theorems, and coordinate geometry. Work through problems involving area and angle relationships.',
  Grammar: 'Study subject-verb agreement, punctuation rules, and sentence structure. Practice identifying and fixing run-ons and fragments.',
  'Reading Comprehension': 'Work on identifying the main idea and author\'s purpose. Practice summarising paragraphs in one sentence before answering questions.',
  Vocabulary: 'Learn high-frequency SAT words in context. Use flashcards and read challenging texts to build familiarity with academic vocabulary.',
}

type Props = {
  weakArea: string
  onSelect: (area: string) => void
}

export function WeakAreas({ weakArea, onSelect }: Props) {
  return (
    <section className="section">
      <h2>Weak Areas</h2>
      <label className="weak-area-label">
        Select a weak area
        <select
          value={weakArea}
          onChange={e => onSelect(e.target.value)}
          className="weak-area-select"
        >
          <option value="">— choose one —</option>
          {AREAS.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </label>
      {weakArea && (
        <div className="recommendation">
          <strong>{weakArea}</strong>
          <p>{RECOMMENDATIONS[weakArea]}</p>
        </div>
      )}
    </section>
  )
}
