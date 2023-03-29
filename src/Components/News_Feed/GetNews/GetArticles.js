import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Dashboard/NavbarFile/Navbar';
//import { json } from 'react-router-dom';
import './GetArticle.css';

function GetArticles() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        // e.preventDefault()
        let token = JSON.parse(localStorage.getItem("user"))
        console.log("here", token)
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const result = await axios.get("https://newsfeedapplication.azurewebsites.net/api/News/GetArticles", config);
        setData(result.data)
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Navbar/>
            <table>
               
                <tbody>
                    {
                        data.map((item, index) => { return <Tr key={index} data={item} /> })
                    }
                </tbody>
            </table>
        </div>

    );
}
const Tr = ({ data }) => {
    return (
        <tr>
            {/* <td>{data.articleId}</td> */}
            <div className="card">
                <div className="card-body">
                    <h2 className="card__Title">{data.title}</h2>
                    <p className="card__description">{data.description}</p>
                    <p className="card__description"> Source :{data.source}</p>
                    <p className="card__description"> Author:{data.author}</p>
                    <p className="card__description">Published Date:{data.publishedDate}</p>
                </div>
            </div>
            
        </tr>
    );
}
export default GetArticles;

