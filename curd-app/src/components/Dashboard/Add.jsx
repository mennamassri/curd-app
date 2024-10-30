import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add =({employees, setEmployees, setIsAdding})=>{
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = e =>{
    e.preventDefault();

    if(!firstName || !lastName || !email || !salary || !date){
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true,
          });
    }

    const id = employees.length +1 ;
    const newEmployee ={
        id,
        firstName,
        lastName,
        email,
        salary,
        date
    }

    employees.push(newEmployee);
    localStorage.getItem('employees_data',JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false)

    Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${firstName} ${lastName}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    return(
        <div className="small-container flex items-center justify-center h-screen">
            <form onSubmit={handleAdd} className="bg-white p-8 rounded shadow-md max-w-lg">
            <h1 className='mb-4 font-bold text-2xl'>Add Employee</h1>
        <div className="flex flex-col mb-4 ">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
           className="px-3 py-2 border rounded w-96"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        /></div>
         <div className="flex flex-col mb-4 ">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
           className="px-3 py-2 border rounded"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        /></div>
         <div className="flex flex-col mb-4 ">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
           className="px-3 py-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /></div>
         <div className="flex flex-col mb-4 ">
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
           className="px-3 py-2 border rounded"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        /></div>
         <div className="flex flex-col mb-4 ">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
           className="px-3 py-2 border rounded "
          value={date}
          onChange={e => setDate(e.target.value)}
        /></div>
      <div className='flex items-center justify-center'>
          <input type="submit" value="Add" className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" />
          <input
            className="muted-button px-4 py-2 bg-gray-200 rounded"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
      </div>
            </form>
        </div>
    )
  }

export default Add