// import React, { useState } from 'react';
// // Import uploadData from @aws-amplify/storage
// import { uploadData } from '@aws-amplify/storage';
import { FileUploader } from '@aws-amplify/ui-react-storage';

function Bank() {
   

  return (
    <FileUploader
      acceptedFileTypes={['image/*']}
      path="public/"
      maxFileCount={1}
      isResumable
    />
  );
};
export default Bank;
