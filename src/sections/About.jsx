import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative">
          <img
            src="assets/coding-pov.png"
            alt="Coding workspace setup illustration"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] max-md:scale-150 max-md:-right-8 max-md:-top-4"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Nguyen Le Duy</p>
            <p className="subtext">
              I'm a third-year student at HCMUT, passionate about developing my
              frontend and backend skills to build dynamic and responsive
              software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo to-transparent" />
        </div>

       {/* Grid 2 */}
<div className="grid-default-color grid-2 relative overflow-hidden">
  <p className="absolute top-4 left-4 z-10 headtext">My Tools & Hobbies</p>

  <div style={{
    position: "absolute",
    inset: 0,
    bottom: "-25%",  // ← watermark bị đẩy xuống dưới card
  }}>
    <iframe
      src="https://my.spline.design/keyboard-HdGY284uGO0iqGqvCQlBGiPu/"
      frameBorder="0"
      style={{ width: "100%", height: "100%", border: "none" }}
    />
  </div>
</div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3 relative overflow-hidden">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location & Timezone</p>
            <p className="subtext">
              Based in Vietnam (UTC+7)<br />
              Available for remote collaboration worldwide
            </p>
          </div>
          <figure className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[55%] h-full flex items-center">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative">
          <div className="z-10 w-[50%] md:w-auto">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center md:inset-y-9 md:start-[50%] md:w-full md:h-full md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;