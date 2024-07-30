import { useCallback } from 'react'

/**
 * Used to bind a key to a callback function on a global level.
 */
export function useGlobalKeyBind({ key, callback }: ElementKeyBindProps) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      // TODO: add parsing of key combinations
      // TODO: add support for checking whether certain keys are pressed.
      // TODO: Test which method of checking for key combinations works amongst multiple keyboard layouts.
      if (e.key === key) {
        callback(e)
      }
    },
    [key, callback],
  )

  document.addEventListener('keydown', handler)

  return () => {
    document.removeEventListener('keydown', handler)
  }
}

interface ElementKeyBindProps {
  /** Key(s) for the event */
  key: string
  /** Callback to be run upon the key press occurring. */
  callback: (ev: KeyboardEvent) => void
}
