import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react'; 
import './FileUpload.scss'; 

const FileUpload = ({ files, setFiles, removeFile }) => {

    const uploadHandler = (event) => {
        const file = event.target.files[0]; 
        // console.log(file);
        file.isUploading = true; 
        setFiles([...files, file]); 

        // upload file 
        const formData = new FormData(); 
        formData.append(
            file.name,
            file,
            file.name
        )

        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file]); 
            })
        
            .catch((err) => {
                // inform the user
                console.log(err);
                removeFile([...files, file])
            })
    };

    return (
        <div className='file-card'>
            <div className="file-inputs">
                <input type="file" onChange={uploadHandler} />
                <button>
                    <i>
                        <FontAwesomeIcon icon={faPlus} />
                    </i>
                    Upload
                </button>
            </div>

            <p className="main">Support files</p>
            <p className="info">PDF, JPG, PNG</p>

        </div>
    )
}

export default FileUpload