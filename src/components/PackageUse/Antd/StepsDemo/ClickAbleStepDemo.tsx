import { useState } from 'react';
import { Divider, Steps } from 'antd';

// style
import { DemoWrap, DemoContent, DemoTitle } from '../../style';

function ClickAbleStepDemo() {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };
  const content = 'This is a content.';

  return (
    <>
      <DemoWrap>
        <DemoTitle>可點選步驟元件</DemoTitle>
        <DemoContent>
          <div className="w-full">
            <Steps
              current={current}
              onChange={onChange}
              items={[
                {
                  title: 'Step 1',
                  content,
                },
                {
                  title: 'Step 2',
                  content,
                },
                {
                  title: 'Step 3',
                  content,
                },
              ]}
            />
            <Divider />
            <Steps
              current={current}
              onChange={onChange}
              orientation="vertical"
              items={[
                {
                  title: 'Step 1',
                  content,
                },
                {
                  title: 'Step 2',
                  content,
                },
                {
                  title: 'Step 3',
                  content,
                },
              ]}
            />
          </div>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default ClickAbleStepDemo;
