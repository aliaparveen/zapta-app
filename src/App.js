import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Main_Navbar from './Components/Main_Navbar';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className='App'>
      <Main_Navbar />
      <Navbar />
      <Table />
      <SideBar />
      
    </div>
  );
}

export default App;
