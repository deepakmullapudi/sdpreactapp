import React from 'react'
import { Route, Routes, Link ,useNavigate} from 'react-router-dom'

import './admin.css'

import AdminHome from './AdminHome';
import ChangeAdminPwd from './ChangeAdminPwd';
import ViewStudents  from './ViewStudents';
import ViewFacultys from './ViewFacultys';
import ViewFacultyProfile from './ViewFacultyProfile';
import ViewStudentProfile from './ViewStudentProfile';
import ViewCourse from './ViewCourse';
import AddCourse from './AddCourse';
export default function AdminNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
    <div>
    <nav>
      <ul>
      <Link to="/adminhome">Home</Link>
      <li><Link to="/changeadminpwd">Change Password</Link></li>
      <Link to="/ViewStudents ">View students</Link>
      <Link to="/ViewFacultys">View facultys</Link> 
      <Link to="/addcourse">Add Course</Link>
      <Link to="/viewcourse">View Course</Link>
      <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>

         <Routes>
         <Route path="/adminhome" Component={AdminHome} exact/>
         <Route path="/changeadminpwd" element={<ChangeAdminPwd/>} exact />
         <Route path="/viewstudents" Component={ViewStudents} exact/>
         <Route path="/viewfacultys" Component={ViewFacultys} exact/>
         <Route path="/viewfacultyprofile/:email" element={<ViewFacultyProfile/>} exact />
         <Route path="/viewstudentprofile/:email" element={<ViewStudentProfile/>} exact />
         <Route path="/addcourse" Component={AddCourse} exact/> 
         <Route path="/viewcourse" Component={ViewCourse} exact/> 

        </Routes>

    </div>
  )
}