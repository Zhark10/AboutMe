import React, { useContext } from "react";
import { ColorContext } from "../../../../providers/ColorProvider";

import { Ava } from "./components/Ava";
import { ProfileInfo } from "./components/profile-info/profile-info";
import { AnimatedName } from "./components/animated-name/animated-name";

const CardInfo: React.FC = () => {
  const {
    theme: [color],
  } = useContext(ColorContext as any);

  return (
    <div
      style={{
        zIndex: 999999,
        padding: 32,
        border: `2px solid ${color}`,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <Ava />
        {/* <ProfileInfo /> */}
      </div>
      <AnimatedName />
    </div>
  );
};

export default CardInfo;
