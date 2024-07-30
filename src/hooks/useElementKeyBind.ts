import { useCallback } from 'react'

/**
 *
 */
export function useElementKeyBind({
  key,
  callback,
  element,
}: ElementKeyBindProps) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      // TODO: add parsing of key combinations
      // TODO: add support for checking whether certain keys are pressed.
      if (e.key === key) {
        callback(e)
      }
    },
    [key, callback],
  )

  element.addEventListener('keydown', handler)

  return () => {
    element.removeEventListener('keydown', handler)
  }
}

interface ElementKeyBindProps {
  /** Key(s) for the event */
  key: string
  /** Element that the */
  element: HTMLElement
  callback: (ev: KeyboardEvent) => void
}
