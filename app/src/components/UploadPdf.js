// src/components/UploadPdf.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Selecione um arquivo PDF para fazer o upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        setUploadStatus('Upload realizado com sucesso!');
      } else {
        setUploadStatus('Falha ao realizar o upload.');
      }
    } catch (error) {
      console.error('Erro ao enviar o arquivo', error);
      setUploadStatus('Erro no upload do arquivo.');
    }
  };

  return (
    <div>
      <h2>Upload de PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar PDF</button>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default UploadPdf;
