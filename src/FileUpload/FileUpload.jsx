import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import './FileUpload.scss'; 

const FileUpload = ({ files, setFiles }) => {

    const uploadHandler = () => {};

    return (
        <div className='file-card'>
            <div className="file-inputs">
                <input type="file" />
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