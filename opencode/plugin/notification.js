export const NotificationPlugin = async ({ $ }) => {
  const SOUND_NAME = "Glass";

  return {
    event: async ({ event }) => {
      // Send notification on session completion
      if (event.type === "session.idle") {
        try {
          await $`osascript -e 'display notification "Session completed!" with title "opencode" sound name "${SOUND_NAME}"'`;
        } catch (err) {
          console.error("Notification error:", err);
        }
      }
    },
  };
};
