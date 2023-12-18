import React from "react";
import Svg, { Path } from "react-native-svg";

const KeySVG = (props) => {
  return (
    <Svg
      width={37}
      height={63}
      style={{marginLeft:27}}
      viewBox="0 0 37 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.758 34.061h-3.985v-3.36h3.985v-3.546h-3.985v-2.114h3.985v-3.546h-3.985v-4.274h11.243v-6.547H21.773V6.547h11.243V.001h-17.79v21.493h-3.985v3.546h3.985v2.114h-3.985v3.547h3.985v3.362h-3.985a10.532 10.532 0 00-2.875 20.663 10.533 10.533 0 0020.267 0 10.532 10.532 0 00-2.875-20.663v-.002zm-18.5 10.531a3.989 3.989 0 013.984-3.984h6.56l-7.993 7.7a3.987 3.987 0 01-2.552-3.716h.001zM18.5 55.835a3.988 3.988 0 01-3.693-2.5l3.693-3.557 3.693 3.557a3.988 3.988 0 01-3.694 2.501l.001-.001zm8.691-7.529l-7.992-7.7h6.56a3.982 3.982 0 011.432 7.7z"
        fill="#3EBDAC"
      />
    </Svg>
  );
};

export default KeySVG;
