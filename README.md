### Multi Keyboard Layout Event Binds

Support for binding events to specific keys on a keyboard regardless of keyboard layout.

### Context for building

Web based SPA that requires shortcuts that work no matter the user's keyboard layout, language, etc.

### Planned Features

- Support for keyboard combination string input (e.g. binding "control+shift+1")
- Support for binding a specific combination of keys that work on multiple keyboard layouts
- Support for Meta/Mod key (i.e. Command on Mac and control key on Windows)
- Support for different alphabets (e.g. Cyrillic, accented characters within Spanish/French/Italic/etc)
- Multi-browser support
- Forward/back binding with shift
- Support for platform detection (e.g. specific version of Chrome/Mac OS/Android etc)
- Local bindings (i.e. binds work when specific DOM element is in focus)
- Global bindings (i.e. binds work when the browser window is focused)
- React bindings
- Extensive test suite (including tests for correct detection of different alphabet characters)

### Not implemented

Including but not limited to:

- Non-European languages (e.g. Traditional Chinese, Japanese, etc)
- Non-QWERTY layouts (e.g. Dvorak)
