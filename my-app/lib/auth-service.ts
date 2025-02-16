import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

// to get infrmation about currentUser
export const getSelf = async () => {
  const self = await currentUser();

  // if there is no user
  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

   const user=await db.user.findUnique({
    where:{externalUserId:self.id},
   })

   if(!user){
    throw new Error("Not found");
   }
   return user;

};
