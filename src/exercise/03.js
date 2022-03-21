// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext([0, () => []])

function CountProvider(props) {
    const [count, setCount] = React.useState(0)
    const value = [count, setCount]
    return <CountContext.Provider value={value} {...props} />
}

function useCount() {
    const context = React.useContext(CountContext)
    if (!context) {
        throw new Error(`No context `)
    }
    return context
}

function CountDisplay() {
    // 🐨 get the count from useContext with the CountContext
    const [count] = useCount()
    return <div>{`The current count is ${count}`}</div>
}


function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
    const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
        <CountProvider>
            <CountDisplay />
            <Counter />
        </CountProvider>
    </div>
  )
}

export default App
