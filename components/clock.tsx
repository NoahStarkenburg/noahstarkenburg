"use client";

import { useEffect, useState } from "react";

// Live local time in Noah's timezone. Renders a stable placeholder until
// mounted so server and client markup match (no hydration flash).
export function Clock() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Chicago",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time} CT
    </time>
  );
}
