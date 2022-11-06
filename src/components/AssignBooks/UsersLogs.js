import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { API_URL } from '../API_URL'
import { Button } from "@mui/material";
import { useNavigate} from "react-router-dom";
function UsersLogs() {
  const navigate=useNavigate();
    const [data,setData]=useState([]);
    useEffect(()=>{
     async function getData(){
      const res=await axios.get(`${API_URL}/assign`);
      setData(res.data);
     }
     getData();
    }, [])
   let handleDelete=async(id)=>{
    const res=await axios.delete(`${API_URL}/assign/${id}`)
    const userData=data.filter((e)=>e.id!== res.data.id)
    setData(userData)
   }
  return (
    <>
       <div className="sb-nav-fixed">
        <NavBar />
        <div id="layoutSidenav">
          <SideBar />
          <div id="layoutSidenav_content">
            <div className="container-fluid px-4"><br/>
                <h2>Users Logs</h2>
                <br/>
            <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">User Name</TableCell>
            <TableCell align="left">Book Name</TableCell>
            <TableCell align="left">Entry Date</TableCell>
            <TableCell align="left">Due Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Fine Amount</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell component="th" scope="row">
                {e.id}
              </TableCell>
              <TableCell align="left">{e.userName}</TableCell>
              <TableCell align="left">{e.bookName}</TableCell>
              <TableCell align="left">{e.entryDate}</TableCell>
              <TableCell align="left">{e.dueDate}</TableCell>
              <TableCell align="left">{e.status}</TableCell>
              <TableCell align="left">{e.fineAmount}</TableCell>
              <TableCell align="left">
                <Button variant='contained' onClick={()=>navigate(`/editassign/${e.id}`)}>Edit</Button>&nbsp;&nbsp;
                <Button style={{backgroundColor:"red"}} variant='contained' onClick={()=>handleDelete(e.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
            <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Your Website 2022
                </div>
                <div>
                  <a href="#!">Privacy Policy</a>
                  &middot;
                  <a href="#!">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
          </div>
        </div>
      </div>  
    </>
  )
}

export default UsersLogs