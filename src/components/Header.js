import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TfiVideoClapper } from "react-icons/tfi";
import { TfiWorld } from "react-icons/tfi";
import { SiImdb } from "react-icons/si";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoCaretForwardCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="conatiner mx-auto relative flex justify-around bg-slate-500 p-5 text-lg">
      <Link className="flex items-center cursor-pointer" to="/">
        <span>:::</span> <h2 className="ml-2 text-2xl">Streamer</h2>
      </Link>

      <div className="flex">
        <div className="flex items-center flex-col">
          <AiOutlineHome />
          <Link className="text-lg" to="/">
            Home
          </Link>
        </div>
        <div className="flex items-center flex-col justify-between">
          <IoCaretForwardCircleOutline />
          <Link className="ml-5 text-lg" to="/genre">
            Genre
          </Link>
        </div>
        <div className="flex items-center flex-col justify-between">
          <TfiWorld />
          <Link className="ml-5 text-lg" to="/country">
            Country
          </Link>
        </div>
        <div className="flex items-center flex-col justify-between">
          <TfiVideoClapper />
          <Link className="ml-5 text-lg" to="/movies">
            Movies
          </Link>
        </div>
        <div className="flex items-center flex-col justify-between">
          <MdOutlineOndemandVideo />
          <Link className="ml-5 text-lg" to="/tvShows">
            Tv Series
          </Link>
        </div>
        <div className="flex items-center flex-col justify-between">
          <SiImdb />
          <Link className="ml-5 text-lg" to="/topIMDB">
            Top IMDB
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
