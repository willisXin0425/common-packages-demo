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
      { id: 'Accordion', label: 'Accordion', componentKey: 'MuiAccordionDemo' },
    ],
  },
  {
    id: 'AntDesign',
    label: 'Ant Design',
    children: [
      { id: 'Tabs', label: 'Tabs', componentKey: 'AntdTabDemo' },
      { id: 'Steps', label: 'Steps', componentKey: 'AntdStepsDemo' },
    ],
  },
];
