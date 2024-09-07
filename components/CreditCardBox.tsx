"use client";
import React, { useEffect, useState } from "react";

const CreditCardBox = () => {
  const [currentPercentage, setCurrentPercentage] = useState("");

  useEffect(() => {
    setCurrentPercentage("82%");
  }, []);
  return (
    <div className=' flex flex-col text-white min-h-36 bg-primary p-4 rounded-3xl w-4/6 justify-between space-y-4 shadow-sm shadow-slate-500  active:shadow-none max-h-44'>
      <p className=' p-white p-2xl'>Savings</p>

      <div className=' space-y-2'>
        <p className='  p-white p-lg'>
          May <span className=' p-sm'> 2024</span>
        </p>
        <div className=' bg-gray-200 h-2 rounded-full'>
          <div
            className=' bg-green-600 h-2 rounded-full'
            style={{
              width: currentPercentage || 0,
            }}></div>
        </div>
        <div className=' w-full flex flex-row justify-between'>
          <p className=' p-white p-lg'>{currentPercentage}</p>
          <p className=' p-white p-lg'>445$</p>
        </div>
      </div>
      <p className=' p-white  p-lg'>12 Days to reset</p>
    </div>
  );
};

export default CreditCardBox;
