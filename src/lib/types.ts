export type Question = {
  prompt: string
  choices: [string, string, string]
  answerIndex: 0 | 1 | 2
  explanation: string
  tag?: 'efektif' | 'spok'
}
