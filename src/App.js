import { useState } from "react";
import './App.scss';
import FileList from "./FileList/FileList";
import FileUpload from "./FileUpload/FileUpload";

function App() {

  const [files, setFiles] = useState([
    // {
    // name: 'myFile.pdf'
    // }, 
    // {
    // name: 'myFile1.pdf'
    // }, 
    // {
    // name: 'myFile2.pdf'
    // }, 
  ]);

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }; 

  // console.log(files);

  return (
    <div className="App">
      <p className="title">Upload file</p>

      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />

    </div>
  );
}

export default App;
