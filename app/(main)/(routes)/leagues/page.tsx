import { BL1, BSA, CL, DED, FL1, PD, PL, PPL, SA } from "@/components/logos";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen md:pt-32 md:pb-20 py-24 2xl:px-48 xl:px-40 lg:px-30 sm:px-10 px-5 overflow-hidden sm:space-y-20 space-y-10">
      <h1 className="text-center font-bold md:text-6xl sm:text-5xl text-4xl sm:tracking-normal sm:leading-wider md:max-w-[60%]">
        Explore Standings for Your{" "}
        <span className="bg-gradient text-transparent bg-clip-text">
          Favorite Leagues
        </span>
      </h1>
      <div className="grid grid-cols-3 content-center justify-items-center gap-10 sm:gap-y-16 w-full h-full md:max-w-[70%]">
        <PL />
        <BL1 />
        <CL />
        <BSA />
        <DED />
        <FL1 />
        <PD />
        <PPL />
        <SA />
      </div>
    </div>
  );
};

export default page;
