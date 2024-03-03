export const folderSchema = [
  {
    name: 'Folder 1',
    level: 1,
    children: [
      {
        name: 'File 1-1',
        level: 2,
        children: [],
      },
      {
        name: 'File 1-2',
        level: 2,
        children: [],
      },
    ],
  },
  {
    name: 'Folder 2',
    level: 1,
    children: [
      {
        name: 'Folder 2-1',
        level: 2,
        children: [
          {
            name: 'File 2-1-1',
            level: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'File 3',
    level: 1,
    children: [],
  },
  {
    name: 'Folder 4',
    level: 1,
    children: [
      {
        name: 'Folder 4-1',
        level: 2,
        children: [
          {
            name: 'File 4-1-1',
            level: 3,
            children: [],
          },
        ],
      },
    ],
  },
];
