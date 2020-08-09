import React, { useContext } from "react";
import { ColorContext } from "../../../../ColorProvider";

import Anime, { anime } from "react-anime";

const Header: React.FC = () => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Anime delay={anime.stagger(2000)} scale={[0.1, 2]}>
        <img
          src={require("../../../../images/face.png")}
          style={{
            width: 128,
            height: 148,
            padding: 24,
            backgroundColor: "rgba(245, 215, 110, 0.6)",
            zIndex: 9999,
          }}
        />
      </Anime>
    </div>
  );
};

export default Header;
