import Footer from '../FooterFile/Footer';
import Home from './Home';

function FirstPage(){
    return(
      <div class="topnav">
        <Home/>

        <marquee><h2>Please Login to use this Application</h2></marquee>
        <Footer/>
      </div>
    );

}

export default FirstPage;