import { useState } from "react";
import './App.scss';
import FileUpload from "./FileUpload/FileUpload";

function App() {

  const [files, setFiles] = useState([{
    name: 'myFile.pdf'
  }]);

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }; 

  console.log(files);

  return (
    <div className="App">
      <p className="title">Upload file</p>

      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />

    </div>
  );
}

export default App;
