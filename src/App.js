import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from 'axios';
import NewsCard from './Components/NewsCard'


function App() {

  const [newslist, setNewslist] = useState([]);
  
  const getNews =e=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=7ad66c9839824fc9be264ced7ac32214")
    .then(res=>{
      console.log(res);
      setNewslist(res.data.articles);
    })
    .catch(err=>console.log(err));
  }

  useEffect(()=>{
    getNews();
  },[]);

  // useEffect(()->{
  //   setNewslist()
  // })
    
  return (
    <div className="App">
      <div className="container">
        <h1>Faureddit</h1>
            {newslist.map((news, i)=>
              <NewsCard key={i} data={news}/>
            )}
      </div>

      </div>
  );
}

export default App;
