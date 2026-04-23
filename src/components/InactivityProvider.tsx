"use client";

import { useEffect, useCallback, useRef } from "react";
import { useKioskStore } from "@/stores/useKioskStore";
import { INACTIVITY_TIMEOUT_MS } from "@/lib/constants";

export default function InactivityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const resetTimer = useKioskStore((s) => s.resetTimer);
  const setMode = useKioskStore((s) => s.setMode);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleInteraction = useCallback(() => {
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    const events: (keyof DocumentEventMap)[] = [
      "touchstart",
      "click",
      "mousemove",
      "keydown",
    ];

    events.forEach((event) =>
      document.addEventListener(event, handleInteraction, { passive: true })
    );

    intervalRef.current = setInterval(() => {
      const { lastInteractionTime, mode } = useKioskStore.getState();
      if (
        mode === "interactive" &&
        Date.now() - lastInteractionTime >= INACTIVITY_TIMEOUT_MS
      ) {
        setMode("attract");
      }
    }, 1000);

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleInteraction)
      );
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [handleInteraction, setMode]);

  return <>{children}</>;
}
