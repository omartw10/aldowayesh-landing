---
description: "Sync English translations with Arabic and validate RTL/LTR"
---

@i18n-agent then @content-writer:

1. Read src/messages/ar.json
2. Read src/messages/en.json
3. Identify any keys present in ar.json but missing from en.json
4. @content-writer: Write proper English translations for all missing keys
5. @i18n-agent: Verify all components work correctly in LTR mode
6. Report all keys that were added or updated