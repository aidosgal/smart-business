import Navbar from "../components/Navbar"
import { AiOutlineHome } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {LuLayoutDashboard} from 'react-icons/lu';

function Profile() {
 return(
    <div>
      {/* Navbar */}
      
      <Navbar/>
      
      <div className="fixed bottom-2 px-5 w-full">
        <div className="flex bg-s py-3 rounded-full">
          <div className="mx-auto">
            <a href="/" className="text-gray-500 text-2xl"><AiOutlineHome/></a>
          </div>
          <div className="mx-auto">
            <a href="/dashboard" className="text-gray-500 text-2xl"><LuLayoutDashboard/></a>
          </div>
          <div className="mx-auto">
            <a href="/profile" className="text-white text-2xl"><CgProfile/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile