// function Home(){
//     return(
//       <div class="topnav">
//       <a class="active" href="#">Home</a>
//       <a href="/login">Login</a>
//       <a href="/register">Register</a>
//       </div>
//     );

// }

// export default Home;

import React from 'react'
import home from './home.css';

export default function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg abc">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">News Feed Application</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse heading" id="navbarNav">
      <ul class="navbar-nav">
      
        <li class="nav-item lr">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="/register">Register</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
