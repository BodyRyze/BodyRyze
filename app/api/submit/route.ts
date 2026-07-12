import { NextResponse } from "next/server";

const DAILY_LIMIT = 6;

function todayKey() {
  const date = new Date().toISOString().slice(0, 10);
  return `bodyryze:submissions:${date}`;
}

async function redisIncr(key: string): Promise<number> {
  const res = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/incr/${key}`, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
  const data = await res.json();
  return data.result as number;
}

async function redisDecr(key: string): Promise<void> {
  await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/decr/${key}`, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const key = todayKey();

  if (body.action === "release") {
    await redisDecr(key);
    return NextResponse.json({ ok: true });
  }

  const count = await redisIncr(key);

  if (count > DAILY_LIMIT) {
    await redisDecr(key);
    return NextResponse.json({ limitReached: true });
  }

  return NextResponse.json({ limitReached: false });
}
