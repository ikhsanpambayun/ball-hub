"use client";

import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { AlignLeft, ExternalLink, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BL1, BSA, CL, DED, FL1, PD, PL, PPL, SA } from "./logos";

const Navbar = () => {
  const [onTop, setOnTop] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let scrollYProgress = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > 120 && window.scrollY > scrollYProgress) {
        setOnTop(false);
        setScrolled(true);
        scrollYProgress = window.scrollY;
        console.log("scroll bawah");
      } else if (window.scrollY > 120 && window.scrollY < scrollYProgress) {
        setOnTop(false);
        setScrolled(false);
        scrollYProgress = window.scrollY;
        console.log("scroll atas");
      } else {
        setOnTop(true);
        setScrolled(false);
        scrollYProgress = window.scrollY;
        console.log("diatas");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed z-50 w-full flex justify-end md:justify-center md:p-10 p-5 transition-all duration-300",
        scrolled &&
          !onTop &&
          "backdrop-blur-sm bg-background/50 md:h-[80px] h-[60px] transition-all duration-300",
        !onTop &&
          !scrolled &&
          "backdrop-blur-sm bg-background/50 transition-all duration-300"
      )}
    >
      <div className="hidden md:flex z-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logos/logo-white.svg"
              width={35}
              height={35}
              alt="logo"
              className="hidden dark:block"
            />
            <Image
              src="/assets/logos/logo-black.svg"
              width={35}
              height={35}
              alt="logo"
              className="dark:hidden"
            />
            <p className="font-bold text-2xl">BallHub</p>
          </div>
        </Link>
        <div className="flex items-center justify-end gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex gap-2 items-center">
                <p className="font-semibold">Leagues</p>
                <AlignLeft className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-5 bg-background/60 backdrop-blur-sm">
              <DropdownMenuLabel>
                Explore Standings for Your Favorite Leagues
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid grid-cols-3 content-center justify-items-center">
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <PL />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <BL1 />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <CL />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <BSA />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <DED />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <FL1 />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <PD />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <PPL />
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[120px] h-[120px]">
                  <SA />
                </DropdownMenuItem>
              </div>
              <Link href="/leagues">
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex gap-2 items-center w-fit px-5 mt-2"
                >
                  <p>See All</p>
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/live-scores">
            <Button variant="ghost">
              <p className="font-semibold">Live Scores</p>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div className="md:hidden flex z-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logos/logo-white.svg"
              width={35}
              height={35}
              alt="logo"
              className="hidden dark:block"
            />
            <Image
              src="/assets/logos/logo-black.svg"
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
