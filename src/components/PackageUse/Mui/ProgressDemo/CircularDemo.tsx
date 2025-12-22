import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// style
import { DemoWrap, DemoContent, DemoTitle } from '../style';

function CircularDemo() {
  return (
    <>
      <DemoWrap>
        <DemoTitle>圓形進度條</DemoTitle>
        <DemoContent>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default CircularDemo;
