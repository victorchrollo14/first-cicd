"use client";

import { useBalance } from "@repo/store/balance";
import { Appbar } from "@repo/ui/appbar";

export default function () {
  const balance = useBalance();

  const onSignIn = () => {
    console.log("signed in");
  };

  const onSignOut = () => {
    console.log("signed in");
  };

  return (
    <>
      <Appbar
        user={{ name: "victor" }}
        onSignin={onSignIn}
        onSignout={onSignOut}
      />
      <div>hi there </div>
      <div>Balance: 200 </div>;
    </>
  );
}
