import React from 'react'
import { useNavigate } from 'react-router-dom';
import  './navbar.css';

export default function Navbar() {
    const navigate = useNavigate()
    const name = JSON.parse(localStorage.getItem('userName'));
    const logOut =()=>{
        localStorage.clear()
        navigate("/")
    }

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

                            <li class="nav-item nv">
                                <a class="nav-link" href="/getall">GetArticles</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="/getByName">GetArticleByName</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="/post">PostArticle</a>
                            </li>
                            <li class="nav-item st">
                                <p>{name}</p>
                            </li>
                            
                            <li class="nav-item fa">
                                <a class="nav-link" onClick={logOut}>Logout</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <h1 id='navbar'>          </h1>
        </div>

    )
}
