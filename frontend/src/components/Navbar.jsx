
function Navbar(){
    return(
        <div className="flex p-5 text-white font-kot">
            <div className="text-left py-2">Smart Business</div>
            <a href="/addswitch" className="ml-auto flex">
                <p className="font-norm text-3xl">+</p> 
            </a>
            <div className="py-2 ml-6">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="white" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
            </div>
        </div>
    )
}
export default Navbar