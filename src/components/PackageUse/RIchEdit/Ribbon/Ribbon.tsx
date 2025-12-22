import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import DownloadIcon from '@mui/icons-material/Download';

import { Container, Content } from './style';

type RibbonProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function Ribbon({ value, setValue }: RibbonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = (content: string) => {
    const json = JSON.stringify({ content }); // 包成物件
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${Date.now()}-content.json`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = reader.result as string;
          const { content } = JSON.parse(json);
          setValue(content);
        } catch (error) {
          alert('檔案格式錯誤');
          console.error(error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <Container>
        <Content>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              fontSize: '16px',
              color: 'white',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#ffffffb3',
              },
            }}
          >
            檔案
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                sx: {
                  width: 320,
                },
              },
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <MenuItem onClick={() => inputRef.current?.click()}>
              <ListItemIcon>
                <FolderIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>開啟</ListItemText>
              <input hidden type="file" id="input" onChange={handleFileChange} ref={inputRef} />
            </MenuItem>
            <MenuItem onClick={() => handleDownload(value)}>
              <ListItemIcon>
                <DownloadIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>下載</ListItemText>
            </MenuItem>
          </Menu>
        </Content>
      </Container>
    </>
  );
}

export default Ribbon;
