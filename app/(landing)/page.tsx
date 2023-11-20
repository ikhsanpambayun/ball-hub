import "./style.css";

import Features from "./_components/features";
import Hero from "./_components/hero";
import Overview from "./_components/overview";
import Closing from "./_components/closing";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <Overview />
      <Closing />
    </div>
  );
}
