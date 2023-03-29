import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button ,Card} from 'react-bootstrap';
import Navbar from '../../Dashboard/NavbarFile/Navbar'


function GetArticleByName() {
    const [articles, setArticles] = useState([]);
    const [source, setSource] = useState('');


    const fetchData = async (e) => {
        e.preventDefault()

        let token = JSON.parse(localStorage.getItem("user"))
        console.log("here", token)
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const result = await axios.get(`https://newsfeedapplication.azurewebsites.net/api/News/GetArticleByName?source=${source}`, config);
        setArticles(result.data);
    };
    const handleInputChange = (e) => {
        setSource(e.target.value)
    };

    return (
        <>
        <Navbar/>
        <center>
            <Form onSubmit={fetchData}>
                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                    <Form.Label>Article</Form.Label>
                    <Form.Control type="text" placeholder="Search Article" onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            </center>
            {articles?.length > 0 && (
                <div className=''>
                    {articles.map((article) => (

                    <Card className="bg-dark text-white w-50" key={article.source}>
                        <Card.Body>
                            <Card.Subtitle class="text-warning">{article.title}</Card.Subtitle>
                            <Card.Text className='text-info'>{article.description}</Card.Text>
                            <Card.Subtitle class="text-success">Source :{article.source}</Card.Subtitle>
                            <Card.Title class="text-primary"> Author Name:{article.author}</Card.Title>
                            <Card.Text className='text-danger'>PublishedDate :{article.publishedDate}</Card.Text>
                        </Card.Body>
                    </Card>))}

                </div>

            )}

            {/* {articles?.length > 0 && (
                <ul>
                    {articles.map((article) => (
                        <li key={article.source}>
                            <p>{article.source}</p>
                            <p>{article.author}</p>
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <p>{article.publisheddate}</p>
                        </li>
                    ))}
                </ul>
            )} */}
        </>

    );
}

export default GetArticleByName;