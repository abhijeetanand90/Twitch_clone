import { UserButton, SignedIn} from "@clerk/nextjs";

export default function Home() {
  return (
   
    
<div className="flex flex-col gap-y-4">

  <h1>Dashboard</h1>
  <SignedIn>
    <UserButton />
  </SignedIn>
</div>

   
  );
}
