import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Listing App</h1>

      <div className="hidden md:flex gap-4">
        <a href="#">Rooms</a>
        <a href="#">Mansion</a>
        <a href="#">Countryside</a>
      </div>

      <div className="flex gap-4">
        <button className="text-sm">Sign In</button>
        <button className="text-sm bg-black text-white px-3 py-1 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
