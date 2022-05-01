import axios from 'axios';
import React from 'react';
import FileItem from '../FileItem/FileItem';
import './FileList.scss';

const FileList = ({ files, removeFile }) => {

    const deleteFileHandler = (_name) => {
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.log(err))
    };

    return (
        <ul className='file-list'>
            {
                files && files.map((file) => <FileItem
                    key={file.name}
                    file={file}
                    deleteFile={deleteFileHandler}
                />)
            }
        </ul>
    )
}

export default FileList