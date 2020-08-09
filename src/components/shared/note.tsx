import React from "react";

interface Props {
  color: string;
}

export const Reference: React.FC<Props> = ({ color }) => (
  <svg height="200" width="500">
    <polyline
      points="0,50 70,0 200,0"
      style={{fill: 'none', strokeWidth: 3, stroke: color}}
    />
  </svg>
);
