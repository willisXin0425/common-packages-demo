import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`overflow-hidden relative w-screen h-screen bg-black`}
  canvas {
    ${tw`absolute top-0 left-1/2 translate-x-[-50%]`}
  }
`;
