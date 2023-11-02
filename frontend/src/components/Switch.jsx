import React, { useState } from 'react';

function Switch() {
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setStatus(e.target.checked);
  };
  let value = "";
  if(status){
    value = "ON";
  }else{
    value = "OFF";
  }

  return (
    <div className="bg-s text-white p-3 rounded-lg">
      <div className="flex">
        <div className="font-norm">{value}</div>
        <div className="ml-auto">
            <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onChange={handleChange}/>
            <div class="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-[#4B4B4B] dark:peer-focus:ring-white rounded-full peer dark:bg-[#4B4B4B] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-900 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-900 peer-checked:bg-gray-400"></div>
          </label>
        </div>
      </div>
      <a href="switch/1">
      <br />
      <br />
      <p className="font-kot text-xl">Поливка</p>
      </a>
    </div>
  );
}

export default Switch;