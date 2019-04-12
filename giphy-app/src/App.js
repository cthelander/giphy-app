import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [giphyResult, setGiphyResult] = useState("");
	
  const callGiphy = (searchTerm) => {
    const axios = require('axios');
    const apiKey = 'D5a1UTLCrIM8ui00T5YW85gA8reQdyap';

    axios.defaults.baseURL = 'http://api.giphy.com';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    
    console.log(searchTerm);

    // Make a request for a user with a given ID
    axios.get('/v1/gifs/search', {
      params: {
        api_key: apiKey,
        q: searchTerm,
        limit: 1
      }
    })
    .then(function (response) {
      console.log(response);
      setGiphyResult(response.data.data[0].url);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

	const submitSearch = (e) => {
    e.preventDefault();
    callGiphy(searchTerm);
  };

  return (
    <div className="App">
			<div className="box a">
				<form onSubmit={submitSearch}>
    			<label>
      			Search:
        		<input onChange={(e) => setSearchTerm(e.target.value)}
       			/>
					</label>
    			<input type="submit" value="Submit" />
  			</form>
			</div>
			<div className="box b">
        <img alt="wat" src={giphyResult} crossOrigin="use-credentials" />
      </div>
			<div className="box c">C</div>
			<div className="box d">D</div>
    </div>
  );
};

export default App;
