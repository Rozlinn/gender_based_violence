import { useLayoutEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import Navbar from '@components/Navbar';

const GeospatialPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    document.title = `GBV | Geospatial`;
  }, []);

  return (
    <>
      <Navbar isGeospatial />
      {/* Loader */}
      {loading && (
        <div className="flex flex-col gap-y-2 fixed top-1/2 -translate-y-1/2 w-fit mx-auto inset-x-0 z-50 items-center justify-center">
          <BounceLoader color="#FCA03F" />
          <h4 className="text-gray-700">Loading...</h4>
        </div>
      )}
      <div className="w-full h-[100vh]">
        <iframe
          src="/nigeria_gbv_map.html"
          className="w-full h-full"
          style={{ border: 'none', display: loading ? 'none' : 'block' }}
          onLoad={() => setLoading(false)} // Hide loader when iframe loads
        ></iframe>
      </div>
    </>
  );
};

export default GeospatialPage;
