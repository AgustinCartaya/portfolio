import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../../CV.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const DownloadIcon = () => <img style={{ filter: 'invert(1)' }} width="25" height="25" src="https://img.icons8.com/metro/25/download.png" alt="download" />;

const PdfViewer = () => {
  const pageNumber = 1;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <CustomResumeSection>
      <Container onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {showTooltip && <Tooltip>Download  CV</Tooltip>}
        <DownloadButton onClick={handleDownload}>
          <DownloadIcon />
        </DownloadButton>
      </Container>
      <Document file={pdf}>
        <Page pageNumber={pageNumber} />
      </Document>
    </CustomResumeSection>
  );
};

const Resume = () => {
  return <PdfViewer />;
};

const CustomResumeSection = styled.div`
  position: relative;
  width: 100%;
  text-align: center;

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
  position: absolute;
  top: -25px;
  right: 30px;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid;
  cursor: pointer;
  transition: 0.5s all ease;
  background-color: #000000;
  z-index: 1;
  margin: 0;
  border-radius: 50%;
  width: 65px;
  height: 65px;

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
    right: 10px;

    img {
      width: 15px;
      height: 15px;
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
  background-color: #000;
  color: #fff;
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

export default Resume;
