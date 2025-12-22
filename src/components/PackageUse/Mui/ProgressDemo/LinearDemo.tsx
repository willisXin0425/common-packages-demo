import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

// style
import { DemoWrap, DemoContent, DemoTitle } from '../style';

function LinearDemo() {
  return (
    <>
      <DemoWrap>
        <DemoTitle>長條進度條</DemoTitle>
        <DemoContent>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default LinearDemo;
