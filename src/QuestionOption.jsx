import { Card } from "@geist-ui/react"

function QuestionOption({ option }) {
  return (
    <Card hoverable onClick={(e) => console.log(option)}>
      <p>{option}</p>
    </Card>
  )
}

export default QuestionOption
