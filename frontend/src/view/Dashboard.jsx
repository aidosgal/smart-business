import Navbar from "../components/Navbar"
import Switch from "../components/Switch"
import { AiOutlineHome } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {LuLayoutDashboard} from 'react-icons/lu';
import { Column } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';

const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

function Dashboard() {
 return(
    <div>
      {/* Navbar */}
      
      <Navbar/>
      <div className="px-5 text-white font-norm flex">
        <select name="" id="" className="mx-auto text-center bg-black bg-opacity-0 border-solid border-2 white py-2 px-4 rounded-full appearance-none">
            {months.map((month, index) => (
                <option value={index}>{month}</option>
            ))}
        </select>
      </div>
      <br />
      <div className="px-5 text-white font-norm">
        <p className="font-kot text-lg">Использование Устройств</p>
        <div className="grid grid-cols-2 mt-2 flex">
            <div>
                <p className="text-md font-kot">Поливка</p>
                <p className="text-sm">15 часов 30 мин</p>
            </div>
            <div className="my-auto ml-auto text-md">
                15 <span className="text-gray-400">кВатт</span>
            </div>
        </div>
        <hr className="custom-hr" />
      </div>

      <div className="fixed bottom-2 px-5 w-full">
        <div className="flex bg-s py-3 rounded-full">
          <div className="mx-auto">
            <a href="/" className="text-gray-500 text-2xl"><AiOutlineHome/></a>
          </div>
          <div className="mx-auto">
            <a href="/dashboard" className="text-white text-2xl"><LuLayoutDashboard/></a>
          </div>
          <div className="mx-auto">
            <a href="/profile" className="text-gray-500 text-2xl"><CgProfile/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard