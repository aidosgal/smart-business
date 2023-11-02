import { Checkbox } from "@material-tailwind/react";

export default function Controller() {
    return (
        <>
        <div className="px-5 py-3">
            <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="white" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </a>
        </div>
        <div className="px-5 font-norm text-white">
            <p className="font-kot text-xl text-center">Изменить</p>
            <form action="">
            <input type="text" placeholder="Поливка" className="w-full mt-5 bg-[#4B4B4B] py-3 px-5 rounded-full bg-opacity-15 focus:ring-white focus:outline-none" />
            <input type="number" placeholder="1" className="w-full mt-5 bg-[#4B4B4B] py-3 px-5 rounded-full bg-opacity-15 focus:ring-white focus:outline-none" />
            
            <button className="w-full mt-5 bg-[#4B4B4B] py-3 px-5 rounded-full bg-opacity-15 focus:ring-white focus:outline-none">Сохранить</button>
            </form>
        </div>
        </>
    )
}