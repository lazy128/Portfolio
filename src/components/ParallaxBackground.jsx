import { useEffect, useRef } from "react";
const OVERFLOW = 80; // px dư mỗi phía top + bottom
const MIN_LOADER_MS = 2800;
const LOAD_TIMEOUT_MS = 12000;

const ParallaxBackground = ({ onSceneReady, onProgress }) => {
  const iframeRef = useRef(null);
  const loadStartedAt = useRef(null);
  const readyRef = useRef(false);
  const onSceneReadyRef = useRef(onSceneReady);
  const onProgressRef = useRef(onProgress);
  const progressTimerRef = useRef(null);

  useEffect(() => {
    onSceneReadyRef.current = onSceneReady;
    onProgressRef.current = onProgress;
  }, [onSceneReady, onProgress]);

  const finishLoading = () => {
    if (readyRef.current) return;
    readyRef.current = true;
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    onProgressRef.current?.(100);
    if (iframeRef.current) {
      iframeRef.current.style.opacity = "1";
    }
    const elapsed = Date.now() - (loadStartedAt.current ?? Date.now());
    const remaining = Math.max(400, MIN_LOADER_MS - elapsed);
    setTimeout(() => onSceneReadyRef.current?.(), remaining);
  };

  useEffect(() => {
    let cancelled = false;
    onProgressRef.current?.(8);

    progressTimerRef.current = setInterval(() => {
      onProgressRef.current?.((prev) =>
        prev >= 92 ? 92 : prev + 2 + Math.random() * 4
      );
    }, 120);

    const startTimer = setTimeout(() => {
      if (cancelled || !iframeRef.current) return;
      loadStartedAt.current = Date.now();

      iframeRef.current.onload = () => {
        if (!cancelled) finishLoading();
      };
      iframeRef.current.src =
        "https://my.spline.design/particlenebula-Bsp4nusCfRN6c5bmgnZJVm0e/";
    }, 300);

    const fallbackTimer = setTimeout(() => {
      if (!cancelled) finishLoading();
    }, LOAD_TIMEOUT_MS);

    return () => {
      cancelled = true;
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      clearTimeout(startTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden", // ✅ clip iframe thò ra
        background: "#030412",
      }}
    >
      {/*
        ✅ Tà đạo:
        - height: 100% + 2×OVERFLOW  → iframe cao hơn container 160px
        - translateY(-OVERFLOW)       → kéo lên OVERFLOW px
        → top bị clip OVERFLOW px
        → bottom bị clip OVERFLOW px  (watermark nằm đây, bay mất)
        → nebula vẫn ở đúng giữa vì shift đối xứng
      */}
      <iframe
        ref={iframeRef}
        frameBorder="0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `calc(100% + ${OVERFLOW * 2}px)`,
          transform: `translateY(-${OVERFLOW}px)`,
          border: "none",
          opacity: 0,
          transition: "opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </section>
  );
};

export default ParallaxBackground;