import React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Pin = ( props: SvgProps ) => {
    return (
        <Svg fill="#97BDFC" viewBox="0 0 426.667 426.667" {...props}>
          <Path d="M213.333 0C130.88 0 64 66.88 64 149.333c0 112 149.333 277.333 149.333 277.333s149.333-165.333 149.333-277.333C362.667 66.88 295.787 0 213.333 0zm0 202.667c-29.44 0-53.333-23.893-53.333-53.333S183.893 96 213.333 96s53.333 23.893 53.333 53.333-23.893 53.334-53.333 53.334z" />
        </Svg>
      )
}

export default Pin;