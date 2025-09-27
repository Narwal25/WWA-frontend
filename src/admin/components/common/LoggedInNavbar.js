// /admin/components/common/LoggedInNavbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../lib/api';


const LoggedInNavbar = () => {
  
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await api.post('/admin/logout');
      navigate('/admin');
      window.location.reload();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <>
      <div className='row bg-black m-0 p-3'>
        <div className='col-4'>
          <Link className='btn btn-warning font-weight-bold' to="/admin">Home</Link>
        </div>
        <div className='col-4'>
          <Link className='btn btn-warning font-weight-bold' to="/admin/bookings">Bookings</Link>
        </div>
        <div className='col-4'>
          <Link className='btn btn-warning font-weight-bold' onClick={handleLogout}>Logout</Link>
        </div>
      </div>

    </>
  );
};

export default LoggedInNavbar;