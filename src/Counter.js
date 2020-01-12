import React from 'react'
import {CounterStyle} from './index.module.css'

const Counter = ({count, increment, decrement, reset}) => {

  console.log({
    increment, decrement, count, reset
  })

  return (
    <section className={CounterStyle}>
      <button className="material-icons"></button>
      <div>48</div>
      <button className="material-icons"></button>
      <button className="material-icons"></button>
    </section>
  )
}

export default Counter
