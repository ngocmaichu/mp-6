import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.MY_GITHUB_ID!,
      clientSecret: process.env.MY_GITHUB_SECRET!,
    }),
  ],
  secret: process.env.MY_NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
