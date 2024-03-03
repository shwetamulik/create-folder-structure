import { useEffect, useState } from 'react';

const Folder = ({ node, isRoot }: any) => {
  const [openFolder, setOpenFolder] = useState(isRoot);
  // useEffect(() => {
  //   if(node.name === 'root'){
  //     setOpenFolder(true)
  //   }
  // },[])
  return (
    <>
      <label>
        <input type="checkbox" onChange={() => setOpenFolder(!openFolder)} checked={openFolder} />{' '}
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
      <Folder node={{ name: 'root', children: folderSchema}} isRoot={true}/>
    </>
  );
};
