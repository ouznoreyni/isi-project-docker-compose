import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Application Todo</Link>
        </h1>
        <nav>
          <Link to="/" className="hover:underline">
            Liste des tâches
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
