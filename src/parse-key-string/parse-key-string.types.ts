export type ParsedKeyT = {
  /** The key without the modifier keys */
  key: string // todo: add valid keys type
  /** Whether alt is a part of the key string */
  altKey: boolean
  /** Whether the meta key is part of the key string */
  metaKey: boolean
  /** Whether the control key is part of the key string */
  ctrlKey: boolean
  /** Whether the shift key is part of the key string */
  shiftKey: boolean
}
