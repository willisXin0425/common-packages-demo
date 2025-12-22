import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// style
import { DemoWrap, DemoContent, DemoTitle } from '../style';

function CircularWithLabelDemo() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <DemoWrap>
        <DemoTitle>圓形進度條附標籤</DemoTitle>
        <DemoContent>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress size={50} variant="determinate" value={progress} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                sx={{ color: 'text.secondary' }}
              >{`${Math.round(progress)}%`}</Typography>
            </Box>
          </Box>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default CircularWithLabelDemo;
