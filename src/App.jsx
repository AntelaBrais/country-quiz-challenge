import { Fragment, useState, useCallback } from "react"
import "./App.css"
import Game from "./Game"
import Results from "./Results"
import { Text } from "@geist-ui/react"

function App() {
  const [points, setPoints] = useState(0)
  const [isEnd, setIsEnd] = useState(false)

  const callbackPoints = useCallback((points) => {
    setPoints(points)
  }, [])

  const callbackEnd = useCallback((end) => {
    setIsEnd(end)
  }, [])

  return (
    <Fragment>
      {!isEnd ? (
        <Game checkPoints={callbackPoints} checkIsEnd={callbackEnd} />
      ) : (
        <Results points={points} />
      )}
    </Fragment>
  )
}

export default App
