import React, { lazy, Suspense } from 'react';
const LazyPdfViewer = lazy(() => import('./PdfViewer'));

const Resume = () => {
  return (
    <Suspense fallback={''}>
      <LazyPdfViewer />
    </Suspense>
  );
};

export default Resume;
