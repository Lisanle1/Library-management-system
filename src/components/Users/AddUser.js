import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../API_URL";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
function AddUsers() {
  let navigate = useNavigate();
  const validateForm = (formData) => {
    const errors = {};
    if (formData.userName === "") errors.userName = "User Name is Required";
    if (formData.age === "") errors.age = "Age is Required";
    if (formData.gender === "") errors.gender = "Gender is Required";
    if (formData.mobile === "") errors.mobile = "Mobile is Required";
    if (formData.address === "") errors.address = "Address is Required";
    return errors;
  };
  let handleSubmit = async (formData, { resetForm }) => {
    await axios.post(`${API_URL}/users`, formData);
    navigate("/viewusers");
  };
  return (
    <>
      <div className="sb-nav-fixed">
        <NavBar />
        <div id="layoutSidenav">
          <SideBar />
          <div id="layoutSidenav_content">
            <div className="container-fluid px-4">
              <br />
              <h2>Add Users</h2>
              <Formik
                initialValues={{
                  userName: "",
                  age: "",
                  gender: "",
                  mobile: "",
                  address: "",
                }}
                validate={(formData) => validateForm(formData)}
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
                  resetForm,
                }) => (
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "55ch" },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={(e) => handleSubmit(e)}
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
                    <span style={{ color: "red" }}>
                      {touched.userName && errors.userName}
                    </span>
                    <br />
                    <TextField
                      id="age"
                      name="age"
                      value={values.age}
                      label="Age"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    <span style={{ color: "red" }}>
                      {touched.age && errors.age}
                    </span>
                    <br />
                    <FormControl fullWidth>
                      <InputLabel id="gender">Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.gender}
                        name="gender"
                        label="Gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl><br />
                    <span style={{ color: "red" }}>
                      {touched.gender && errors.gender}
                    </span>
                    <br />
                    <TextField
                      id="mobile"
                      name="mobile"
                      value={values.mobile}
                      label="Mobile"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <span style={{ color: "red" }}>
                      {touched.mobile && errors.mobile}
                    </span>
                    <br />
                    <TextField
                      id="address"
                      name="address"
                      value={values.address}
                      label="Address"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    <span style={{ color: "red" }}>
                      {touched.address && errors.address}
                    </span>
                    <br />
                    <Button style={{width:"15em",marginLeft:"1.5em"}} variant="contained" type='submit' disabled={isSubmitting}>Submit</Button>&nbsp;&nbsp;
  <Button style={{width:"15em"}} variant="contained"  onClick={resetForm}>Reset</Button>
                  </Box>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUsers;
