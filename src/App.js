import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* Toast-from-React */}
      <ToastContainer />
    </div>
  );
}

export default App;
