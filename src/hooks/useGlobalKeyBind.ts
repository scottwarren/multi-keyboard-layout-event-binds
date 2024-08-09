import { eventMatchesModifiers } from '../event-matches-modifiers/event-matches-modifiers'
import { parseKeyString } from '../parse-key-string/parse-key-string'
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
  const parsedKey = parseKeyString(key)

  return function keydown(event: KeyboardEvent) {
    // Check for modifier keys in the event
    // _if_ the parsed key includes the modifier key

    // TODO: add parsing of key combinations
    // TODO: Test which method of checking for key combinations works amongst multiple keyboard layouts.
    if (event.key !== parsedKey.key) {
      console.log('key does not match', `event.key: ${event.key}`)
      return
    }

    const modifierMatches = eventMatchesModifiers(event, parsedKey)

    if (!modifierMatches) {
      return
    }

    callback(event)
  }
}
