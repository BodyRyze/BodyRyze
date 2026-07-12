import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const body = await request.json();
  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const metadata: Record<string, string> = {
    prenom: body.prenom ?? "",
    numero: body.numero ?? "",
    age: body.age ?? "",
    genre: body.genre ?? "",
    poids: body.poids ?? "",
    taille: body.taille ?? "",
    niveauSportif: body.niveauSportif ?? "",
    objectif: body.objectif ?? "",
    zonesPriorite: body.zonesPriorite ?? "",
    lieu: body.lieu ?? "",
    disponibilite: body.disponibilite ?? "",
    materiel: body.materiel ?? "",
    hygieneVie: (body.hygieneVie ?? "").slice(0, 400),
    commentConnu: body.commentConnu ?? "",
  };

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: { name: "Programme de coaching sur-mesure BodyRyze" },
          unit_amount: 1999,
        },
        quantity: 1,
      },
    ],
    metadata,
    success_url: `${origin}/commencer?payment=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/commencer?payment=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
