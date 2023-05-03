import React, { useContext } from 'react';
import Header from '../../shared/Header/Header';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import { AuthContext } from '../../Provider/AuthProvider';
import Spinner from '../../components/Spinner/Spinner';

// import Spinner from '../../components/Spinner/Spinner';

const Main = () => {
    // const loadSpinner =useLoaderData();
  const {loading} = useContext(AuthContext);
    return (
        <div>
           {
            loading ? <Spinner></Spinner> : <> <Header></Header>
            <div className='min-h-[calc(100vh-228px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer></>
           }
        </div>
    );
};

export default Main;
