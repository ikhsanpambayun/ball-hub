import Image from "next/image";
import Link from "next/link";

// export const LeagueStyle = ({id}: {id:string}) = {
//   // PL: "bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100",
//   // BL1: "bg-gradient-to-tr from-red-200 to-red-600",
//   // CL: "bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800",
//   // BSA: "bg-gradient-to-br from-green-200 via-green-400 to-green-500",
//   // DED: "bg-gradient-to-br from-orange-500 to-yellow-300",
//   // FL1: "bg-gradient-to-br from-white via-blue-100 to-blue-300",
//   // PD: "bg-gradient-to-tr from-yellow-400 via-gray-50 to-teal-300",
//   // PPL: "bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400",
//   // SA: "bg-gradient-to-tr from-teal-200 to-lime-200",
// };

export function LeagueStyle(id: string) {
  if (id == "PL") {
    return "bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100";
  }
  if (id == "BL1") {
    return "bg-gradient-to-tr from-red-200 to-red-600";
  }
  if (id == "CL") {
    return "bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800";
  }
  if (id == "BSA") {
    return "bg-gradient-to-br from-green-200 via-green-400 to-green-500";
  }
  if (id == "DED") {
    return "bg-gradient-to-br from-orange-500 to-yellow-300";
  }
  if (id == "FL1") {
    return "bg-gradient-to-tl from-white via-blue-100 to-blue-300";
  }
  if (id == "PD") {
    return "bg-gradient-to-tr from-yellow-400 via-gray-50 to-teal-300";
  }
  if (id == "PPL") {
    return "bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400";
  }
  if (id == "SA") {
    return "bg-gradient-to-tr from-teal-200 to-lime-200";
  }
}

export const PL = () => {
  return (
    <Link href="/leagues/PL" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 league-card">
        <Image
          src="/assets/leagues/PL.png"
          width={120}
          height={120}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const BL1 = () => {
  return (
    <Link href="/leagues/BL1" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-tr from-red-200 to-red-600 league-card">
        <Image
          src="/assets/leagues/BL1.png"
          width={90}
          height={90}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const CL = () => {
  return (
    <Link href="/leagues/CL" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800 league-card">
        <Image
          src="/assets/leagues/CL.png"
          width={100}
          height={100}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const BSA = () => {
  return (
    <Link href="/leagues/BSA" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-br from-green-200 via-green-400 to-green-500 league-card">
        <Image
          src="/assets/leagues/BSA.png"
          width={100}
          height={100}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const DED = () => {
  return (
    <Link href="/leagues/DED" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-300 league-card">
        <Image
          src="/assets/leagues/DED.png"
          width={120}
          height={120}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const FL1 = () => {
  return (
    <Link href="/leagues/FL1" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-tl from-white via-blue-100 to-blue-300 league-card">
        <Image
          src="/assets/leagues/FL1.png"
          width={100}
          height={100}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const PD = () => {
  return (
    <Link href="/leagues/PD" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-tr from-yellow-400 via-gray-50 to-teal-300 league-card">
        <Image
          src="/assets/leagues/PD.png"
          width={110}
          height={110}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const PPL = () => {
  return (
    <Link href="/leagues/PPL" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 league-card">
        <Image
          src="/assets/leagues/PPL.png"
          width={100}
          height={100}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const SA = () => {
  return (
    <Link href="/leagues/SA" className="max-w-[155px] w-full h-full">
      <div className="relative h-max flex justify-center p-4 aspect-square rounded-2xl bg-gradient-to-tr from-teal-200 to-lime-200 league-card">
        <Image
          src="/assets/leagues/SA.png"
          width={110}
          height={110}
          alt="logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
};
