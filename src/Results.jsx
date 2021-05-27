import "./App.css"
import { useState, useEffect, Fragment } from "react"
import { getAllCountriesQuestion } from "./FetchAllCountries"
import { Page, Row, Col, Card, Text, Spacer, Button } from "@geist-ui/react"

// TODO: Format, polish
function Results({ points }) {
  return (
    <Page>
      <Row justify='center'>
        <Col span={12}>
          <Card shadow>
            <Row justify='center'>
              <Text>{`Results`}</Text>
            </Row>
            <Row justify='end'>
              <Col span={12}>
                <Text>{`You got ${points} correct answers`}</Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Page>
  )
}

export default Results
