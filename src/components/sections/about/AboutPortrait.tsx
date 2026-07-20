import React from "react";
import aboutPic from "../../../assets/about-pic.webp";
import { FACTS } from "./aboutData";

const AboutPortrait: React.FC = () => (
  <div className="about-portrait-wrap">
    <div className="portrait-frame relative w-full aspect-3/4 border border-[rgba(127,238,100,0.3)] overflow-hidden bg-bg-3">
      <div className="corner-tl absolute w-4.5 h-4.5 z-2 top-0 left-0 border-t-2 border-l-2 border-green" />
      <div className="corner-tr absolute w-4.5 h-4.5 z-2 top-0 right-0 border-t-2 border-r-2 border-green" />
      <div className="corner-bl absolute w-4.5 h-4.5 z-2 bottom-0 left-0 border-b-2 border-l-2 border-green" />
      <div className="corner-br absolute w-4.5 h-4.5 z-2 bottom-0 right-0 border-b-2 border-r-2 border-green" />

      <img
        src={aboutPic}
        alt="Jean Baptiste Mugisha"
        className="w-full h-full object-cover block grayscale-15 contrast-[1.05] transition-[filter] duration-400 hover:grayscale-0 hover:contrast-[1.1]"
      />

      <div className="portrait-name-tag bg-green text-bg px-4 py-2.5 font-mono text-[10px] tracking-[0.12em] uppercase justify-between items-center absolute bottom-0 w-full z-10 hidden">
        <span>Jean Baptiste Mugisha</span>
        <span>Full-Stack &amp; IoT</span>
      </div>
    </div>

    <div className="about-facts-row  grid grid-cols-2 gap-px bg-[rgba(127,238,100,0.12)] border border-[rgba(127,238,100,0.12)] mt-4.5">
      {FACTS.map((fact, i) => (
        <div key={i} className="fact bg-bg-2 p-3 px-3.5">
          <div className="fact-label font-mono text-[9px] text-text-muted tracking-[0.15em] uppercase mb-1">
            {fact.label}
          </div>
          <div
            className={`fact-value text-[14px] font-semibold ${fact.colorClass}`}
          >
            {fact.value}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutPortrait;
