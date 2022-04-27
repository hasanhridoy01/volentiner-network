import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Home></Home>
      <Footer></Footer>
      {/* Toast-from-React */}
      <ToastContainer />
    </div>
  );
}

export default App;
