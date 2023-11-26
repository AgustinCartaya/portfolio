import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { LoadingMessage } from '../../components';
import useDarkMode from '../../hooks/useDarkMode';
import pdf from '../../CV.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useDarkMode();
  const pageNumber = 1;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'CV.pdf';
    link.click();
  };

  const handleLoadSuccess = () => {
    setLoading(false);
  };

  const handleThemeIcon = isDarkMode ? (
    <span className={'material-icons icon'}>file_download</span>
  ) : (
    <span className={'material-icons icon'} style={{ color: '#fff' }}>
      file_download
    </span>
  );

  return (
    <CustomResumeSection>
      {!loading && (
        <Container onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
          {showTooltip && <Tooltip>Download CV</Tooltip>}
          <DownloadButton onClick={handleDownload} aria-label="Download CV">
            {handleThemeIcon}
          </DownloadButton>
        </Container>
      )}
      <Document file={pdf} onLoadSuccess={handleLoadSuccess} loading={<LoadingMessage message="Loading PDF..." />}>
        <Page pageNumber={pageNumber} />
      </Document>
    </CustomResumeSection>
  );
};

export default PdfViewer;

const CustomResumeSection = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding-top: 30px;

  .react-pdf__Page__textContent.textLayer {
    display: none;
  }

  .react-pdf__Page__canvas {
    height: unset !important;
    width: 100% !important;
  }

  .react-pdf__Page__annotations.annotationLayer {
    display: none;
  }
`;

const DownloadButton = styled.button`
  display: grid;
  place-items: center;
  position: absolute;
  top: -25px;
  right: 30px;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid;
  cursor: pointer;
  transition: 0.5s all ease;
  background-color: ${({ theme }) => theme?.colors?.primary};
  z-index: 1;
  margin: 0;
  border-radius: 50%;

  .icon {
    font-size: 32px;
  }

  @media (max-width: 500px) {
    right: 10px;

    .icon {
      font-size: 26px;
    }
  }

  opacity: 0;
  animation: fadeIn 0.7s forwards 0.8s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -60px;
  right: 0;
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.secondary};
  padding: 5px 15px;
  border-radius: 5px;
  z-index: 2;
  font-family: inherit;

  @media (max-width: 500px) {
    top: -17px;
    right: 65px;
    font-size: 13px;
  }
`;
