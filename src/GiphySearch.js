import React, { useState } from 'react';
import './App.css';
import GifBox from './GifBox';

const giphyApiCall = (searchTerm, setGiphyResult) => {
  const axios = require('axios');
  const apiKey = 'D5a1UTLCrIM8ui00T5YW85gA8reQdyap';  

  axios.defaults.baseURL = 'http://api.giphy.com';
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  
  axios.get('/v1/gifs/search', {
    params: {
      api_key: apiKey,
      q: searchTerm,
      limit: 100
    }
  })
  .then(function (response) {
    //Picking an index for a random gif between 1 and 100
    const randomIndex = Math.floor(Math.random() * 100);
    setGiphyResult(response.data.data[randomIndex].images.fixed_height.url);
  })
  .catch(function (error) {
    console.log(error);
  });
};

const GiphySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [giphyResult, setGiphyResult] = useState("");
	
	const submitSearch = (e) => {
    e.preventDefault();
    giphyApiCall(searchTerm, setGiphyResult);
  };

  return (
    <div className="App">
			<div className="box searchBox">
				<form onSubmit={submitSearch}>
    			<label>
      			Search:
        		<input
              className="searchInput"
              onChange={(e) => setSearchTerm(e.target.value)}
       			/>
					</label>
    			<input type="submit" value="Submit" />
  			</form>
			</div>
      {giphyResult &&
        <GifBox gif={giphyResult}/>
      }
      <marquee className="box title" direction="right">
        Random Gif Generator
      </marquee>
    </div>
  );
};

export default GiphySearch;
