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
function AddBooks() {
  let navigate=useNavigate();
const validateForm=(formData)=>{  
const errors={};
if(formData.bookName==="")errors.bookName="Book Name is Required"
if(formData.bookId==="")errors.bookId="Book Id is Required"
if(formData.author==="")errors.author="Author is Required"
if(formData.published==="")errors.published="Published is Required"
if(formData.stock==="")errors.stock="Stock is Required"
return errors;
}
let handleSubmit=async(formData,{resetForm})=>{
  await axios.post(`${API_URL}/books`,formData);
  navigate('/listbooks')
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
              <h2>Add Books</h2>
              <Formik
       initialValues=
       {{
                        bookName:"",
                        bookId:"",
                        author:"",
                        published:"",
                        stock:""
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
                  id="bookName"
                  name="bookName"
                  value={values.bookName}
                  label="Book Name"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                <span style={{color:"red"}}>{touched.bookName && errors.bookName}</span>
                <br />
                <TextField
                  id="bookId"
                  name="bookId"
                  value={values.bookId}
                  label="Book Id"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                <span style={{color:"red"}}>{touched.bookId && errors.bookId}</span>
                <br />
                <TextField
                  id="author"
                  name="author"
                  value={values.author}
                  label="Author"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                 <span style={{color:"red"}}>{touched.author && errors.author}</span>
                <br />
                <TextField
                  id="published"
                  name="published"
                  value={values.published}
                  label="Published"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                /><br />
                 <span style={{color:"red"}}>{touched.published && errors.published}</span>
                <br />
               <FormControl fullWidth>
  <InputLabel id='stock'>Stock</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="stock"
    value={values.stock}
    label="Stock"
    onChange={handleChange}
    onBlur={handleBlur}
  >
    <MenuItem value="In Stock">In Stock</MenuItem>
    <MenuItem value="Out Of Stock">Out Of Stock</MenuItem>
  </Select>
  </FormControl><br />
  <span style={{color:"red"}}>{touched.stock && errors.stock}</span>
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

export default AddBooks;
