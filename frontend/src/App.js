import Navbar from './page/Navbar.js';
import Main from './page/Main.js';
import NewBlog from './page/Newblog.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
