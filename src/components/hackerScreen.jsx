import React, { useState, useEffect } from 'react';

const HackerScreen = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const checkConnection = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', checkConnection);

    return () => {
      window.removeEventListener('online', checkConnection);
      window.removeEventListener('offline', checkConnection);
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      {isOnline ? (
        <video
          src="https://static.vecteezy.com/system/resources/previews/024/148/818/mp4/high-speed-fiber-data-transfer-5g-4g-bits-internet-ai-network-technology-information-matrix-free-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v6m0 0v6m0-6h6m4 0h6m-6-6v6m0 0v6m0-6h6"
            />
          </svg>
          <h1 className="text-4xl font-bold mb-2">Network Unavailable</h1>
          <p className="text-lg">Please check your connection and try again.</p>
        </div>
      )}
    </div>
  );
};

export default HackerScreen;
