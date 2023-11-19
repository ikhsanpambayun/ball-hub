import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen md:pt-36 md:pb-30 py-24 2xl:px-48 xl:px-40 lg:px-30 sm:px-10 px-5 overflow-hidden">
      <div className="absolute z-10 w-[50%] -left-32 top-0 aspect-square bg-gradient-radial from-primary/10 from-0% via-transparent via-70% to-transparent to-90% rounded-full"></div>
      <div className="relative flex flex-wrap md:flex-nowrap md:gap-0 gap-12 items-center justify-center w-full">
        <div className="space-y-4 md:space-y-6 lg:space-y-10 md:max-w-[64%]">
          <h1 className="font-bold 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl">
            Stay in the game with our real-time football standing updates.
          </h1>
          <div className="relative flex xl:gap-5 sm:gap-3">
            <div className="bg-gradient rounded-full p-2 xl:px-5 px-3 w-fit">
              <h3 className="font-mono sm:font-semibold font-normal 2xl:text-3xl xl:text-2xl md:text-xl sm:text-base text-secondary">
                - where passion meets precision!
              </h3>
            </div>
            <div className="bg-gradient rounded-full 2xl:h-[56px] xl:h-[48px] md:h-[44px] sm:h-[40px] aspect-square" />
          </div>
        </div>
        <div>
          <div className="absolute -z-10 w-[50%] -right-20 -top-20 aspect-square bg-gradient-radial from-primary/10 from-0% via-transparent via-70% to-transparent to-90% rounded-full"></div>
          <Image
            src="/hero.png"
            height={550}
            width={500}
            alt="player"
            className="md:w-[60vw] sm:w-[50vw] w-[60vw] sm:min-w-0 min-w-[270px]"
          />
        </div>
      </div>
      <Button variant="outline" size="lg" asChild>
        <div className="relative flex items-center gap-4 shadow-2xl shadow-primary/10 hover:shadow-primary/40 cursor-pointer transition-all hover:transition-all duration-100 hover:duration-100">
          <p>Check Now</p>
          <ArrowRightCircle />
        </div>
      </Button>
    </div>
  );
};

export default Hero;
