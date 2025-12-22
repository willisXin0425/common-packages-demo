import tw, { styled } from 'twin.macro';

import useCountDown from '../../hook/useCountDown';

const Container = styled.div`
  ${tw`w-screen h-screen relative flex justify-center items-center bg-[#000]`}
`;

const Time = styled.ul`
  ${tw`flex justify-center items-center gap-x-5 py-4 border-t-2 border-b-2 border-white text-white`}
  li {
    ${tw`text-[72px] leading-[1.5] text-center flex flex-col justify-center items-center w-[200px]`}
    .label {
      ${tw`text-[18px] text-[#adafb2]`}
    }
  }
`;

function CountDownBase() {
  const targetTime = '2025-9-26 16:00:00';
  const {
    state,
    count: { days, hours, minutes, seconds },
  } = useCountDown(targetTime, 'string');

  return (
    <Container>
      <Time>
        <li>
          <div className="number">{days}</div>
          <div className="label">天</div>
        </li>
        <li>
          <div className="number">{hours}</div>
          <div className="label">時</div>
        </li>
        <li>
          <div className="number">{minutes}</div>
          <div className="label">分</div>
        </li>
        <li>
          <div className="number">{seconds}</div>
          <div className="label">秒</div>
        </li>
      </Time>
    </Container>
  );
}

export default CountDownBase;
