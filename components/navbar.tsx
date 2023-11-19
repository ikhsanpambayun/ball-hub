import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full flex justify-end md:justify-center md:p-10 p-5">
      <div className="hidden md:flex z-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.svg"
              width={35}
              height={35}
              alt="logo"
              className="hidden dark:block"
            />
            <Image
              src="/logo-black.svg"
              width={35}
              height={35}
              alt="logo"
              className="dark:hidden"
            />
            <p className="font-bold text-2xl">BallHub</p>
          </div>
        </Link>
        <ModeToggle />
      </div>
      <div className="md:hidden flex z-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.svg"
              width={35}
              height={35}
              alt="logo"
              className="hidden dark:block"
            />
            <Image
              src="/logo-black.svg"
              width={35}
              height={35}
              alt="logo"
              className="dark:hidden"
            />
          </div>
        </Link>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
