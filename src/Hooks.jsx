import React, { useState, useCallback, useEffect, useMemo } from 'react'

const randomColour = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
const functionsSet = new Set();

const useFriendStatus = (count, delta) => {
  const [isOnline, setIsOnline] = useState(false)
  const [isConnect, setIsConnect] = useState(false)
  useEffect(() => {
    console.log('render', count, delta)
    if (count === delta) {
      setIsConnect(true);
      setTimeout(() => {
        setIsOnline(true)
        setIsConnect(false);
      }, 1000);
    } else {
      setIsOnline(false)
    }
  }, [count, delta])
  return [
    isOnline,
    isConnect
  ]
}

export default function (props) {
  // const count = useCounter(0)
  const [count, setCount] = useState(0)
  const [delta, setDelta] = useState(0)

  const [isUserOnline, isConnect] = useFriendStatus(count, delta)

  const addCounter = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  const addDelta = useCallback(() => {
    setDelta(delta => delta + 1)
  }, [])

  // functionsSet.add(addCounter);
  // functionsSet.add(deltaPower2)
  // functionsSet.add(addDelta);
  // functionsSet.add(addBoth);

  return (
    <div>
      <h1>Hello hooks, {count}</h1>
      <p>Delta: {delta}</p>
      <p>Counter: {count}</p>
      <p>Status: {isConnect ? '...' : isUserOnline ? 'ON' : 'OFF'}</p>

      <button style={{ padding: 30, background: randomColour() }} onClick={() => addCounter()}>Count</button>
      <button style={{ padding: 30, background: randomColour() }} onClick={() => addDelta()}>Add delta</button>
      <p>Functions created: {functionsSet.size}</p>
    </div>
  )
}