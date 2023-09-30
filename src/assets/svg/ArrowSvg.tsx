import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M12 6L12 18" stroke="#8E949A" stroke-linecap="round" />
      <Path d="M18 12L6 12" stroke="#8E949A" stroke-linecap="round" />
    </Svg>
  );
};

export default ArrowSvg;
