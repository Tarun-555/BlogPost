import { auth } from "../../../../../auth";

export const getSession = async () => {
  "use server";
  const session = await auth();
  return session;
};
