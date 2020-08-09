import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import  "./profile-info.css";

const imageSrc = require("../../../../../../images/citronium.png");

export const ProfileInfo = () => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml5 .line",
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml5 .line",
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el: any, i: number) => -0.625 + 0.625 * 2 * i + "em",
      })
      .add({
        targets: ".ml5 .ampersand",
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600",
      })
      .add({
        targets: ".ml5 .letters-left",
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=300",
      })
      .add({
        targets: ".ml5 .letters-right",
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600",
      })
      .add({
        targets: ".ml5",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []);

  return (
    <h1 className='ml5'>
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters letters-left">Zharavin</span> 
        <span> </span>
        <span className="letters letters-right">Arkady</span>
        <span className="line line2"></span>
      </span>
    </h1>
  );
};
