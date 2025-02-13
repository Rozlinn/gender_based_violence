import { useNavigate } from 'react-router-dom';
import CustomBtn from '@components/CustomBtn';
import { useLayoutEffect } from 'react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.title = `GBV | Not Found`;
  }, []);

  return (
    <div className="text-center flex mt-36">
      <div className="m-auto gap-y-8 pb-44">
        <h1 className="text-8xl text-primary font-bold">404</h1>
        <div className="text-lg">
          <p>Oops! It seems like you&apos;ve taken a wrong turn.</p>
          <p>Let&apos;s get you back on track.</p>
        </div>
        <CustomBtn
          btnName="Go Home"
          xtraStyle="mt-3 !w-fit px-6 py-1"
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
