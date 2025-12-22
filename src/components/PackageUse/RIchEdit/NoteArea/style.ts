import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`py-2.5 px-2`}
`;

export const Content = styled.div`
  ${tw`mt-2.5  p-4 border-lineColor border-[1px]`}
  p {
    ${tw`mb-4 text-[16px]`}
  }
`;
