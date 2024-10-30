import React, { useState } from 'react'; 

import '../../index.css'

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });
  return (
    <div className='contain-table flex items-center justify-center m-1'>
      <table className="striped-table ">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id} >

                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.date}</td>
                <td>
                <button className="muted-button px-4 py-2 border border-gray-300 rounded" onClick={() => handleEdit(employee.id)}>Edit</button>
                </td>
                <td>
                  <button className="muted-button px-4 py-2 border border-gray-300 rounded" onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
