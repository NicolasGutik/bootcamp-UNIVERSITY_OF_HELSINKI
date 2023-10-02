import React from 'react'
import StatisticsLine from '../StatisticsLine/StatisticsLine'

const Statistics = ({title, good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good * 100) / all
  return (
    all > 0 ? (
    <>
    <table>
        <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
        </tbody>
    </table>
    </>
    ) : <p>no feedback given</p>
  )
}

export default Statistics