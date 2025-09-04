import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("qynero");  // Apne DB ka naam daalein
    const customers = await db.collection("customers").find({}).toArray();
    return NextResponse.json(customers);
}

export async function POST(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db("qynero");
    const newCustomer = await req.json();
    await db.collection("customers").insertOne(newCustomer);
    return NextResponse.json({ message: "Customer added" });
}
