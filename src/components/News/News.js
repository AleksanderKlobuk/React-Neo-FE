/*import React, { useState } from 'react'
import axios from 'axios'
import '../../Styles/News.css'

function News() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9d5e24a8e1584c4e896beb1030ac6a88")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    fetchNews(),
    <>

      <div className="header">
        <h1>Your Daily Technology News updates</h1>
      </div>
      

      <div className="news-container">
        <div className="row">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }} onClick={()=> window.open(value.url)}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default News;*/