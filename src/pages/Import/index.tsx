import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import {
  Container,
  Title,
  ImportFileContainer,
  Footer,
  ImportError,
} from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();
    try {
      uploadedFiles.forEach(file => {
        data.append('file', file.file);
      });
      await api.post('/transactions/import', data);
      history.push('/');
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  }

  function submitFile(files: File[]): void {
    const uploaded: FileProps[] = files.map(file => {
      return {
        name: file.name,
        file,
        readableSize: filesize(file.size),
      };
    });
    setUploadedFiles(uploaded);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <ImportError show={!!errorMessage}>{errorMessage}</ImportError>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
