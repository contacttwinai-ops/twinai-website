import { NextRequest, NextResponse } from "next/server";

interface Message {
    name: string;
    email: string;
    mobile: string;
    companyOrInstitution?: string;
    message: string;
}

const messages: Message[] = [];

export async function POST(request: NextRequest) {
    try {
        const data: Message = await request.json();

        if (!data.name || !data.email || !data.mobile || !data.message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        messages.push(data);
        console.log("New contact message received:", data);

        return NextResponse.json({ message: "Message received successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }
}

export async function GET() {
    return NextResponse.json(messages);
}
