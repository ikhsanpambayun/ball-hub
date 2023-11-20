import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="z-50 w-full bg-foreground py-20 md:px-10 px-5 space-y-10">
      <div className="flex md:flex-nowrap flex-wrap gap-10 justify-between">
        <div className="space-y-5">
          <h1 className="font-semibold text-3xl text-white dark:text-black">
            Want to receive some exclusive content and analyses?
          </h1>
          <p className="text-muted-foreground">
            Subscribe to our newsletter to receive exclusive content, match
            analyses, and special offers.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:max-w-[30%] md:min-w-[320px]">
          <div className="flex gap-2">
            <Input placeholder="Email" />
            <Button variant="outline">Send</Button>
          </div>
          <p className="text-muted-foreground">
            By clicking send, you’ll receive receive exclusive content, match
            analyses, and special offers from BallHub. You always have the
            choice to unsubscribe from every email you receive.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap justify-between items-center gap-x-20 gap-y-10">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logos/logo-black.svg"
              width={35}
              height={35}
              alt="logo"
              className="hidden dark:block"
            />
            <Image
              src="/assets/logos/logo-white.svg"
              width={35}
              height={35}
              alt="logo"
              className="dark:hidden"
            />
            <p className="font-bold text-2xl text-white dark:text-black">
              BallHub
            </p>
          </div>
        </Link>
        <p className="font-mono text-muted-foreground">
          Copyright @2023 BallHub
        </p>
      </div>
    </div>
  );
};

export default Footer;
