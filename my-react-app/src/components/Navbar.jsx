import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between text-white  bg-slate-900 shadow-xl  px-20 py-4">
        <div className="flex items-center justify-center ">
         <h1 className="font-bold text-xl ">
          INK STUDIO
         </h1>
        </div>
        

      <ul className="flex justify-between items-center gap-10 ">
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/services">Services</Link></li>
          

        <button className="bg-slate-900 text-white border px-6 py-2 rounded-md ">
         Contact
        </button>
      </ul>
      
    </nav>
  );
}

export default Navbar;
