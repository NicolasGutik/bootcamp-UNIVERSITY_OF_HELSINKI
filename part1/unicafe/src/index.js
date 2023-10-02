import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button/Button'
import Statistics from './components/Statistics/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increment = (state, setState) => () => setState(state + 1)

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={increment(good, setGood)} name="good"/>
      <Button onClick={increment(neutral, setNeutral)} name="neutral"/>
      <Button onClick={increment(bad, setBad)} name="bad"/>
      <Statistics
      title="Statistics"
      good={good}
      neutral={neutral}
      bad={bad}
      />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)