import Footer from '../FooterFile/Footer';
import Navbar from '../NavbarFile/Navbar';

function MainPage(){
    return(
      <div class="topnav">
        <Navbar/>
        <h1 id='home'>Welcome to News Feed Application</h1>
        <Footer/>
      </div>
    );

}

export default MainPage;