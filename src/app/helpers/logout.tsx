import { signOut } from "../../../auth";

export const LogOut = async () => {
  const handleLogout = async () => {
    "use server";
    console.log("Logging out");
    await signOut();
  };
  return (
    <form action={handleLogout}>
      <button>Logout</button>
    </form>
  );
};
