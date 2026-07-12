import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ paid: false }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    return NextResponse.json({ paid: false });
  }

  return NextResponse.json({ paid: true, metadata: session.metadata });
}
