import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import useCountDown from '../../hook/useCountDown';

const Container = styled.div`
  ${tw`w-screen h-screen relative flex justify-center items-center bg-[#000]`}
`;

const Time = styled.ul`
  ${tw`flex justify-center items-center gap-x-5 py-4 border-t-2 border-b-2 border-white text-white`}
  li {
    ${tw`text-[72px] leading-[1.5] text-center flex flex-col justify-center items-center w-[200px]`}
  }
`;

const SvgWrap = styled.div`
  ${tw`relative w-[180px] h-[180px]`}
  svg {
    ${tw`w-full h-full`}
  }
  div {
    ${tw`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[20px] text-white`}
    ${tw`text-center font-medium`}
    p:first-of-type {
      ${tw`text-[1.25em]`}
    }
  }
`;

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) / (in_max - in_min)) * (out_max - out_min) + out_min;
}
function CountDownAminate() {
  const [svgCountD, setSvgCountD] = useState('');
  const [svgCountH, setSvgCountH] = useState('');
  const [svgCountM, setSvgCountM] = useState('');
  const [svgCountS, setSvgCountS] = useState('');
  const targetTime = '2025-9-28 00:00:00';
  const {
    count: { days, hours, minutes, seconds },
  } = useCountDown(targetTime, 'number');

  useEffect(() => {
    setSvgCountD(describeArc(50, 50, 40, 0, mapNumber(days, 30, 0, 0, 360)));
    setSvgCountH(describeArc(50, 50, 40, 0, mapNumber(hours, 24, 0, 0, 360)));
    setSvgCountM(describeArc(50, 50, 40, 0, mapNumber(minutes, 60, 0, 0, 360)));
    setSvgCountS(describeArc(50, 50, 40, 0, mapNumber(seconds, 60, 0, 0, 360)));
  }, [days, hours, minutes, seconds]);

  return (
    <Container>
      <SvgWrap>
        <svg viewBox="0 0 100 100">
          <path fill="none" strokeWidth="4" d={svgCountD} stroke="#fff" />
        </svg>
        <div>
          <p>{days}</p>
          <p>DAYS</p>
        </div>
      </SvgWrap>
      <SvgWrap>
        <svg viewBox="0 0 100 100">
          <path fill="none" strokeWidth="4" d={svgCountH} stroke="#fff" />
        </svg>
        <div>
          <p>{hours}</p>
          <p>HOURS</p>
        </div>
      </SvgWrap>
      <SvgWrap>
        <svg viewBox="0 0 100 100">
          <path fill="none" strokeWidth="4" d={svgCountM} stroke="#fff" />
        </svg>
        <div>
          <p>{minutes}</p>
          <p>MINUTES</p>
        </div>
      </SvgWrap>
      <SvgWrap>
        <svg viewBox="0 0 100 100">
          <path fill="none" strokeWidth="4" d={svgCountS} stroke="#fff" />
        </svg>
        <div>
          <p>{seconds}</p>
          <p>SECONDS</p>
        </div>
      </SvgWrap>
    </Container>
  );
}

export default CountDownAminate;
