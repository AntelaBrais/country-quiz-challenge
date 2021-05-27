import "./App.css"
import { useState, useEffect, Fragment } from "react"
import { getAllCountriesQuestion } from "./FetchAllCountries"
import { Page, Row, Col, Card, Text, Spacer, Button } from "@geist-ui/react"

function Game({ checkPoints, checkIsEnd }) {
  const [rightCapital, setRightCapital] = useState("")
  const [rightCountry, setRightCountry] = useState("")
  const [questionOptions, setQuestionOptions] = useState([])
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const [reloadQuestion, setReloadQuestion] = useState(false)
  const [points, setPoints] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)

  const numberOfQuestions = 10

  useEffect(() => {
    getAllCountriesQuestion().then((res) => {
      let options = res.otherCapitalOptions.map((option) => option)
      setRightCountry(res.questionCapital.choosenCountry)
      setRightCapital(res.questionCapital.choosenCity)
      let randomPosition = Math.random() * (options.length - 0) + 0
      options.splice(randomPosition, 0, res.questionCapital.choosenCity)
      setQuestionOptions(options)
    })
  }, [reloadQuestion])

  useEffect(() => {}, [points])

  function showAnswers(option) {
    if (!isAnswerShown) {
      setIsAnswerShown(true)
      if (option === rightCapital) {
        setPoints(points + 1)
        checkPoints(points + 1)
      }
    }
  }

  return (
    <Page>
      <Row justify='center'>
        <Col span={12}>
          <Card shadow>
            <Row justify='center'>
              <Text
                h1>{`Question ${questionIndex} of ${numberOfQuestions}`}</Text>
            </Row>
            <Row justify='center'>
              <Text>
                {rightCountry && rightCapital
                  ? `What is the capital of ${rightCountry}?`
                  : ""}
              </Text>
            </Row>
            {questionOptions
              ? questionOptions.map((option, index) => (
                  <Fragment key={index}>
                    <Row justify='center'>
                      <Button
                        id={option}
                        type={
                          isAnswerShown
                            ? option === rightCapital
                              ? "success"
                              : "error"
                            : "default"
                        }
                        onClick={() => showAnswers(option)}>
                        {option}
                      </Button>
                    </Row>
                    <Spacer y={1} />
                  </Fragment>
                ))
              : ""}
            <Row justify='end'>
              <Col span={12}>
                <Button
                  type='warning'
                  onClick={() => {
                    setIsAnswerShown(false)
                    setReloadQuestion(!reloadQuestion)
                    questionIndex < numberOfQuestions
                      ? setQuestionIndex(questionIndex + 1)
                      : checkIsEnd(true)
                  }}>
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

export default Game
