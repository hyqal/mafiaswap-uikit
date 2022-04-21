import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#009eff" : "#000000";
  return (
    <Svg viewBox="0 0 205 26" {...props}>
      <image width="205" height="26" href={isDark ? '/images/bear/logo_banner.png' : '/images/bear/logo_banner.png'}/>
    </Svg>
  )
};

export default Logo;
