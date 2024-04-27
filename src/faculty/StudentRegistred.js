import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

import { useNavigate } from 'react-router-dom';

export default function StudentRegistred() {
  const navigate = useNavigate();

  const [registereds, setRegistereds] = useState([]);

  const fetchRegistereds= async () => {
    try {
      const response = await axios.get(`${config.url}/viewregistered`);
      setRegistereds(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchRegistereds();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Registered</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Course No</th>
              <th>Course Name</th>
              <th>Modes</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(registereds) && registereds.length > 0 ? (
    registereds.map((registered, index) => (
      <tr key={index}>
        <td>{registered.courseno}</td>
        <td>{registered.coursename}</td>
        <td>{registered.modes}</td>
        <td>{registered.l}</td>
        <td>{registered.t}</td>
        <td>{registered.p}</td>
        <td>{registered.s}</td>
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