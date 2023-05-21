import React from 'react';

function FileUpload() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the file, such as upload to a server or process it
    console.log('Uploaded file:', file);
  };

  return (
    <div style={{ marginTop: '120px', marginBottom: '35px', marginLeft: '-125px', 
     height: 'fit-content' }}>
        <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default FileUpload;