import React from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../../CV.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const pageNumber= 1;

  return (
    <CustomResumeSection>
      <Document file={pdf}>
        <Page pageNumber={pageNumber} />
      </Document>
    </CustomResumeSection>
  );
};

const Resume = () => {
  return <PdfViewer />;
};

export default Resume;


const CustomResumeSection = styled.div`
  width: 100%;
  text-align: center;

  .react-pdf__Page__textContent.textLayer{
    display: none;
  }

  .react-pdf__Page__canvas {
    height: unset !important;
    width: 100% !important;
  }
`
