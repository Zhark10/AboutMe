import React, { useContext } from "react";
import "./profile-info.scss";
import { ScrollProgressContext } from "../../../../../../providers/ScrollProgressProvider";

const imageSrc = require("../../../../../../images/citronium.png");

export const ProfileInfo = () => {
  const {
    scroll: [scrollProgress, setScrollProgress],
  } = useContext(ScrollProgressContext as any);

  return (
    <div className="my-stack" style={{color: 'red'}}>
      {scrollProgress + ''}
    </div>
  );
};
