<div align="center">


# Comity

![Comity Logo](https://i.imgur.com/RfsMO1d.png)

  
  [![Website](https://img.shields.io/badge/🌐_Visit_Our_Website-comitylabs.net-2ea44f?style=for-the-badge)](https://www.comitylabs.net/)
  [![Twitter Follow](https://img.shields.io/twitter/follow/comitylabs?style=social)](https://x.com/ComityLabs)

  
  <h1>Transform Your AI Workflow</h1>
  <p>Comity AI bridges the gap between your tools and AI services, enabling seamless integration and intelligent task execution.</p>
</div>

<p align="center">
  <a href="#-why-comity">Why Comity?</a> •
  <a href="#-core-features">Features</a> •
  <a href="#-quick-tour">Quick Tour</a> •
  <a href="#get-started-in-5-minutes">Get Started</a> •
  <a href="#-socials">Socials</a>
</p>


## ✨ Why Comity?

- **Universal: MacOS, Windows, and Linux compatible with iOS and Android apps on the way!**

- **Zero Friction: Integrate effortlessly with your existing tools and services.**

- **Smart Execution: Automatically determine the best tools and actions for each task.**

- **Long-Term Memory: Leverage persistent memory for personalized and context-aware responses.**

- **Multi-Tool Integration: Combine the power of web search, calendars, email, and more.**

- **Secure & Reliable: Built with robust security and failover mechanisms.**

## 🚀 Core Features

Built on cutting-edge foundations:

- 🧠 [LLM-Powered Intelligence](https://www.firecrawl.dev/): Utilizes GPT-4 for natural language understanding and task execution.

- 🔧 Tool Integration: Seamlessly connects with services like [Google Calendar](https://calendar.google.com/), [Spotify](https://www.spotify.com/), [Linear](https://linear.app/), and more.
  
- 📂 File Management: Read, write, and manage files locally or in the cloud.

- 🗣️ Speech Synthesis: Convert text to speech using [ElevenLabs](https://elevenlabs.io/).

- 🔍 Advanced Search: Index and search content with [Algolia](https://www.algolia.com/) and [Qdrant](https://qdrant.tech/).

- 💾 Persistent Memory: Store and retrieve information for long-term context.

- 🟡 Crypto: supports checking prices of cryptocurrencies

## 🎯 Quick Tour

Explore what Comity AI can do:

- 📅 [Calendar Assistant](https://calendar.google.com/) - Manage events and schedules.

- 🎵 [Music Controller](https://www.spotify.com/) - Play and control Spotify playback.

- 📧 [Email Automation](https://resend.com/) - Send and manage emails.

- 🗺️ [Map Navigator](https://www.google.com/maps) - Find places and directions.

- 💼 [Task Manager](https://linear.app/) - Manage tasks and projects with Linear.

## Get Started in 5 Minutes

1. Clone the Repository:
     ```bash
    git clone https://github.com/comityai/comity.git
    cd comity
    ```
2. Install Dependencies:
   ```bash
   bun install
   ```
3. Configure Environment Variables:
   ```bash
   cp .env.example .env
   # Set your API keys and configurations in the .env file
   ```

4. Set Up the Database:
   ```bash
    bun generate
    bun migrate
    bun seed
   ```
   
5. Run the Application:
   ```bash
    bun run dev
   ```

6. Start Interacting:

  - Access the web interface at http://localhost:8080.
  - Use the /api/agi/chat endpoint for API interactions.

## 🛠️ Advanced Usage

### 🔧 Tool Configuration

Customize and extend Comity AI's capabilities by adding new tools:

1. Create a new tool in src/services/tools.

2. Add the tool configuration in src/config/tools.config.ts.

3. Describe the tool's usage in src/database/seed.ts.

### 🧠 Memory Management

Comity AI supports long-term memory for personalized interactions:

  - Store user preferences, past interactions, and contextual data.

  - Retrieve and utilize memory for more accurate and relevant responses.

### 🔄 Task Execution Modes

Comity AI operates in two modes:

  - Fast-Track: Directly answers queries using the LLM's knowledge.

  - Thinking: Plans and executes tasks using integrated tools and memory.

### 📊 Watch It Work

Monitor and visualize Comity AI's operations::

   ```mermaid
graph LR
    A[User Query] --> B[Comity AI]
    B --> C[LLM Processing]
    B --> D[Tool Execution]
    B --> E[Memory Retrieval]
    B --> F[Response Generation]
   ```

  - Performance Metrics: Track system performance and tool usage.

  - Request Tracing: Analyze detailed logs for debugging and optimization.

## 🌟 Socials

- ❌[X Updates](https://x.com/ComityLabs)
  
- 📧[Email Support](mailto:support@comitylabs.com) 


