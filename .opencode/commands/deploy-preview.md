---
description: "Build and deploy preview to Vercel"
---

Execute deployment to Vercel for client preview:

1. Run security check first:
   - npm audit --audit-level=moderate
   - npx tsc --noEmit
   If either fails, STOP and report. Do not deploy.

2. Run production build:
   - npm run build
   If build fails, STOP and report the exact error.

3. If build succeeds, run:
   - vercel --prod
   Follow prompts if any appear.

4. Report the preview URL when deployment is complete.