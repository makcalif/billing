import React, { useState } from 'react';
// Import the correct methods from @aws-amplify/storage
import { uploadData } from '@aws-amplify/storage';

function Bank() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const uploadFileToS3 = async () => {
    if (!file) {
      setUploadStatus('Please choose a file first.');
      return;
    }

    try {
      const result = await uploadData(file.name, file, {
        contentType: file.type,
      });
      setUploadStatus(`File uploaded successfully: ${result}`);
    } catch (error) {
      setUploadStatus(`File upload failed: ${error.message}`);
    }
  };

  return (
    <section>
      <h2>Bank</h2>
      <p>Learn more about our banking services!</p>

      <h3>Upload a File</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFileToS3}>Upload to S3</button>

      {uploadStatus && <p>{uploadStatus}</p>}
    </section>
  );
}

export default Bank;
