import React from "react";

const DesktopWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-screen w-screen overflow-hidden flex'>
      <div className=' h-full bg-primary p-3 text-white'>
        <p className=' text-xl'>Budget</p>
        <p className=' text-xl'>Butler</p>
      </div>
      <div className=' p-2 bg-red-200 flex-1'>{children}</div>
    </div>
  );
};

export default DesktopWrapper;
