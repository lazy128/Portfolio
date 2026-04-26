import Spline from "@splinetool/react-spline";

const ParallaxBackground = () => {
  return (
    <section
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",   /* ✅ full màn hình */
        height: "100vh",
        zIndex: 0,
      }}
    >
      <iframe
        src="https://my.spline.design/particlenebula-Bsp4nusCfRN6c5bmgnZJVm0e/"
        frameBorder="0"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </section>
  );
};

export default ParallaxBackground;