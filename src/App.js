import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import ShowNews from './components/ShowNews';
import { Route, Routes } from 'react-router-dom';
import Description from './components/Description';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/description/:id" element={Description} />
        </Routes>
      </div>
    </>
  );
}

export default App;