import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between items-center border-b px-4 border-slate-300">
      <div className="text-lg flex flex-col justify-center">PayTM</div>
      <nav className="flex flex-row items-center gap-3">
        <h2>Home</h2>
        <h2>Transactions</h2>
        <h2>Transfer</h2>
        <h2>P2P Transfer</h2>
      </nav>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
