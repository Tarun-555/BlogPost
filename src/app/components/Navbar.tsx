import Image from "next/image";
import { LogIn } from "../helpers/sign-in";
import { auth } from "../../../auth";
// import { LogOut } from "../helpers/logout";
import Link from "next/link";
import { Profile } from "./Profile";

const Navbar = async () => {
  const session = await auth();

  console.log("user", session);

  return (
    <div className="w-full h-20 bg-gray-700 text-white flex items-center justify-between px-5 py-1">
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
            <button className="bg-amber-700 px-3.5 py-2.5 rounded-sm text-xs font-semibold uppercase cursor-pointer hover:bg-amber-600">
              Create Post
            </button>
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
