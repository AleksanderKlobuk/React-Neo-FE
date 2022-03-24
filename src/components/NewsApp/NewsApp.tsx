import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "../NewsApp/NewsApp.css";


const { Meta } = Card;


function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="News">
          
      {news &&
        news.map((item:any, index) => {
          return (
            <Card className="newscard"
              key={index}
              hoverable
              style={{ width: "100%" }}
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              cover={<img alt="image" style={{ width: "70rem" }}  src={item.urlToImage} />}
            >
              <Meta title={item.title} description={item.content} />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button className="news-button" type="primary" style={{ marginTop: "10px" }}>
                  Read More
                </Button>
              </a>
            </Card>
          );
        })}
    </div>
  );
}

export default News;