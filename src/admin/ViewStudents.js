import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

import { useNavigate } from 'react-router-dom';

export default function ViewStudents() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudents`);
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const deletestudent = async (email) => {
    try {
      await axios.delete(`${config.url}/deletestudent/${email}`);
      fetchStudents();
    } catch (error) {
      console.error(error.message);
    }
  }
  const viewStudent = async (email) => {
    try 
    {
      navigate(`/viewstudentprofile/${email}`)
      window.location.reload()
    } 
    catch (error) 
    {
      console.error(error.message);
    }
  }


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Students</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((student, index) => (
      <tr key={index}>
        <td>{student.ID}</td>
        <td>{student.fullname}</td>
        <td>{student.gender}</td>
        <td>{student.dateofbirth}</td>
        <td>{student.email}</td>
        <td>{student.location}</td>
        <td>{student.contact}</td>
        <td>
        <button onClick={() => viewStudent(student.email)} className='button'>View</button>
          <button onClick={() => deletestudent(student.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}