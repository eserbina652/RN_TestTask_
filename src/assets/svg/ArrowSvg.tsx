import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowSvg = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <Path
        d="M6.25 15L5.89645 14.6464L5.54289 15L5.89645 15.3536L6.25 15ZM21.25 15.5C21.5261 15.5 21.75 15.2761 21.75 15C21.75 14.7239 21.5261 14.5 21.25 14.5V15.5ZM10.8964 9.64645L5.89645 14.6464L6.60355 15.3536L11.6036 10.3536L10.8964 9.64645ZM5.89645 15.3536L10.8964 20.3536L11.6036 19.6464L6.60355 14.6464L5.89645 15.3536ZM6.25 15.5H21.25V14.5H6.25V15.5Z"
        fill="#8E949A"
      />
    </Svg>
  );
};

export default ArrowSvg;
