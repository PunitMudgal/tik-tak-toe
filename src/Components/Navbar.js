import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

let mode_name;
if(props.mode === '#cbd5e1'){
  mode_name = 'Dark Mode';
}
else{
  mode_name = 'Light Mode';
}


  return (
    <div className={`flex justify-between ${props.mode === '#cbd5e1'? 'text-slate-700': 'text-zinc-300'} ${props.mode === '#cbd5e1'? 'bg-slate-300': 'bg-gray-900'} ${props.mode === '#cbd5e1'?  'shadow-md shadow-white' : 'shadow-md shadow-cyan-500/50'} font-serif `}>
        {/* this is navbar  */}
 <nav className="flex space-x-4">
  <Link to="/" className="font-bold px-3 py-2  rounded-lg  hover:text-orange-700" value="Reload Page" onClick="window.location.reload();">Home</Link>
  <Link to="/about" className="font-bold px-3 py-2  rounded-lg  hover:text-orange-700" value="Reload Page" onClick="window.location.reload();">About</Link>
  <Link to="/contactus" className="font-bold px-3 py-2  rounded-lg   hover:text-orange-700" value="Reload Page" onClick="window.location.reload();">Contact Us</Link>
</nav>


{/* mode button*/}

<button onClick={() => props.toggleDark()} type="button" className={`mt-1 ${props.mode === '#cbd5e1'? 'hover:border-black': 'hover:border-slate-300 '}   ${props.mode === '#cbd5e1'? 'bg-gray-800': 'bg-slate-700 '} border-solid border-2   text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}>{mode_name}</button>
</div>
  )}

  

