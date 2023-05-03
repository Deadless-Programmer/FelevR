import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../components/ActiveLink/ActiveLink";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar  bg-orange-100 drop-shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold">
                <ActiveLink to="/">Home</ActiveLink>
              </li>

              <li className="font-semibold">
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>

              {user ? (
                <>
                  <div data-tip={user.displayName}>
                    <div className="w-8 ml-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className=" p-3 mr-24  hover:bg-blue-200 rounded font-semibold "
                  >
                    <ActiveLink to="/">Sign Out</ActiveLink>
                  </button>
                </>
              ) : (
                <button className=" p-3 mr-30  hover:bg-blue-200 rounded font-semibold ">
                  <ActiveLink to="/login">Login</ActiveLink>
                </button>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost md:ml-8 font-bold normal-case text-3xl">
            Felev<span className="text-orange-500 text-4xl">R</span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">
            <li className="font-semibold">
              <ActiveLink to="/">Home</ActiveLink>
            </li>

            <li className="font-semibold">
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            {user ? (
            <>
              <div
                className="avatar tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className=" p-3 hover:bg-blue-200 rounded font-semibold "
              >
                <ActiveLink to="/">Sign Out</ActiveLink>
              </button>
            </>
          ) : (
            <button className=" p-3 hover:bg-blue-200 rounded font-semibold">
              <ActiveLink to="/login">Login</ActiveLink>
            </button>
          )}
          </ul>
        </div>
        <div className="navbar-end md:mr-10">
        <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
        </div>
      </div>
      
    </div>
  );
};
{/* <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button> */}
export default Header;
