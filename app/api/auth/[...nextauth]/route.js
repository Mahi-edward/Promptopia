import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import User from "@models/user";

// Handlers for the authenticated
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      // console.log("Session: " + JSON.stringify(session));
      
      session.user.id = sessionUser._id?.toString();
      console.log("Session User: " + sessionUser,session.user);

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        // console.log("Profile: " + JSON.stringify(profile));

        // check if the user is already exists
        const userExists = await User.findOne({ email: profile.email });

        // console.log("User Exists: " + userExists);

        //if not, create a new user

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name?.replace(" ", "")?.toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error, "signin failed");
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
