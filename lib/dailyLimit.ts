const STORAGE_KEY = "bodyryze-recherches";

export const FREE_LIMIT = 2;

type Usage = {
  date: string;
  count: number;
};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10); // "2026-07-10"
}

function readUsage(): Usage {
  if (typeof window === "undefined") return { date: todayKey(), count: 0 };

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return { date: todayKey(), count: 0 };

  try {
    const parsed = JSON.parse(raw) as Usage;
    if (parsed.date !== todayKey()) return { date: todayKey(), count: 0 };
    return parsed;
  } catch {
    return { date: todayKey(), count: 0 };
  }
}

export function getRemainingSearches(): number {
  const usage = readUsage();
  return Math.max(0, FREE_LIMIT - usage.count);
}

export function recordSearch(): void {
  if (typeof window === "undefined") return;
  const usage = readUsage();
  const next: Usage = { date: todayKey(), count: usage.count + 1 };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
