import React, { lazy, Suspense } from 'react';
const LazyPdfViewer = lazy(() => import('./PdfViewer'));

const Resume = () => {
  return (
    <Suspense fallback={null}>
      <LazyPdfViewer />
    </Suspense>
  );
};

export default Resume;
