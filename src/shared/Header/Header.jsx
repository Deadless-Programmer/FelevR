import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {


  const {user, logOut}=useContext(AuthContext);

    const handleLogOut =()=>{
      logOut()
      .then()
      .catch(error =>console.log(error))
    }

    return (
        <div>
<div className="navbar  bg-orange-100 drop-shadow">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost font-bold normal-case text-3xl">ClassyCuisine</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-semibold'><ActiveLink to="/" >Home</ActiveLink></li>
      
      <li className='font-semibold'><ActiveLink to="/blog">Blog</ActiveLink></li>
      {user ? (
							<>
								<div
									className='avatar tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary'
									data-tip={user.displayName}>
									<div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
										<img src={user.photoURL} />
									</div>
								</div>
								<button
									onClick={handleLogOut}
									className='shadow p-3 hover:bg-blue-400 rounded font-bold text-lg'>
									<ActiveLink to='/login'>Sign Out</ActiveLink>
								</button>
							</>
						) : (
							<button className='shadow p-3 hover:bg-blue-400 rounded font-bold text-lg'>
								<ActiveLink to='/login'>Login</ActiveLink>
							</button>
						)}

      
      
    </ul>
    
  </div>
  
</div>


        </div>
    );
};

export default Header;