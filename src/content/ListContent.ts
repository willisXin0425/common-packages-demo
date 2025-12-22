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
      { id: 'Rating', label: 'Rating', componentKey: 'MuiRatingDemo' },
    ],
  },
  {
    id: 'AntDesign',
    label: 'Ant Design',
    children: [{ id: 'Tabs', label: 'Tabs', componentKey: 'AntTabsDemo' }],
  },
];
