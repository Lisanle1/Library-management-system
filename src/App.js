import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./css/styles.css";
import Login from './Login';
import Dashboard from './components/Dashboard';
import AddBooks from './components/Books/AddBooks';
import ListBooks from './components/Books/ListBooks';
import EditBooks from './components/Books/EditBooks';
import AddUsers from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUsers from './components/Users/ViewUsers';
import AssignBooks from './components/AssignBooks/AssignBooks';
import UsersLogs from './components/AssignBooks/UsersLogs';
import EditAssign from './components/AssignBooks/EditAssign';
import StocksBooks from './components/Books/StocksBooks';
function App() {
  return (
    <div  id="wrapper">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addbooks' element={<AddBooks/>}/>
        <Route path='listbooks' element={<ListBooks/>}/>
        <Route path='editbooks/:id' element={<EditBooks/>}/>
        <Route path='/addusers' element={<AddUsers/>}/>
        <Route path='editusers/:id' element={<EditUser/>}/>
        <Route path='viewusers' element={<ViewUsers/>}/>    
        <Route path='/assignbooks' element={<AssignBooks/>}/>    
        <Route path='editassign/:id' element={<EditAssign/>}/>    
        <Route path='userlogs' element={<UsersLogs/>}/>    
        <Route path='/stocksbooks' element={<StocksBooks/>}/>    
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
