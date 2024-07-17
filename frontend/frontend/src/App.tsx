import { useState } from 'react';
import './App.css';
import { FaCloudUploadAlt } from "react-icons/fa";

function App() {
  const [file, setFile] = useState(null);
  const handleFileUpload = (event:any) => {
    setFile(event.target.files[0]);
  }
  return (
    <>
      <div className='pageContainer'>
        <div className='pageContainerChild'>
          <div className="fileContainer">
            <div className="fileContainerChild1">
              Upload Your Resume
            </div>
            <div className="fileContainerChild2">
              <div className="uploadContainer">
                <div className="uploadContainerChild1">
                  <label htmlFor="inputFile">
                    <FaCloudUploadAlt className='uploadIcon' />
                    <input onChange={handleFileUpload} accept='.pdf' type="file" style={{'display':'none'}}  id='inputFile' />
                  </label>
                </div>
                <div className="uploadContainerChild2">
                  Upload your Resume here
                </div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
