import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmpListing from './components/EmpList';
import EmpEdit from './components/EmpEdit';
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/'element={<EmpListing/>}/>
            <Route path='/employee/create'element={<EmpCreate/>}/>
            <Route path='/employee/edit/:id'element={<EmpEdit/>}/>
            <Route path='/employee/detail/:id'element={<EmpDetail/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
