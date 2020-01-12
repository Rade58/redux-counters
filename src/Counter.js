import React from 'react'
import {CounterStyle} from './index.module.css'

const Counter = ({count, increment, decrement, reset}) => {

  console.log({
    increment, decrement, count, reset
  })

  return (
    <section className={CounterStyle}>
      <button onClick={increment} className="material-icons"></button>
      <div count={count}></div>
      <button onClick={decrement} className="material-icons"></button>
      <button onClick={reset} className="material-icons"></button>
    </section>
  )
}

export default Counter
