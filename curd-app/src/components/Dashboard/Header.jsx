import React from 'react';
import Logout from '../Logout';

const Header = ({setIsAdding ,setIsAuthenticated}) =>{
    return(
        <header className=' flex flex-col items-center justify-center m-2'>
            <h1 className='font-bold text-2xl m-4'>Employee Management Software</h1>
            <div >
            <button className="muted-button px-4 py-2 bg-gray-200 rounded"  onClick={() => setIsAdding(true)}>Add Employee</button>
            <Logout setIsAuthenticated={setIsAuthenticated} />
            </div>
        </header>
    )
}
export default Header;