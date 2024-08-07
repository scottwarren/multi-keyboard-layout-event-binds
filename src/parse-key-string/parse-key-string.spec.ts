import { parseKeyString } from './parse-key-string'
import type { ParsedKeyT } from './parse-key-string.types'

import { describe, it, expect } from 'vitest'

describe('parse-key-string', () => {
  describe('key parsing', () => {
    it('should parse single key combinations', () => {
      expect(parseKeyString('k')).toStrictEqual({
        key: 'k',
        ...DEFAULTS,
      })

      expect(parseKeyString('esc')).toStrictEqual({
        key: 'esc',
        ...DEFAULTS,
      })
    })
    it('should parse key combinations that include control', () => {
      expect(parseKeyString('ctrl+k')).toStrictEqual({
        key: 'k',
        ...DEFAULTS,
        ctrlKey: true,
      })
    })
  })
})

const DEFAULTS: Omit<ParsedKeyT, 'key'> = {
  altKey: false,
  metaKey: false,
  ctrlKey: false,
  shiftKey: false,
}
