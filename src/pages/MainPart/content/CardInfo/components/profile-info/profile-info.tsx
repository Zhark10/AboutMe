import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./profile-info.scss";

const imageSrc = require("../../../../../../images/citronium.png");

export const ProfileInfo = () => {
  useEffect(() => {
    anime({
      targets: ".my-stack .el",
      translateX: function (el: { getAttribute: (arg0: string) => any }) {
        return el.getAttribute("data-x");
      },
      translateY: function (el: any, i: number) {
        return 50 + -50 * i;
      },
      scale: function (el: any, i: number, l: number) {
        return l - i + 0.25;
      },
      rotate: function () {
        return anime.random(-360, 360);
      },
      borderRadius: function () {
        return ["50%", anime.random(10, 35) + "%"];
      },
      duration: function () {
        return anime.random(1200, 1800);
      },
      delay: function () {
        return anime.random(0, 400);
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="my-stack">
      <div className="el" />
      <div className="el" />
      <div className="el" />
    </div>
  );
};
