import React from 'react';

const SplashScreen = () => {
  return (
    <>
   
    <div className="flex items-center justify-center h-screen bg-black">
   
      <img
          src="http://localhost:5173/src/assets/Logo.png"
        alt="Logo"
        className="w-60 h-60 rounded-full animate-pulse"
      />
    </div>
    </>
  );
  
};

export default SplashScreen;
