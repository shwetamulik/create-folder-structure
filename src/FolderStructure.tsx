import { useState } from 'react';

const Folder = ({ node }: any) => {
  const [openFolder, setOpenFolder] = useState(false);
  return (
    <>
      <label>
        <input type="checkbox" onChange={() => setOpenFolder(!openFolder)} />{' '}
        {node.name}
      </label>
      {openFolder && (
        <ul>
          {node.children.map((item: any, i: number) => (
            <li key={i}>
              {item.children.length ? <Folder node={item} /> : item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export const Structure = ({ folderSchema }: any) => {
  return (
    <>
      <Folder node={{ name: 'root', children: folderSchema }} />
    </>
  );
};
