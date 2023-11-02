import Navbar from "../components/Navbar"
import Switch from "../components/Switch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineHome } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {LuLayoutDashboard} from 'react-icons/lu';

function Home() {
 return(
    <div>
      {/* Navbar */}
      
      <Navbar/>

      <div className="px-5 text-white font-kot">
        <p className="text-2xl">Привет, Айдос</p>
        <p className="font-norm">Все готово к работе!</p>
      </div>

      <br />
      <div>
        <div className="grid px-5 grid-cols-10 gap-4">
          <div className="text-center mr-auto bg-s my-auto px-6 py-4 rounded-xl col-span-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" fill="white" viewBox="0 0 320 512"><path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"/></svg>          </div>
          <div className=" text-white font-norm mr-auto col-span-3 pl-1">
            <p className="text-sm text-gray-400">Температура</p>
            <p className="font-norm text-3xl mt-1">23°C</p>
          </div>
          <div className="col-span-5 text-sm text-gray-400 text-right font-norm">
            <p>Норма: 21-26°C</p>
            <p>&#128994; Отлично</p>
          </div>
        </div>
        <div className="grid px-5 grid-cols-10 gap-4 mt-4">
          <div className="text-center mr-auto bg-s my-auto px-6 py-4 rounded-xl col-span-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" fill="white" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>          </div>
          <div className=" text-white font-norm mr-auto col-span-3 pl-1">
            <p className="text-sm text-gray-400">Влажность</p>
            <p className="font-norm text-3xl mt-1">33%</p>
          </div>
          <div className="col-span-5 text-sm text-gray-400 text-right font-norm">
            <p>Норма: 30-60%</p>
            <p>&#128994; Отлично</p>
          </div>
        </div>
      </div>
      {/* Все */}
      <br />
      <div className="px-5">
        <p className="font-kot text-white text-lg" >Устройства</p>
        <div className="grid grid-cols-2 gap-3">
          <Switch/>
        </div>
      </div>

      <div className="fixed bottom-2 px-5 w-full">
        <div className="flex bg-s py-3 rounded-full">
          <div className="mx-auto">
            <a href="/" className="text-white text-2xl"><AiOutlineHome/></a>
          </div>
          <div className="mx-auto">
            <a href="/dashboard" className="text-gray-500 text-2xl"><LuLayoutDashboard/></a>
          </div>
          <div className="mx-auto">
            <a href="/profile" className="text-gray-500 text-2xl"><CgProfile/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home