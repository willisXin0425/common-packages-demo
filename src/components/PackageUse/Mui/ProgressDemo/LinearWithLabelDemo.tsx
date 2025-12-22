import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// style
import { DemoWrap, DemoContent, DemoTitle } from '../style';

function LinearWithLabelDemo() {
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <DemoWrap>
        <DemoTitle>長條進度條附標籤</DemoTitle>
        <DemoContent>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{`${Math.round(progress)}%`}</Typography>
              </Box>
            </Box>
          </Box>
        </DemoContent>
      </DemoWrap>
    </>
  );
}

export default LinearWithLabelDemo;
