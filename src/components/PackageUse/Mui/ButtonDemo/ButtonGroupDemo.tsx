import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// style
import { DemoWrap, DemoContent, DemoTitle } from '../style';

function ButtonGroupDemo() {
  return (
    <>
      <DemoWrap>
        <DemoTitle>按鈕群組</DemoTitle>
        <DemoContent>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default ButtonGroupDemo;
