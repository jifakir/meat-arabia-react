import React from "react";
import { useTheme } from "@emotion/react";

const WalletBgSvg = ({ width }) => {
  const theme = useTheme();
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 338 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <path
        d="M0 24.7043C0 14.3598 7.85073 5.75076 18.1689 5.01334C46.1745 3.01182 103.552 -0.348257 169 0.0292968C234.24 0.405651 291.461 3.435 319.563 5.19108C329.994 5.84288 338 14.5094 338 24.9605V131.301C338 141.656 330.134 150.267 319.804 150.982C292.584 152.867 237.105 156 169 156C100.895 156 45.4163 152.867 18.1962 150.982C7.86645 150.267 0 141.656 0 131.301V24.7043Z"
        fill={theme.palette.primary.main}
      />
    </svg>
  );
};

export default WalletBgSvg;
