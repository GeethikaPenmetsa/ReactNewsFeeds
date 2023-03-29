import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetArticles from './Components/News_Feed/GetNews/GetArticles';
import GetArticlesByName from './Components/News_Feed/GetNewsByName/GetArticlesByName';
import PostArticles from './Components/News_Feed/PostNews/PostArticles';
import Login from './Components/Authentication/LoginPage/Login';
import Register from './Components/Authentication/RegisterPage/Register';
import Home from './Components/Dashboard/HomeFile/Home';
import Navbar from './Components/Dashboard/NavbarFile/Navbar';
import Footer from './Components/Dashboard/FooterFile/Footer';
import MainPage from './Components/Dashboard/HomeFile/MainPage';
import Terms from './Components/Dashboard/TermsAndConditions/Terms';
import Privacy from './Components/Dashboard/PrivacyPolicy/Privacy';
import FirstPage from './Components/Dashboard/HomeFile/FirstPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/privacy' element={<Privacy />}></Route>
          <Route path='/terms' element={<Terms />}></Route>
          <Route path='/mainpage' element={<MainPage />}></Route>
          <Route path='/navbar' element={<Navbar />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path="/getall" element={<GetArticles />}></Route>
          <Route path="/getByName" element={<GetArticlesByName />}></Route>
          <Route path="/post" element={<PostArticles />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
