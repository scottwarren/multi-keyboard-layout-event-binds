import { parseKeyString } from '@/parse-key-string/parse-key-string'
import { eventMatchesModifiers } from './event-matches-modifiers'

import { describe, it, expect } from 'vitest'

describe('event-matches-key', () => {
  it('return true if a modifier key matches', () => {
    const ctrlKEvent = createFakeKeyboardEvent({
      key: 'k',
      ctrlKey: true,
    })

    const parsedKey = parseKeyString('ctrl+k')

    expect(eventMatchesModifiers(ctrlKEvent, parsedKey)).toBe(true)
  })

  it('should return false if modifiers are not _all_ pressed', () => {
    const kEvent = createFakeKeyboardEvent({
      key: 'k',
    })

    const parsedKey = parseKeyString('alt+ctrl+k')

    expect(eventMatchesModifiers(kEvent, parsedKey)).toBe(false)
  })

  it('should return true if all modifiers are pressed', () => {
    const altCtrlKEvent = createFakeKeyboardEvent({
      key: 'k',
      altKey: true,
      ctrlKey: true,
    })

    const parsedKey = parseKeyString('alt+ctrl+k')

    expect(eventMatchesModifiers(altCtrlKEvent, parsedKey)).toBe(true)
  })
})

/**
 * Helper function for creating a fake KeyboardEvent object.
 * @param values
 * @returns {KeyboardEvent} -- not an entire KeyboardEvent object, just the values we need.
 */
function createFakeKeyboardEvent(values: Partial<KeyboardEvent>) {
  return <KeyboardEvent>{
    ...FAKE_KEYBOARD_EVENT,
    ...values,
  }
}

const FAKE_KEYBOARD_EVENT = {
  altKey: false,
  metaKey: false,
  ctrlKey: false,
  shiftKey: false,
} as KeyboardEvent
