import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './page/Header.js';
import Main from './page/Main.js';
import NewBlog from './page/Newblog.js';
import Blogs from './page/Blogs.js';
import Footer from './page/Footer.js';

library.add(fas)

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
