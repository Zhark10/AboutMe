import React, { memo, FC } from "react";

export const Ava: FC = memo(() => (
    <img
      src={require("../../../../../images/face.png")}
      style={{
        width: 248,
        height: 294,
        padding: 24,
        backgroundColor: "rgba(245, 215, 110, 0.6)",
      }}
    />
));
