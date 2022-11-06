import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
function EditUser() {
  let navigate = useNavigate();
  let params = useParams();
  let [formData, setFormData] = useState({
    userName: "",
    age: "",
    gender: "",
    mobile: "",
    address: "",
  });
  console.log(formData);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${API_URL}/users/${params.id}`);
      setFormData(res.data);
    }
    getData();
  }, [params.id]);

  const validateForm = (data) => {
    const errors = {};
    if (data.userName === "") errors.userName = "Name is Required";
    if (data.age === "") errors.age = "Age is Required";
    if (data.gender === "") errors.gender = "Gender is Required";
    if (data.mobile === "") errors.mobile = "Mobile Number is Required";
    if (data.address === "") errors.address = "Address is Required";
    return errors;
  };

  let handleSubmit = async (formData) => {
    const res=await axios.put(`${API_URL}/users/${params.id}`, formData);
    if(res.status===200)
    navigate("/viewusers")
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
              <h2>Edit Users</h2>
              <Formik
                initialValues={formData}
                enableReinitialize
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
                  isSubmitting
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
                    />
                    <br />
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
                    />
                    <br />
                    <span style={{ color: "red" }}>
                      {touched.age && errors.age}
                    </span>
                    <br />
                    <FormControl fullWidth>
                      <InputLabel id="gender">Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="gender"
                        value={values.gender}
                        name="gender"
                        label="Gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                    <br />
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
                    />
                    <br />
                    <span style={{ color: "red" }}>
                      {touched.address && errors.address}
                    </span>
                    <br />
                    <Button style={{marginLeft:"1.5em"}}
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
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

export default EditUser;
