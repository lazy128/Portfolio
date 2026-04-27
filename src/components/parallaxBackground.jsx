import { useEffect, useRef } from "react";

const ParallaxBackground = () => {
  const iframeRef = useRef(null)
  const placeholderRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!iframeRef.current) return

      // Gán src trực tiếp vào DOM — không trigger re-render
      iframeRef.current.src = "https://my.spline.design/particlenebula-Bsp4nusCfRN6c5bmgnZJVm0e/"

      iframeRef.current.onload = () => {
        // Fade in iframe
        iframeRef.current.style.opacity = "1"
        // Fade out placeholder
        if (placeholderRef.current) {
          placeholderRef.current.style.opacity = "0"
        }
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100vw",
      height: "100vh",
      zIndex: 0,
    }}>
      {/* Placeholder — không re-render, chỉ đổi style trực tiếp */}
      <div
        ref={placeholderRef}
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, #2d1b69 0%, #0a0015 60%, #000 100%)",
          opacity: 1,
          transition: "opacity 1.2s ease",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* iframe luôn có trong DOM nhưng src rỗng — gán sau 500ms */}
      <iframe
        ref={iframeRef}
        frameBorder="0"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          opacity: 0,
          transition: "opacity 1.2s ease",
        }}
      />

      {/* Che watermark */}
      <div style={{
        position: "absolute",
        bottom: 0, right: 0,
        width: "220px", height: "60px",
        background: "linear-gradient(to left, #000 60%, transparent)",
        zIndex: 10,
      }} />
    </section>
  );
};

export default ParallaxBackground;