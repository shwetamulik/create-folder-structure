import './App.css';
import { Structure } from './FolderStructure';
import { folderSchema } from './data';

function App() {
  return (
    <>
      <Structure folderSchema={folderSchema} />
    </>
  );
}

export default App;
