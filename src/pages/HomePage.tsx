import AbuseReportForm from '@components/AbuseReportForm';
import React, { useLayoutEffect, useState } from 'react';
import CustomBtn from '@components/CustomBtn';
import { bgImage } from '@assets/images';
import Navbar from '@components/Navbar';

const HomePage: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGoBack = () => {
    setIsSuccess(false);
  };

  useLayoutEffect(() => {
    document.title = `GBV | Home`;
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Left Side with Background Image */}
        <div
          className="hidden lg:flex w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center text-left py-3 pl-6 pr-3">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-white text-3xl font-bold">
                Gender-Based Violence (GBV) Support
              </h1>
              <p className="text-white text-lg mt-2">
                Gender-based violence (GBV) remains a significant challenge in
                Nigeria, particularly in rural and underserved communities. Many
                survivors face barriers to reporting incidents due to stigma,
                fear, or lack of accessible reporting mechanisms. This support
                platform provides a safe, anonymous, and efficient way to report
                and analyze incidents of GBV.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side with Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          {isSuccess ? (
            <div className="max-w-sm w-full flex flex-col items-center">
              <h4 className="text-center text-lg">
                Your complaint has been registered. The necessary authorities
                will reach out to you. Thank you!
              </h4>
              <CustomBtn
                btnName="Go Back"
                xtraStyle="mt-4 max-w-xs"
                onClick={handleGoBack}
              />
            </div>
          ) : (
            <AbuseReportForm setIsSuccess={setIsSuccess} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
