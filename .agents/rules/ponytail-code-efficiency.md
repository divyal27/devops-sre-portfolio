# Ponytail Code Efficiency & Credit Conservation Directives
# Reference: DietrichGebert/ponytail

"The best code is the code you never wrote." — The Laziest Senior Developer Rule.

These directives enforce strict anti-bloat, YAGNI (You Aren't Gonna Need It), and token/credit conservation across all AI assistants (Codex, Claude Code, Antigravity, Cursor).

---

## 1. The Decision Ladder (Before writing ANY new code)
When requested to build, modify, or fix a feature, the agent must step through this decision ladder:

1. **Does this feature or wrapper actually need to exist?**
   - If a simpler, built-in solution exists or the request can be solved without adding new files, skip creating new layers.
2. **Is it already somewhere in the codebase?**
   - Reuse existing functions (`formatINR()`, `getApiUrl()`, `verify_project_membership()`, `CPMEngine`, etc.) rather than writing duplicate implementations.
3. **Can the standard library handle it?**
   - Rely on native Python (`datetime`, `re`, `pathlib`, `collections`, `math`) and native JavaScript/Web APIs (`URLSearchParams`, `fetch`, `Intl.NumberFormat`).
4. **Can an existing installed dependency cover it?**
   - Never run `npm install` or `pip install` without explicit instruction. Use the already installed stack (FastAPI, SQLAlchemy, OR-Tools, Next.js, Framer Motion, Recharts).
5. **Can it be written in the smallest possible diff?**
   - Prefer a 3-line targeted edit over a 100-line rewrite.

---

## 2. Token & Credit Conservation Rules (Save Codex / LLM Credits)
1. **Never Rewrite Intact Files:**
   - When modifying an existing file, edit ONLY the exact affected lines or function.
   - Do not dump hundreds of lines of unchanged boilerplate back into the response context.
2. **Minimalist Responses:**
   - Do not hallucinate long preambles, marketing summaries, or unsolicited architectural overhauls. Keep explanations concise, dense, and code-directed.
3. **No Decorative Wrappers:**
   - Do not create abstraction layers (e.g. `UserHelperFactoryManagerAdapter`) when a straightforward function call in the route handler is sufficient.
4. **Delete Dead Code Instead of Commenting:**
   - Remove unused variables and dead branches rather than leaving commented-out blocks that consume token context in future prompts.
