import { useState, Fragment } from 'react';

import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// content
import { ListContent } from '../../content/ListContent';

type Props = {
  setCurrentDemo: React.Dispatch<React.SetStateAction<string | null>>;
};

function DrawerContent({ setCurrentDemo }: Props) {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({
    MaterialUI: true,
  });

  const toggle = (id: string) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <Toolbar />
      <Divider />
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        {ListContent.map((item: any) => {
          const isOpen = openMap[item.id];
          return (
            <Fragment key={item.id}>
              <ListItemButton onClick={() => toggle(item.id)}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child: any) => (
                    <ListItemButton
                      onClick={() => setCurrentDemo(child.componentKey)}
                      key={item.id + child.id}
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary={child.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          );
        })}
      </List>
    </div>
  );
}

export default DrawerContent;
