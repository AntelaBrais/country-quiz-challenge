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
  Button,
  Text,
  Spacer,
  Divider,
} from "@geist-ui/react"

function App() {
  const [rightCapital, setRightCapital] = useState("")
  const [rightCountry, setRightCountry] = useState("")
  const [questionOptions, setQuestionOptions] = useState([])
  const [colorOption, setColorOption] = useState("default")
  const [isAnswerShown, setIsAnswerShown] = useState(false)

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
      options.push(res.questionCapital.choosenCity)
      setQuestionOptions(options)
    })
  }, [])

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
                      <Button
                        id={option}
                        size='large'
                        type={
                          isAnswerShown
                            ? option == rightCapital
                              ? "success"
                              : "default"
                            : "default"
                        }
                        onClick={showAnswer}>
                        {option}
                      </Button>
                    </Row>
                    <Spacer y={1} />
                  </>
                ))
              : ""}
            <Row justify='end'>
              <Col span={12}>
                <Button type='warning'>Next</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Page>
  )
}

export default App
