import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = { id: "1", name: "Test User", email: "test@example.com" };
                if (
                    credentials?.email === "test@example.com" &&
                    credentials?.password === "password123"
                ) {
                    return user;
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/auth/signin',
    },
});

export { handler as GET, handler as POST };
