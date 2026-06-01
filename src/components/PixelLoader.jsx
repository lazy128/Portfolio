import { useEffect, useRef } from "react";

const STAR_COUNT = 140;

const PixelLoader = ({ exiting = false, progress = 0 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (exiting) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    let stars = [];
    let t = 0;

    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() > 0.92 ? 1.5 : 1,
        base: 0.15 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.015,
        tint: Math.random() > 0.88 ? "lavender" : "white",
      }));
    };

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const twinkle =
          0.55 + 0.45 * Math.sin(t * s.speed + s.phase);
        const alpha = s.base * twinkle;

        if (s.tint === "lavender") {
          ctx.fillStyle = `rgba(167, 139, 250, ${alpha.toFixed(3)})`;
        } else {
          ctx.fillStyle = `rgba(240, 238, 248, ${alpha.toFixed(3)})`;
        }

        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.r, s.r);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [exiting]);

  const barWidth = Math.min(100, Math.max(0, progress));
  const percent = Math.round(barWidth);

  return (
    <div
      className={`pixel-loader${exiting ? " pixel-loader--exit" : ""}`}
      aria-busy={!exiting}
      aria-label="Loading"
    >
      <div className="pixel-loader__ambient" aria-hidden="true">
        <canvas ref={canvasRef} className="pixel-loader__stars" />
      </div>

      <div className="pixel-loader__content">
        <div className="pixel-loader__hud">
          <span className="pixel-loader__tag">portfolio</span>
          <h1 className="pixel-loader__word">LAZY</h1>
          <span className="pixel-loader__status">
            initializing scene
            <span className="pixel-loader__dots" aria-hidden="true">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </span>
        </div>
      </div>

      <div className="pixel-loader__footer">
        <p className="pixel-loader__percent">{percent}%</p>
        <div
          className="pixel-loader__bar-track"
          role="progressbar"
          aria-valuenow={barWidth}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Loading progress"
        >
          <div
            className="pixel-loader__bar-fill"
            style={{ width: `${barWidth}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PixelLoader;
