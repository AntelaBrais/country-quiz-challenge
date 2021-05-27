import "./App.css"
import { Page, Row, Col, Card, Text } from "@geist-ui/react"

// TODO: Format, polish
function Results({ points }) {
  return (
    <Page>
      <Row justify='center'>
        <Col span={12}>
          <Card shadow>
            <Row justify='center'>
              <Text h1>{`Results`}</Text>
            </Row>
            <Row justify='center'>
              <Text>{`You got ${points} correct answers`}</Text>
            </Row>
          </Card>
        </Col>
      </Row>
    </Page>
  )
}

export default Results
