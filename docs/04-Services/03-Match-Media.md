---
since: 0.3.0
---

# Match Media

## Service Overview

<p>
The match media service is a simple factory that wraps the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia" target="_blank">Window: matchMedia()</a> method into a Tansu readable store.
</p>

```typescript
type createMatchMedia = (query: string) => Readable<boolean>;
```

## In action

```sample
{MatchMedia:matchMedia/matchMedia:138}
```
