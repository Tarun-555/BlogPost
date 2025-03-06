import { signIn } from "../../../auth";

export const LogIn = async () => {
  const handleLogin = async () => {
    "use server";
    console.log("Logging in");
    await signIn("github");
  };
  return (
    <form action={handleLogin}>
      <button>Login</button>
    </form>
  );
};
