export type ListItem = {
  id: string;
  label: string;
  children: ListChild[];
};

export type ListChild = {
  id: string;
  label: string;
  componentKey: string;
};

export const ListContent: ListItem[] = [
  {
    id: 'MaterialUI',
    label: 'Material UI (MUI)',
    children: [
      { id: 'Button', label: 'Button', componentKey: 'MuiButtonDemo' },
      { id: 'Progress', label: 'Progress', componentKey: 'MuiProgressDemo' },
      { id: 'Menu', label: 'Menu', componentKey: 'MuiMenuDemo' },
    ],
  },
  {
    id: 'AntDesign',
    label: 'Ant Design',
    children: [{ id: 'Tabs', label: 'Tabs', componentKey: 'AntTabsDemo' }],
  },
];
