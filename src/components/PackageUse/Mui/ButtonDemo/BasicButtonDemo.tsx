import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// style
import { DemoWrap, DemoContent, DemoTitle } from '../style';

function BasicButtonDemo() {
  return (
    <>
      <DemoWrap>
        <DemoTitle>基礎按鈕</DemoTitle>
        <DemoContent>
          <Stack spacing={2} direction="row">
            <Button variant="text">文字</Button>
            <Button variant="contained">填滿</Button>
            <Button variant="outlined">外框</Button>
          </Stack>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default BasicButtonDemo;
