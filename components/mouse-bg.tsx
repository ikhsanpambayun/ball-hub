"use client";

import { ElementRef, useEffect, useRef } from "react";

const MouseBg = () => {
  const mouseRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    if (mouseRef.current) {
      mouseRef.current.style.setProperty(
        "top",
        `${
          ((event.clientY - mouseRef.current.offsetHeight / 2) /
            window.innerHeight) *
          100
        }%`
      );
      mouseRef.current.style.setProperty(
        "left",
        `${
          ((event.clientX - mouseRef.current.offsetWidth / 2) /
            window.innerWidth) *
          100
        }%`
      );
    }
  };

  return (
    <>
      <div
        ref={mouseRef}
        className="-z-10 fixed w-[50%] aspect-square bg-gradient-radial from-primary/10 from-0% via-transparent via-70% to-transparent to-90% rounded-full"
      ></div>
    </>
  );
};

export default MouseBg;
