import { useCallback, useState } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import PixelLoader from "../components/PixelLoader";

const LOADER_FADE_MS = 900;
const CONTENT_FADE_DELAY_MS = 350;

const Hero = () => {
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaderMounted, setLoaderMounted] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [contentMounted, setContentMounted] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const handleSceneReady = useCallback(() => {
    setLoadProgress(100);
    setLoaderExiting(true);
    setContentMounted(true);

    setTimeout(() => {
      requestAnimationFrame(() => setContentVisible(true));
    }, CONTENT_FADE_DELAY_MS);

    setTimeout(() => setLoaderMounted(false), LOADER_FADE_MS);
  }, []);

  return (
    <section id="home" className="relative flex items-start justify-center min-h-screen c-space">
      {loaderMounted && (
        <PixelLoader
          exiting={loaderExiting}
          progress={loadProgress}
        />
      )}

      {contentMounted && (
        <div
          className={`hero-content ${contentVisible ? "hero-content--visible" : ""}`}
        >
          <HeroText />
        </div>
      )}

      <ParallaxBackground
        onProgress={setLoadProgress}
        onSceneReady={handleSceneReady}
      />
    </section>
  );
};

export default Hero;
