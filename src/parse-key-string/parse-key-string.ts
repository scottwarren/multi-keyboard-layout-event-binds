import type { ParsedKeyT } from './parse-key-string.types'

import { isMacOs, isWindows, isLinux } from 'environment'

/**
 * Used to parse a human readable string of a key binding.
 *
 * @param keyString {string} human readable key representation separated by `+`. e.g. ctrl+shift+3, mod+k, p, etc
 */
export function parseKeyString(keyString: string): ParsedKeyT {
  const parts = keyString.split('+')

  if (parts === undefined || parts.length === 0) {
    throw new Error('Invalid key')
  }

  // We assume that the key itself is always positioned last within the key string
  const key = parts.at(-1)

  if (!key) {
    throw new Error('Invalid key')
  }

  let metaKey = false,
    altKey = false,
    ctrlKey = false,
    shiftKey = false

  if (parts.includes('shift')) {
    shiftKey = true
  }

  if (parts.includes('mod')) {
    if (isMacOs) {
      metaKey = true
    }

    if (isWindows || isLinux) {
      ctrlKey = true
    }
  }

  if (parts.includes('ctrl')) {
    ctrlKey = true
  }

  if (parts.includes('alt')) {
    altKey = true
  }

  if (
    parts.includes('meta') ||
    parts.includes('command') ||
    parts.includes('cmd')
  ) {
    metaKey = true
  }

  return {
    key,
    metaKey,
    altKey,
    ctrlKey,
    shiftKey,
  }
}
