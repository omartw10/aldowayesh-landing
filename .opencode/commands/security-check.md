---
description: "Run a full security audit on the entire project"
---

@security-auditor Run a comprehensive security audit on the entire project:

1. Run: npm audit --audit-level=moderate
2. Run: npx tsc --noEmit
3. Run: npx eslint src/ --ext .ts,.tsx
4. Search for exposed secrets: grep -rn "sk-\|API_KEY\|secret" src/
5. Search for raw phone numbers in JSX: grep -rn "508089886" src/ --include="*.tsx"
6. Verify security headers exist in next.config.ts
7. Verify all CTA buttons use href="tel:" or href="https://wa.me/"
8. Verify prefers-reduced-motion is respected in animation files

Output a detailed report with all findings.