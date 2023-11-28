import { Suspense } from 'react';
import { LoadingMessage } from '../../components';

const Awards = () => {
  return (
    <Suspense fallback={<LoadingMessage message="Loading Awards..." />}>
      <p>This is Awards Page</p>
    </Suspense>
  );
};

export default Awards;
