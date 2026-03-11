# 🎯 Your IMA Workspace

Welcome to your new Influencer Marketing Agency workspace. This folder contains the specialized agents, workflows, and knowledge base required to run professional-grade campaigns.

---

## 🚀 Getting Started

1. **Agency Setup**: Edit `config.yaml` to set your agency's name, primary niche, and default output preferences.
2. **AI Tool Connection**: Open this folder in your preferred AI assistant (Claude Code, Cursor, OpenCode).
3. **Start a Session**: Tell your AI Assistant:
   > *"Read AGENTS.md and start a session as Abu Lahya (ST)."*

---

## 📋 Core Commands & Agents

Invoke agents using their **Trigger Codes** (e.g., `IH`, `ST`, `SD`) for the fastest response.

| Agent | Trigger | Role | Primary Workflow |
|---|---|---|---|
| 🎯 **Abu Lahya** | `ST` | Orchestrator | Start session / Manage clients |
| 🧙 **Oussema** | `AS` | Guided Wizard | Multi-step assistance / Intake |
| 🔍 **Younes** | `SD` | Scout | Influencer discovery & profiling |
| 🏢 **Dylan** | `BA` | Brand Analyst | Brand audits & competitor research |
| 📋 **Kushtrim** | `CP` | Strategist | Campaign planning & brief design |
| 🔎 **Ahmed** | `AF` | Auditor | Content & authenticity vetting |
| 📊 **Michael** | `RF` | ROI Analyst | Performance analysis & forecasting |
| 📧 **Ammar** | **OS** | Outreach | Sequence design & drafting |

> 🆘 **Stuck?** Use `/ima-help` or `IH` anytime. The system will analyze your work and tell you what to do next.

---

## 🎭 Collaboration (Party Mode)

Need a full strategy discussion? Use `/ima-party-mode` or `PM`. 
This activates multiple agents at once to debate your strategy, brainstorm creative directions, and ensure no detail is missed.

---

## 📁 Project Structure

- `config.yaml`: Global agency settings.
- `AGENTS.md`: Full technical reference for all triggers and commands.
- `clients/`: All your client data lives here.
  - `_template/`: Blueprint for new client folders.
  - `[client-name]/`: Organized subfolders for discovery, audits, and campaigns.
- `.ima/`: The framework engine. 
  - `agents/`: AI persona definitions (YAML).
  - `workflows/`: Step-by-step PDF-style guides for research.
  - `knowledge-base/`: The "Brain" (benchmarks, platform guides, compliance).
  - `templates/`: Professional report templates.

---

## 🛠️ Powering Up

To get more accurate data, consider connecting these in `config.yaml`:
- **YouTube Data API**: Allows Younes (Scout) to pull exact metrics directly from YouTube.
- **Influencer Data APIs**: Connect third-party providers (Modash, BrightData) for bulk discovery.

---

*For full technical details, refer to [AGENTS.md](AGENTS.md).*
