import React, { useContext } from "react";
import { ColorContext } from "../../../../ColorProvider";

import { Ava } from "./components/Ava";
import { ProfileInfo } from "./components/profile-info/profile-info";

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
      <Ava/>
      <ProfileInfo/>
    </div>
  );
};

export default CardInfo;
