import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select ,Button} from "@mui/material";
import axios from "axios";
import { API_URL } from '../API_URL'
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
function AssignBooks() {
  let navigate=useNavigate();
const validateForm=(formData)=>{  
const errors={};
if(formData.userName==="")errors.userName="User Name is Required"
if(formData.bookName==="")errors.bookName="Book Name is Required"
if(formData.entryDate==="")errors.entryDate="Entry-Date is Required"
if(formData.dueDate==="")errors.dueDate="Due-Date is Required"
if(formData.status==="")errors.status="Status is Required"
if(formData.fineAmount==="")errors.fineAmount="Fine-Amount is Required"
return errors;
}
let handleSubmit=async(formData,{resetForm})=>{
  await axios.post(`${API_URL}/assign`,formData);
  navigate('/userlogs')
}
  return (
    <>
      <div className="sb-nav-fixed">
        <NavBar />
        <div id="layoutSidenav">
          <SideBar />
          <div id="layoutSidenav_content">
            <div className="container-fluid px-4">
              <br />
              <h2>Assign Books</h2>
              <Formik
       initialValues=
       {{
                        userName:"",
                        bookName:"",
                        entryDate:"",
                        dueDate:"",
                        status:"",
                        fineAmount:""
                      }}
       validate={(formData)=>validateForm(formData)}
       onSubmit={handleSubmit}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         resetForm
       }) => (
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={(e)=>handleSubmit(e)}
              >
                <TextField
                  id="userName"
                  name="userName"
                  value={values.userName}
                  label="User Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                <span style={{color:"red"}}>{touched.userName && errors.userName}</span>
                <br />
                <TextField
                  id="bookName"
                  name="bookName"
                  value={values.bookName}
                  label="Book Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                <span style={{color:"red"}}>{touched.bookName && errors.bookName}</span>
                <br />
                <TextField
                  id="entryDate"
                  type="date"
                  name="entryDate"
                  value={values.entryDate}
                  InputLabelProps={{shrink:true,}}
                  label="Entry-Date"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                 <span style={{color:"red"}}>{touched.entryDate && errors.entryDate}</span>
                <br />
                <TextField
                  id="dueDate"
                  name="dueDate"
                  type='date'
                  value={values.dueDate}
                  InputLabelProps={{shrink:true,}}
                  label="Due-Date"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                 <span style={{color:"red"}}>{touched.dueDate && errors.dueDate}</span>
                <br />
               <FormControl fullWidth>
  <InputLabel id='status'>Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="status"
    value={values.status}
    label="Status"
    onChange={handleChange}
    onBlur={handleBlur}
  >
     <MenuItem value="Nill">Nill</MenuItem>
    <MenuItem value="returned">returned</MenuItem>
    <MenuItem value="not returned">not returned</MenuItem>
  </Select>
  </FormControl><br />
  <span style={{color:"red"}}>{touched.status && errors.status}</span>
  <br />
  <TextField
                  id="fineAmount"
                  name="fineAmount"
                  value={values.fineAmount}
                  label="Fine Amount"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                <span style={{color:"red"}}>{touched.fineAmount && errors.fineAmount}</span>
                <br />
  <Button style={{width:"15em"}} variant="contained" type='submit' disabled={isSubmitting}>Submit</Button>&nbsp;&nbsp;
  <Button style={{width:"14em"}} variant="contained"  onClick={resetForm}>Reset</Button>

              </Box>
              )}
              </Formik>
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
  );
}

export default AssignBooks;
