import toast, { Toaster } from 'react-hot-toast'

import { useGlobalKeyBind } from './hooks/useGlobalKeyBind'

function App() {
  useGlobalKeyBind('k', (e: KeyboardEvent) => {
    console.log(e)
    toast('k pressed')
  })
  useGlobalKeyBind('mod+k', (e: KeyboardEvent) => {
    console.log(e)
    toast('mod+k  pressed')
  })
  useGlobalKeyBind('ctrl+k', (e: KeyboardEvent) => {
    console.log(e)
    toast('ctrl+k pressed')
  })

  return (
    <div>
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold underline text-center">
        Multi keyboard layout binds
      </h1>
      <p>
        Try it out! Press <code>k</code>, <code>mod+k</code>, or{' '}
        <code>ctrl+k</code> to see the magic happen!
      </p>
    </div>
  )
}

export default App
