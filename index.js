import { tool } from "@opencode-ai/plugin";

export const ConfirmLoopPlugin = async ({ client, project }) => {
  return {
    tool: {
      "confirm-loop": tool({
        description: [
          "CRITICAL ENFORCEMENT RULE — READ THIS EVERY TURN:",
          "",
          "You MUST use the built-in question tool (NOT type questions as text) when:",
          "1. Ending a conversation or thread — before saying done/complete/finished, ask what the user wants to do next",
          "2. Asking the user a question or getting a decision — which option, should I continue, do you want me to",
          "3. Getting confirmation before proceeding — before implementing, before spawning subagents, before next section",
          "4. Offering choices to the user — any question requiring user response",
          "5. Reaching a natural stopping point — always end with a question tool call",
          "",
          "Not pre-approved, section-based work: discuss each item, confirm via question tool before implementing, confirm completion after, only proceed to next item after user confirms.",
          "",
          "NEVER type questions as text. ALWAYS invoke the question tool instead.",
          "NEVER proceed to the next section without user confirmation.",
          "This is IMPERATIVE and NON-NEGOTIABLE.",
          "",
          "This tool does nothing — it exists solely to remind you of this rule every turn.",
        ].join("\n"),
        args: {},
        async execute() {
          return "Reminder: Always use the question tool when ending conversations or asking questions. Never type questions as text.";
        },
      }),
    },
  };
};

export default ConfirmLoopPlugin;
