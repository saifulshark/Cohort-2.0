import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "",
        },
      },
      async authorize(credentials: any) {
        // do validation here and return
        return {
          id: "1",
          email: "shiv@gmail.com",
          user: "shiv",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // jwt: ({ token, user }) => {
    //   token.userId = token.sub;
    //   return token;
    // },
    session: ({ session, token, user }: any) => {
      session.user.id = token.sub;
      return session;
    },
  },
};
