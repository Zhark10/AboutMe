import React, { useEffect, useRef, RefObject } from "react";
import "./profile-info.scss";
import { useViewportScroll, motion, useElementScroll } from "framer-motion";

const imageSrc = require("../../../../../../images/citronium.png");

export const ProfileInfo = () => {
  const ref: RefObject<any> = useRef();
  const { scrollYProgress } = useElementScroll(ref);

  return (
    <div ref={ref} style={{maxHeight: 200, width: '100%', overflowY: 'scroll'}}>
      <motion.div className="my-stack" style={{ color: "red", height: 400, backgroundColor: 'red' }}>
        sssss
      </motion.div>
    </div>
  );
};
