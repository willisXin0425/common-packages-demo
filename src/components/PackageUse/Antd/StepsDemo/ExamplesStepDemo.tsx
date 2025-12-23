import { Flex, Steps } from 'antd';

// style
import { DemoWrap, DemoContent, DemoTitle } from '../../style';

const content = 'This is a content.';
const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Progress',
    content: 'This is a content.',
    subTitle: 'Left 00:00:08',
  },
  {
    title: 'Waiting',
    content: 'This is a content.',
  },
];

function ExamplesStepDemo() {
  return (
    <>
      <DemoWrap>
        <DemoTitle>基本步驟元件</DemoTitle>
        <DemoContent>
          <Flex className="w-full" vertical gap="large">
            <Steps current={1} items={items} />
            <Steps current={1} items={items} variant="outlined" />
            <Steps current={1} items={items} size="small" />
            <Steps current={1} items={items} size="small" variant="outlined" />
          </Flex>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default ExamplesStepDemo;
