import { useState } from 'react'
import { useGlobalKeyBind } from './hooks/useGlobalKeyBind'

function App() {
  const [showMessage, setShowMessage] = useState(false)

  useGlobalKeyBind('k', () => {
    console.log('hello!', 'k', 'pressed')
    setShowMessage((m) => !m)
  })

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">
        Multi keyboard layout binds
      </h1>
      {!showMessage && (
        <p>
          Try it out! Press <code>k</code> to see the magic happen!
        </p>
      )}
      {showMessage && <p>hello! k pressed</p>}
    </div>
  )
}

export default App
