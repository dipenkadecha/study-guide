# Study Guide

A **self-contained, original** study guide covering Java & Spring, data structures & algorithms, low-level design, system design, and behavioral topics. Every topic is written out in full — concept → diagram/code → production example → trade-offs → key takeaways — and the whole thing runs as a static site with no build step, no dependencies, and works offline.

> 🔗 **Live site:** _add your GitHub Pages URL here after publishing_ (e.g. `https://<username>.github.io/<repo>/`)
>
> 💻 **Run locally:** open [`index.html`](index.html) in any browser, or serve the folder (`node .claude/serve.cjs` → http://localhost:8765).

---

## What's inside

5 sections + reference material, **46 topic pages**:

- **Foundations** — modern Java & Spring
- **DSA & Algorithms** — patterns with worked code and complexity
- **Low-Level Design** — SOLID, GoF patterns, design-problem walkthroughs, testing
- **System Design** — 24 pages, the deepest section
- **Behavioral** — STAR stories, leadership & communication
- **Reference** — quick-reference cheat sheet + filterable pattern flashcards

### Built-in features
🔍 Cross-page sidebar nav with active highlighting · ⌨️ `Ctrl+K` search · ✅ per-topic **progress tracking** (saved locally) · 🌗 light/dark theme · 📋 copy-code buttons · 🖨️ print-to-PDF stylesheet · 🎨 syntax highlighting.

---

## Table of Contents

### 1 — Foundations
- [1.1 Java Deep Dive](sections/1-foundations/1.1-java-deep-dive.html)
- [1.2 Spring Boot & Reactive](sections/1-foundations/1.2-spring-boot.html)

### 2 — DSA & Algorithms
- [2.1 Arrays & Strings](sections/2-dsa/2.1-arrays-strings.html)
- [2.2 Hashing & HashMaps](sections/2-dsa/2.2-hashing.html)
- [2.3 Trees & Graphs](sections/2-dsa/2.3-trees-graphs.html)
- [2.4 Heaps & Tries](sections/2-dsa/2.4-heaps-tries.html)
- [2.5 DP & Greedy](sections/2-dsa/2.5-dp-greedy.html)
- [2.6 Concurrency Structures](sections/2-dsa/2.6-concurrency-ds.html)

### 3 — Low-Level Design
- [3.1 SOLID Principles](sections/3-lld/3.1-solid.html)
- [3.2 Creational Patterns](sections/3-lld/3.2-creational.html)
- [3.3 Structural Patterns](sections/3-lld/3.3-structural.html)
- [3.4 Behavioral Patterns](sections/3-lld/3.4-behavioral-patterns.html)
- [3.5 LLD Problems](sections/3-lld/3.5-lld-problems.html)
- [3.6 Testing Strategies](sections/3-lld/3.6-testing.html)

### 4 — System Design
- [4.0 Overview & Topic Index](sections/4-hld/4.0-overview.html)
- [4.1 Core Fundamentals](sections/4-hld/4.1-core-fundamentals.html)
- [4.2 Architecture Patterns](sections/4-hld/4.2-architecture-patterns.html)
- [4.3 Networking & Communication](sections/4-hld/4.3-networking.html)
- [4.4 Load Balancing & Traffic](sections/4-hld/4.4-load-balancing.html)
- [4.5 Database Design](sections/4-hld/4.5-databases.html)
- [4.6 Caching](sections/4-hld/4.6-caching.html)
- [4.7 Data Processing](sections/4-hld/4.7-data-processing.html)
- [4.8 Messaging & Async](sections/4-hld/4.8-messaging.html)
- [4.9 Distributed Systems](sections/4-hld/4.9-distributed-systems.html)
- [4.10 Scalability Techniques](sections/4-hld/4.10-scalability.html)
- [4.11 Reliability & Resilience](sections/4-hld/4.11-resilience.html)
- [4.12 Security](sections/4-hld/4.12-security.html)
- [4.13 Observability & Monitoring](sections/4-hld/4.13-observability.html)
- [4.14 Cloud & Infrastructure](sections/4-hld/4.14-cloud.html)
- [4.15 Storage Systems](sections/4-hld/4.15-storage.html)
- [4.16 Performance Optimization](sections/4-hld/4.16-performance.html)
- [4.17 Design Trade-offs](sections/4-hld/4.17-tradeoffs.html)
- [4.18 Common System-Design Problems](sections/4-hld/4.18-system-design-problems.html)
- [4.19 Consistency Patterns](sections/4-hld/4.19-consistency.html)
- [4.20 Microservices Patterns](sections/4-hld/4.20-microservices.html)
- [4.21 Data Structures for System Design](sections/4-hld/4.21-data-structures.html)
- [4.22 Concurrency & Locking](sections/4-hld/4.22-concurrency.html)
- [4.23 DevOps & Deployment](sections/4-hld/4.23-devops.html)

### 5 — Behavioral
- [5.1 STAR Method](sections/5-behavioral/5.1-star-method.html)
- [5.2 Technical Decisions](sections/5-behavioral/5.2-technical-decisions.html)
- [5.3 Conflict & Mentoring](sections/5-behavioral/5.3-conflict-mentoring.html)
- [5.4 Operational Excellence](sections/5-behavioral/5.4-operational-excellence.html)
- [5.5 Technical Writing](sections/5-behavioral/5.5-technical-writing.html)
- [5.6 Senior Engineer Expectations](sections/5-behavioral/5.6-sde3-expectations.html)

### Reference
- [Quick Reference](sections/reference/quick-reference.html) — complexity tables, latency numbers, availability math
- [Pattern Flashcards](sections/reference/pattern-flashcards.html) — 67 filterable system-design pattern cards

---

## How to use it

1. **Start with [4.0 Overview](sections/4-hld/4.0-overview.html)** for the system-design topic checklist and a structured approach.
2. Work through a section, ticking **"Mark complete"** on each page — the home page tracks your progress.
3. Drill the **[Pattern Flashcards](sections/reference/pattern-flashcards.html)** and the **[14 worked system-design problems](sections/4-hld/4.18-system-design-problems.html)**.
4. Keep the **[Quick Reference](sections/reference/quick-reference.html)** handy for estimation numbers and complexity tables.

---

## Tech notes

Pure HTML/CSS/JS — no framework, no build. The sidebar is rendered from a single source of truth in [`assets/scripts.js`](assets/scripts.js); styling lives in [`assets/styles.css`](assets/styles.css). Syntax highlighting loads from a CDN and degrades gracefully offline.

_Personal study material. Not affiliated with any employer; contains no confidential content._
