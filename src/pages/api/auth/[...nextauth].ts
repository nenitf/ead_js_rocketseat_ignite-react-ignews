import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// https://next-auth.js.org/getting-started/example

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
})
