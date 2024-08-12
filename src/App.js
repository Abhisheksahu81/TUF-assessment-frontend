import './App.css';
import Banner from './component/Banner';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Dashboard from './component/Dashboard';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
