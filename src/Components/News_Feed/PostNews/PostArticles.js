import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Dashboard/NavbarFile/Navbar';

function PostArticles() {
  const navigate=useNavigate();
  const [article , setArticle] = useState({
    source:"",
    author:"",
    title:"",
    description:"",
    publishedDate:""
  })
  // const [source, setSource] = useState('');
  // const [author, setAuthor] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [publishedDate, setPublishedDate] = useState('');

  const postArticles = async () => {
    let token = JSON.parse(localStorage.getItem("user"))
        console.log("here", token)
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    try {
      const response = await axios.post('https://newsfeedapplication.azurewebsites.net/api/News/PostArticle',article ,config);
      console.log(response.data);
      navigate("/getall")
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setArticle({
        ...article,
        [e.target.name]: e.target.value,
        publishedDate: moment(e.target.value).format("")
    })
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(article);
    postArticles();
  };

  return (
    <>
    <Navbar/>
    <div>
      <center>
      <h2>Post Articles</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            name='source'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name='author'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name='title'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name='description'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="publishedDate">PublishedDate:</label>
          <input
            type="datetime-local"
            id="publishedDate"
            // name='publishedDate'
            onChange={handleChange}
          />
        </div>
        <button type="submit">Post Article</button>
      </form></center>
    </div>
    </>
  );
}

export default PostArticles;
