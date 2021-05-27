import { useState, useEffect, useRef } from "react"
import { getAllCountriesQuestion } from "./FetchAllCountries"
import QuestionOption from "./QuestionOption"
import { Button as GeistButton } from "@geist-ui/react"

function OptionButton(props) {
  const [rightCountry, setRightCountry] = useState("")
  const [questionOptions, setQuestionOptions] = useState([])
  const [colorOption, setColorOption] = useState("default")
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const [reloadQuestion, setReloadQuestion] = useState(false)

  function showAnswer(params) {
    console.log(props)
    console.log(props.rightCapital)
    setIsAnswerShown(true)
  }

  return (
    <GeistButton
      onClick={showAnswer}
      type={
        isAnswerShown
          ? props.id == props.rightCapital
            ? "success"
            : "error"
          : "default"
      }
      size='large'
      {...props}>
      {props.children}
    </GeistButton>
  )
}

export default OptionButton

// type={
//         isAnswerShown
//           ? props.option == rightCapital
//             ? "success"
//             : "default"
//           : "default"
//       }
