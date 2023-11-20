import { BadgeCheck, HeartHandshake } from "lucide-react";

const Closing = () => {
  return (
    <div className="relative flex flex-col md:gap-20 gap-10 items-center 2xl:px-48 xl:px-40 lg:px-30 sm:px-10 px-5 sm:py-32 py-10">
      <h1 className="text-center font-bold md:text-6xl sm:text-5xl text-4xl sm:tracking-normal sm:leading-tight">
        Join Us in Celebrating <br /> the{" "}
        <span className="bg-gradient-to-b from-red-200 to-red-600 text-transparent bg-clip-text">
          Beautiful Game
        </span>
      </h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center sm:gap-10 gap-5">
        <div className="border border-muted-foreground/30 bg-background/10 p-10 rounded-3xl backdrop-blur-md min-w-[350px] max-w-[500px] flex flex-col items-center gap-5">
          <BadgeCheck className="w-10 h-10" />
          <p className="text-lg tracking-normal leading-normal text-justify">
            Thank you for exploring the world of football with us. Whether
            you're a die-hard fan or just catching the excitement, our platform
            is here to enhance your football experience. Stay connected for the
            latest updates, unforgettable moments, and a community that shares
            your passion for the beautiful game.
          </p>
        </div>
        <div className="border border-muted-foreground/30 bg-background/10 p-10 rounded-3xl backdrop-blur-md min-w-[350px] max-w-[500px] flex flex-col items-center gap-5">
          <HeartHandshake className="w-10 h-10" />
          <p className="text-lg tracking-normal leading-normal text-justify">
            At BallHub, we're not just about the scores; we're about the
            stories, the rivalries, and the camaraderie that make football more
            than just a game. Join us as we continue to celebrate the spirit of
            football – where every match is a chapter in the epic tale of the
            sport we all love.
          </p>
        </div>
      </div>
      <div className="-z-10 absolute bottom-0 w-1/3 max-w-[400px] aspect-square bg-foreground/5 dark:bg-foreground/10 rounded-t-full"></div>
      <div className="-z-10 absolute bottom-0 w-1/2 max-w-[500px] aspect-square bg-foreground/5 dark:bg-foreground/10 rounded-t-full"></div>
      <div className="-z-10 absolute bottom-0 w-2/3 max-w-[600px] aspect-square bg-foreground/5 dark:bg-foreground/10 rounded-t-full"></div>
      <div className="-z-10 absolute bottom-0 w-5/6 max-w-[700px] aspect-square bg-foreground/5 dark:bg-foreground/10 rounded-t-full"></div>
    </div>
  );
};

export default Closing;
