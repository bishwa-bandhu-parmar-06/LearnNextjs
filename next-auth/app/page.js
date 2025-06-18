"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component(){
  const { data: session } = useSession();
  
  if (session) {
    return <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>;
  }

  return (
    <>
      Not signed in <br />
      {/* <button onClick={() => signIn()}>Sign in</button> */}
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      <br />
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  );
}