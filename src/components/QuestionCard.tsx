type Props = {
  index: number
  total: number
  prompt: string
  choices: string[]
  selected: number | null
  correct?: number | null
  onSelect: (i: number) => void
  disabled?: boolean
}
export default function QuestionCard({
  index,
  total,
  prompt,
  choices,
  selected,
  correct,
  onSelect,
  disabled,
}: Props) {
  return (
    <div
      className={
        'card min-h-0 ' +
        (selected != null ? (selected === correct ? 'answer-correct' : 'answer-wrong') : '')
      }
    >
      <p className="text-sm text-gray-600 mb-2">
        Soal {index + 1} dari {total}
      </p>
      <div className="mb-4 min-h-0 max-h-[clamp(160px,42vh,380px)] overflow-auto pr-2">
        <h3 className="text-lg font-bold">{prompt}</h3>
      </div>
      <div className="grid gap-2">
        {choices.map((c, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            disabled={disabled}
            className={`btn w-full text-left ${selected === i ? 'btn-primary' : 'btn-ghost'}`}
          >
            {['a', 'b', 'c'][i]}. {c}
          </button>
        ))}
      </div>
    </div>
  )
}
