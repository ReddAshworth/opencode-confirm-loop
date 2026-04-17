# opencode-confirm-loop

OpenCode plugin that softly enforces the LLM uses the built-in `question` tool when ending conversations or asking questions — creating explicit user decision points and reducing premium request consumption.

## How It Works

Registers a dummy `confirm-loop` tool that exists solely for its description. The LLM sees this MANDATORY enforcement message **every single turn** as part of the tool list. Tool descriptions persist across compaction, long skill chains, and any context window issues because they're part of the API schema, not the conversation.

## Installation

Add to your `opencode.json`:

```json
{
  "plugin": ["opencode-confirm-loop"]
}
```

Or install locally by placing `index.js` in:

- `~/.config/opencode/plugins/` (global)
- `.opencode/plugins/` (project-level)

## Uninstall

Remove `"opencode-confirm-loop"` from your `opencode.json` plugin array.

## License

MIT