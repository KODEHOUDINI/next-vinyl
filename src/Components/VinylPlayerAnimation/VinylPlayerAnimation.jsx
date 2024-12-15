"use client";
import gsap from "gsap";
import DiskImage from "/public/disk.png";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

const VinylPlayerAnimation = ({ textsPrimary, textSecondary, coverImg }) => {
  const container = useRef();

  useEffect(() => {
    const def1 = container.current.querySelector("#def-1");
    const path1 = container.current.querySelector("#path-1");
    const def2 = container.current.querySelector("#def-2");
    const path2 = container.current.querySelector("#path-2");
    def1.setAttribute("d", path1.getAttribute("d"));
    def2.setAttribute("d", path2.getAttribute("d"));
  }, []);

  useGSAP(
    () => {
      const animateText = (selector, delay) => {
        gsap.to(selector, {
          attr: { startOffset: "100%" },
          ease: "linear",
          duration: 6,
          repeat: -1,
          delay: delay,
        });
      };
      animateText("#Text1", 0);
      animateText("#Text2", 2);
      animateText("#Text3", 4);

      gsap.to(".disk", {
        rotate: 360,
        ease: "linear",
        duration: 2,
        repeat: -1,
      });
    },
    { scope: container }
  );

  return (
    <div className="container" ref={container}>
      {/* TEXT 1 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        width="800px"
        height="600px"
        id="text-primary"
      >
        <defs>
          <path id="def-1" />
        </defs>
        <path id="path-1" d="M -393 405 C -53 405 -73 5 177 5 C 427 5 407 405 747 405" />
        <text>
          {textsPrimary.map((text, index) => (
            <textPath key={index} id={`Text${index + 1}`} xlinkHref="#def-1" startOffset="-25%">
              {text}
            </textPath>
          ))}
        </text>
      </svg>

      {/* TEXT 2 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
        width="600px"
        height="600px"
        id="text-secondary"
      >
        <defs>
          <path id="def-2" />
        </defs>
        <path id="path-2" d="M -393 60 C -53 60 -70 365 180 365 C 421 352 407 60 725 56" />

        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="end">
          <textPath id="Text5" xlinkHref="#def-2" startOffset="37%">
            {textSecondary}
          </textPath>
        </text>
      </svg>

      {/* DISK */}
      <div className="disk">
        <Image src={DiskImage} alt="Disk Image" />
        <div className="cover-img">
          <Image src={coverImg} alt="Cover Image" />
        </div>
      </div>
    </div>
  );
};

export default VinylPlayerAnimation;
