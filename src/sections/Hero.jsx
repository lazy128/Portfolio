import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

const Hero = () => {
  return (
    <section id="home" className="relative flex items-start justify-center min-h-screen overflow-hidden c-space">
      {/* Text — z cao nhất */}
      <div className="relative z-20 w-full">
        <HeroText />
      </div>

      {/* Spline full màn hình + có tương tác */}
      <ParallaxBackground />
    </section>
  );
};

export default Hero;  