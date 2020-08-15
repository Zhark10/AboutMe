import React, { memo, FC } from "react";
import { motion, useViewportScroll } from "framer-motion";

export const Ava: FC = memo(() => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <img
        src={require("../../../../../images/face.png")}
        style={{
          width: 248,
          height: 294,
          padding: 24,
          backgroundColor: "rgba(245, 215, 110, 0.6)",
        }}
      />
    </motion.div>
  );
});
