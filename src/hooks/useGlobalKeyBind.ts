import { useEffect } from 'react'

/**
 * Used to bind a key to a callback function on a global level.
 */
export function useGlobalKeyBind(
  // Key to bind to the callback function.
  key: string,
  // Callback to run when the above key is pressed.
  callback: (ev: KeyboardEvent) => void,
) {
  const handler = handleKeyDown(key, callback)

  useEffect(() => {
    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [handler])
}

/**
 * Used to create the keydown handler function
 */
function handleKeyDown(key: string, callback: (ev: KeyboardEvent) => void) {
  return function keydown(e: KeyboardEvent) {
    // TODO: add parsing of key combinations
    // TODO: add support for checking whether certain keys are pressed.
    // TODO: Test which method of checking for key combinations works amongst multiple keyboard layouts.
    if (e.key === key) {
      callback(e)
    }
  }
}
