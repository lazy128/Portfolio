import { useEffect, useRef } from "react";

const OVERFLOW = 80; // px dư mỗi phía top + bottom

const ParallaxBackground = () => {
  const iframeRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!iframeRef.current) return;

      iframeRef.current.src =
        "https://my.spline.design/particlenebula-Bsp4nusCfRN6c5bmgnZJVm0e/";

      iframeRef.current.onload = () => {
        iframeRef.current.style.opacity = "1";
        if (placeholderRef.current) placeholderRef.current.style.opacity = "0";
      };
    }, 500);
    return () => clearTimeout(timer);
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
      {/* Placeholder */}
      <div
        ref={placeholderRef}
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at center, #2d1b69 0%, #0a0015 60%, #030412 100%)",
          opacity: 1,
          transition: "opacity 1.2s ease",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

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
          transition: "opacity 1.2s ease",
        }}
      />
    </section>
  );
};

export default ParallaxBackground;