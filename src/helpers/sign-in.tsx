import Button from "@/components/Button";
import { signIn } from "../../auth";

export const LogIn = async () => {
  const handleLogin = async () => {
    "use server";
    console.log("Logging in");
    await signIn("github");
  };

  return (
    <form action={handleLogin}>
      <Button cls={"cursor-pointer"} dataCy={"login"}>
        Login
      </Button>
    </form>
  );
};
