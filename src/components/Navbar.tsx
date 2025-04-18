import Image from "next/image";
import { LogIn } from "../helpers/sign-in";
import { auth } from "../auth";
import Link from "next/link";
import { Profile } from "./Profile";
import Button from "./Button";
import { getUserInfoByEmail, storeUserInfo } from "@/utils/actions/user";
import { Session, User } from "next-auth";

const storeUserInfoInDB = async (session: Session) => {
  const { user } = session;
  const userExists = await getUserInfoByEmail(user?.email as string);
  // console.log("user Exists : ", userExists);
  if (!userExists) {
    await storeUserInfo(user as User);
  }
};

const Navbar = async () => {
  const session = await auth();

  if (session) {
    storeUserInfoInDB(session);
  }

  // console.log("user", session, session?.user?.id);

  return (
    <div
      className="w-full h-20 bg-gray-800 text-white flex items-center justify-between px-5 py-1 fixed top-0 z-50 shadow-md"
      data-cy="navbar"
    >
      <Link href={"/"}>
        <Image
          src="https://media.gettyimages.com/id/1296839661/vector/b-letter-logo.jpg?s=1024x1024&w=gi&k=20&c=GHpeh8Py9RafysyS-RNQd_y1Hvn53qmc2DpLdIrfNFY="
          width={60}
          height={60}
          alt="Logo"
        />
      </Link>
      {session && session.user ? (
        <div className="flex items-center gap-10">
          <Link href={"/create-post"}>
            <Button
              cls={
                "bg-amber-600 px-3.5 py-2.5 rounded-sm text-xs font-semibold uppercase cursor-pointer hover:bg-amber-700"
              }
            >
              Create Post
            </Button>
          </Link>
          <Profile user={session?.user} />
        </div>
      ) : (
        <div>
          <LogIn />
        </div>
      )}
    </div>
  );
};

export default Navbar;
