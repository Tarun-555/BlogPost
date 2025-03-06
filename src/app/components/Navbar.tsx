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
        <div>
          <Profile userImg={session.user.image} />
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
