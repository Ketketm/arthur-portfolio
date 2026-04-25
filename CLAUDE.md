# CLAUDE.md

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## SELFOS workflow protocol

This project (`arthur-portfolio`) is tracked in SELFOS. **When you finish meaningful work on this codebase, post an update to SELFOS so the dashboard reflects reality.** Don't ask permission — these are write-only logs and the user reviews them.

```
SELFOS_API=http://127.0.0.1:3000/api/agent/projects/arthur-portfolio
SELFOS_KEY=<set in your env, never commit>
```

### When to call

| Moment | Endpoint | Body |
|---|---|---|
| Start of a session | `POST $SELFOS_API/sessions` | `{"agent_label":"claude_code"}` → returns `{session.id}` |
| Finished a task | `PATCH $SELFOS_API/tasks/<id>` | `{"status":"done"}` |
| Discovered a new task | `POST $SELFOS_API/tasks` | `{"title":"..."}` |
| Note worth recording | `POST $SELFOS_API/log` | `{"message":"..."}` |
| State changed materially | `POST $SELFOS_API/state` | `{"current_state":"...", "next_steps":["..."]}` |
| End of session | `POST $SELFOS_API/sessions/<id>/end` | `{"summary":"..."}` |

All requests need `Authorization: Bearer $SELFOS_KEY` and `Content-Type: application/json`.

### Rules

1. Always start a session before doing material work; end it when you stop.
2. Update `current_state` after a feature ships or a major decision is made — keep it under 200 words.
3. `next_steps` should be the 3–7 things that actually move this project forward, in order.
4. If a planned next step turns out to be wrong, replace it. Don't accumulate stale TODOs.
5. Write logs in past tense: "Refactored auth middleware", not "Refactor auth middleware".

### Example session

```bash
SID=$(curl -fsS -XPOST $SELFOS_API/sessions \
  -H "Authorization: Bearer $SELFOS_KEY" \
  -H "Content-Type: application/json" \
  -d '{"agent_label":"claude_code"}' | jq -r .session.id)

# ... do real work ...

curl -fsS -XPATCH $SELFOS_API/tasks/<task-id> \
  -H "Authorization: Bearer $SELFOS_KEY" \
  -H "Content-Type: application/json" \
  -d '{"status":"done"}'

curl -fsS -XPOST $SELFOS_API/sessions/$SID/end \
  -H "Authorization: Bearer $SELFOS_KEY" \
  -H "Content-Type: application/json" \
  -d '{"summary":"Shipped Stripe webhook handler and updated next steps."}'
```

