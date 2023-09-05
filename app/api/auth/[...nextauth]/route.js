import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";

// Handlers for the authenticated
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  async session({ session }) {},

  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if the user is already exists

      //if not, create a new user
      return true;
    } catch (error) {
      console.log(error, "signin failed");
      return false;
    }
  },
});

export { handler as GET, handler as POST };
