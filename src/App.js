import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration'; 
import Default from './components/Default/Default'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/home' element={ <Home></Home> }></Route>
        <Route path='/details/:detailsId' element={ <Details></Details> }></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/registration' element={ <Registration></Registration> }></Route>
        <Route path='*' element={ <Default></Default> }></Route>
      </Routes>
      <Footer></Footer>
      {/* Toast-from-React */}
      <ToastContainer />
    </div>
  );
}

export default App;
