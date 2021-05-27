import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect, useRef } from "react"
import { getAllCountriesQuestion } from "./FetchAllCountries"
import QuestionOption from "./QuestionOption"
import {
  Page,
  Row,
  Col,
  Card,
  Text,
  Spacer,
  Divider,
  Button,
} from "@geist-ui/react"
import OptionButton from "./OptionButton"

function App() {
  const [rightCapital, setRightCapital] = useState("")
  const [rightCountry, setRightCountry] = useState("")
  const [questionOptions, setQuestionOptions] = useState([])
  const [colorOption, setColorOption] = useState("default")
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const [reloadQuestion, setReloadQuestion] = useState(false)

  function showAnswer() {
    setIsAnswerShown(true)
  }

  useEffect(() => {
    getAllCountriesQuestion().then((res) => {
      let options = res.otherCapitalOptions.map((option) => {
        return option
      })
      setRightCountry(res.questionCapital.choosenCountry)
      setRightCapital(res.questionCapital.choosenCity)
      let randomPosition = Math.random() * (options.length - 0) + 0
      options.splice(randomPosition, 0, res.questionCapital.choosenCity)
      setQuestionOptions(options)
    })
  }, [reloadQuestion])

  return (
    <Page>
      <Row justify='center'>
        <Col span={12}>
          <Card shadow>
            <Row justify='center'>
              <Text>
                {rightCountry && rightCapital
                  ? `What is the capital of ${rightCountry}? (${rightCapital})`
                  : ""}
              </Text>
            </Row>
            {questionOptions
              ? questionOptions.map((option) => (
                  <>
                    <Row justify='center'>
                      <OptionButton id={option} rightCapital={rightCapital}>
                        {option}
                      </OptionButton>
                    </Row>
                    <Spacer y={1} />
                  </>
                ))
              : ""}
            <Row justify='end'>
              <Col span={12}>
                <Button
                  type='warning'
                  onClick={() => setReloadQuestion(!reloadQuestion)}>
                  Next
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Page>
  )
}

export default App
