import type { ParsedKeyT } from '../parse-key-string/parse-key-string.types'

import pick from 'lodash/pick'
import isEqual from 'lodash/isEqual'

/**
 * Checks whether the event modifier keys are pressed match the parsed key (i.e. the keys that were bound).
 *
 * @returns {Boolean} true if and only if the modifier keys within the parsed key _all_
 */
export function eventMatchesModifiers(
  event: KeyboardEvent,
  parsedKey: ParsedKeyT,
) {
  const modifierKeys = pick(parsedKey, [
    'altKey',
    'ctrlKey',
    'metaKey',
    'shiftKey',
  ])

  const eventModifierKeys = pick(event, [
    'altKey',
    'ctrlKey',
    'metaKey',
    'shiftKey',
  ])

  // TODO: performance test this function, as this will be running on every keypress.
  return isEqual(modifierKeys, eventModifierKeys)
}
