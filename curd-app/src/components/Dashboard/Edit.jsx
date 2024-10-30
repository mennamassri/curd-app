import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
    if (!selectedEmployee) return null;
    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();
    
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            });
        }
    
        const updatedEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
        };
    
        const updatedEmployees = [...employees];  // عمل نسخة جديدة من المصفوفة لتحديث الموظف فيها
    
        for (let i = 0; i < updatedEmployees.length; i++) {
            if (updatedEmployees[i].id === id) {
                updatedEmployees.splice(i, 1, updatedEmployee);  // استخدام updatedEmployee بدل employee
                break;
            }
        }
    
        localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
        setEmployees(updatedEmployees);
        setIsEditing(false);
    
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${updatedEmployee.firstName} ${updatedEmployee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500,
        });
    };
    

    return (
        <div className="small-container flex items-center justify-center h-screen">
         <form onSubmit={handleUpdate} className="bg-white p-8 rounded shadow-md max-w-lg">
            <h1 className='mb-4 font-bold text-2xl'>Edit Employee</h1>
    
            <div className="flex flex-col mb-4 ">
                <label htmlFor="firstName" className="mb-1">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="px-3 py-2 border rounded w-96"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
    
            <div className="flex flex-col mb-4">
                <label htmlFor="lastName" className="mb-1">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className="px-3 py-2 border rounded"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
    
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-1">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="px-3 py-2 border rounded"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
    
            <div className="flex flex-col mb-4">
                <label htmlFor="salary" className="mb-1">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    className="px-3 py-2 border rounded"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
            </div>
    
            <div className="flex flex-col mb-4">
                <label htmlFor="date" className="mb-1">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    className="px-3 py-2 border rounded"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
    
            <div style={{ marginTop: '30px' }}>
                <input type="submit" value="Update" className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" />
                <input
                    className="muted-button px-4 py-2 bg-gray-200 rounded"
                    type="button"
                    value="Cancel"
                    onClick={() => setIsEditing(false)}
                />
            </div>
        </form>
    </div>
    
    );
};

export default Edit;
