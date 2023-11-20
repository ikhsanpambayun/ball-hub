import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  return (
    <div className="relative w-full pt-20">
      <div className="h-[10vh] w-full bg-background rounded-t-[100%]"></div>
      <div className="flex flex-col items-center bg-background 2xl:px-48 xl:px-40 lg:px-30 sm:px-10 px-5">
        <h1 className="pt-32 text-center font-bold md:text-6xl sm:text-5xl text-4xl sm:tracking-normal sm:leading-tight">
          Discover the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-indigo-200 dark:via-red-200 dark:to-yellow-100">
            Game-Changing
          </span>
          <br /> Features
        </h1>
        <div className="flex md:flex-nowrap flex-wrap md:pt-28 sm:pt-20 pt-10 pb-28 md:gap-10 gap-5 min-h-screen w-full">
          <div className="flex flex-col md:gap-10 gap-5">
            <Card className="bg-gradient h-[55%] rounded-3xl p-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-normal text-background">
                  Live Score Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-lg text-gray-200 dark:text-gray-500">
                  Stay ahead of the game with real-time score updates, ensuring
                  you never miss a moment of the action.
                </p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="bg-background flex-1 rounded-3xl p-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-normal">
                  Interactive Standings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-lg text-gray-400">
                  Explore the league standings with our interactive and
                  user-friendly interface. Get insights into team performance,
                  goal differentials, and more.
                </p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
          <div className="flex flex-col md:gap-10 gap-5">
            <Card className="bg-background flex-1 rounded-3xl p-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-normal">
                  Player Profiles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-lg text-gray-400">
                  Dive deep into the stats and stories behind your favorite
                  players. Our detailed profiles cover everything from career
                  highlights to current form.
                </p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="bg-gradient h-[55%] rounded-3xl p-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-normal text-background">
                  Responsive Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-lg text-gray-200 dark:text-gray-500">
                  Whether you're on your desktop, tablet, or mobile, enjoy a
                  seamless experience with our responsive design – bringing the
                  game to your fingertips, wherever you are.
                </p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
