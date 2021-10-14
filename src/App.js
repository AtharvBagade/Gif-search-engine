import React from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { SearchBar } from './Components/SearchBar';

function App() {


  const [reddit ,setRedditState] =useState({

    currentSubreddit:"",
    sort:"new",
    files:[],
    after:"null",
    before:"null",
    page:1
  });




  return (
    <div className="App">
    <Header />
    <SearchBar/>
    </div>
  );
}

export default App;
