# AI.md

> **BizCopilot V1 – AI Specification**
>
> **Status:** Frozen (V1)

---

# 1. Purpose

AI provides business insights, recommendations and natural language interaction.

AI never owns business rules or business data.

---

# 2. Responsibilities

Owns:

- Owner AI Chat
- Scheduled Insights
- Prompt management
- Context building
- AI orchestration
- Response processing

Never owns:

- Billing
- Product
- Customer
- Offer
- Reports
- SQLite
- Synchronization

---

# 3. Architecture

Angular Client
→ Spring Boot API
→ Business Intelligence
→ AI Orchestrator
→ AI Provider (Gemini/OpenAI/Future)

The client never communicates directly with an LLM.

---

# 4. AI Services

## AI Chat

Owner submits a question.

Server:

- Validates license
- Builds business context
- Invokes AI
- Returns validated response

Client responsibilities:

- Input field
- Suggested questions
- Display response

## Scheduled Insights

Triggered after successful synchronization.

Flow:

Synchronization
→ Business Intelligence
→ AI
→ WhatsApp (future channels)

---

# 5. Suggested Questions

Examples:

- Why are today's sales low?
- Which products sold the most?
- Which offer performed best?
- What should I promote tomorrow?
- How can I improve sales?

---

# 6. Business Intelligence Boundary

Reports answer:

"What happened?"

Business Intelligence answers:

"Why did it happen?"

AI answers:

"What should I do next?"

---

# 7. AI Context Builder

Business Intelligence prepares structured context.

Examples:

- Sales Summary
- Product Summary
- Offer Performance
- Customer Summary
- Payment Summary

Raw database tables are never sent to the AI provider.

---

# 8. AI Provider

Provider abstraction supports:

- Gemini
- OpenAI
- Future providers
- Local models (future)

Business modules remain provider-independent.

---

# 9. Prompt Management

Maintain versioned prompt templates.

Examples:

- Owner Chat
- Daily Summary
- Weekly Insight
- Monthly Insight

---

# 10. Response Processing

Server responsibilities:

- Validate AI response
- Apply guardrails
- Remove unsupported content
- Return client-friendly response

---

# 11. AI Capability Levels

License controlled.

Levels:

- Disabled
- Basic
- Advanced (Future)

Basic includes:

- AI Chat
- Daily Summary
- Business Suggestions

---

# 12. Business Rules

- AI never modifies business data.
- AI never executes business operations.
- AI only recommends actions.
- All AI execution occurs on the server.

---

# 13. Events

Publishes:

- AIChatRequested
- AIChatCompleted
- DailyInsightGenerated
- WeeklyInsightGenerated

---

# 14. Dependencies

Depends on:

- Business Intelligence
- Reports
- Settings
- License Framework
- Platform

Never depends directly on Billing.

---

# 15. Extension Points

Future:

- Voice Assistant
- Regional Languages
- Predictive Sales
- Inventory Forecasting
- Automatic Offer Recommendations
- Workflow Automation
- AI Agents

---

# 16. AI Coding Rules

- Never access SQLite directly.
- Never implement business rules.
- Always use Business Intelligence for context.
- Always use AI Orchestrator to invoke providers.
- Keep provider-specific code isolated.
