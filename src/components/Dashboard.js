import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import axios from "axios";
import { API_URL } from "./API_URL";
function Dashboard() {
  let navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [stock, setSock] = useState(0);
  const [stocks, setStocks] = useState(0);
  useEffect(() => {
    try {
      async function getData() {
        const res = await axios.get(`${API_URL}/books`);
        setBooks(res.data);
        const res1 = await axios.get(`${API_URL}/users`);
        setUsers(res1.data);
        let inStock = res.data
          .filter((data) => data.stock === "In Stock")
          .reduce((prev, cur) => {
            return cur ? prev + 1 : prev;
          }, 0);
        setSock(inStock);
        let outOfStock = res.data
          .filter((data) => data.stock === "Out Of Stock")
          .reduce((prev, cur) => {
            return cur ? prev + 1 : prev;
          }, 0);
        setStocks(outOfStock);
      }
      getData();
    } catch(err) {
      console.err(err);
    }
  }, []);
  let booksCount = books.reduce((prev, cur) => {
    return cur ? prev + 1 : prev;
  }, 0);
  let usersCount = users.reduce((prev, cur) => {
    return cur ? prev + 1 : prev;
  }, 0);
  let handleStocks = () => {
    let inStock = [...books];
    const stock = inStock.filter((data) => data.stock === "Out Of Stock");

    navigate("/stocksbooks", { state: [...stock] });
  };
  let handleOutOfStocks = () => {
    let inStock = [...books];
    const stock = inStock.filter((data) => data.stock === "In Stock");

    navigate("/stocksbooks", { state: [...stock] });
  };
  return (
    <div className="sb-nav-fixed">
      <NavBar />
      <div id="layoutSidenav">
        <SideBar />
        <div id="layoutSidenav_content">
          <div className="container-fluid px-4">
            <h1 className="mt-4">Dashboard</h1>
            <br />
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                  <div
                    style={{ fontWeight: 700, fontSize: "20px" }}
                    className="card-body"
                  >
                    Total Books : {booksCount}
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link
                      to="/listbooks"
                      className="small text-white stretched-link"
                    >
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-warning text-white mb-4">
                  <div
                    style={{ fontWeight: 700, fontSize: "20px" }}
                    className="card-body"
                  >
                    Total Users : {usersCount}
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link
                      to="/viewusers"
                      className="small text-white stretched-link"
                    >
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                  <div
                    style={{ fontWeight: 700, fontSize: "20px" }}
                    className="card-body"
                  >
                    In Stocks : {stock}
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      className="small text-white stretched-link"
                      onClick={handleOutOfStocks}
                    >
                      View Details
                    </span>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-danger text-white mb-4">
                  <div
                    style={{ fontWeight: 700, fontSize: "20px" }}
                    className="card-body"
                  >
                    Out Of Stocks : {stocks}
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      className="small text-white stretched-link"
                      onClick={handleStocks}
                    >
                      View Details
                    </span>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  );
}

export default Dashboard;
