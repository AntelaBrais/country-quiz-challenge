import "./App.css"
import { useState, useEffect, Fragment } from "react"
import { getAllCountriesQuestion } from "./FetchAllCountries"
import { Page, Row, Col, Card, Text, Spacer, Button } from "@geist-ui/react"

function App() {
  const [rightCapital, setRightCapital] = useState("")
  const [rightCountry, setRightCountry] = useState("")
  const [questionOptions, setQuestionOptions] = useState([])
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const [reloadQuestion, setReloadQuestion] = useState(false)

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
                        onClick={() => setIsAnswerShown(true)}>
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
