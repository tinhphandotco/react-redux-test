import React, { useState, useCallback, useEffect, useMemo } from 'react'

const useCounter = initilValue => {
  const [counter, setCount] = useState(initilValue)

  const addCounter = useCallback(() => {
    console.log(counter)
    setCount(counter + 1)
  })

  useEffect(() => {
    setInterval(() => {
      console.log('render')
      addCounter()
    }, 1000)
  }, [])
  


  return counter
}

export default function(props) {
  // const count = useCounter(0)
  const [count, setCount] = useState(0)

  const addCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])

  useEffect(() => {
    setInterval(addCounter, 1000);
  }, [])

  console.log('render')

  return (
    <div>
      <h1>Hello hooks, {count}</h1>
      <button onClick={() => addCounter(count + 1)}></button>
    </div>
  )
}