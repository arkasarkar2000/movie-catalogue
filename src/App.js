
import './App.css';

import MovieBox from "./components/MovieBox";
import Clock from './components/Clock';
import axios from 'axios';
import { useEffect, useState } from 'react';
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;
const APIURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEYY}&language=en-US&page=1`;
const TRENDINGAPI = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEYY}`;
const TVAPI = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEYY}`;
//const SEARCHANIME = "https://api.consumet.org/anime/9anime/";


function App() {

  const[movies,setMovies] = useState([]);
  const [search,setSearch] = useState("");

  const changeSearch = (event)=>{
    setSearch(event.target.value);


  }

  const fetchTrending = ()=>{
    axios.get(TRENDINGAPI).then
    ((response)=>{
      setMovies(response.data.results);
    })
  }

  const fetchTV = ()=>{
    axios.get(TVAPI).then
    ((response)=>{
      setMovies(response.data.results);
    })
  }

  const getAllMovies = ()=>{
    axios.get(APIURL).then(
      (response)=>{
        setMovies(response.data.results);

      }

    ).catch(
      (error)=>{
        console.log(error)
      }

    )

  }

  const getSearchedMovies = ()=>{
    axios.get(SEARCHAPI + search).then(
      (response)=>{
        setMovies(response.data.results);

      }
    ).catch(
      (error)=>{
        console.log(error)

      }
    )

  }

  /*const getSearchedAnime = ()=>{
    axios.get(SEARCHANIME + search).then(
      (response)=>{
        setMovies(response.data.results);

      }
    ).catch(
      (error)=>{
        console.log(error)

      }
    )
  }*/

  useEffect(()=>{
    let timeOut = setTimeout(()=>{
      if(search===""){
        getAllMovies();
  
      }else{
        getSearchedMovies();
        //getSearchedAnime();
      }
    },500);
    return ()=> clearTimeout(timeOut);
  

  },[search]
  )
  return (
    <div className="App">
      <div className='header'>
            <h2>ScreenScope</h2>
            <ul>
                <li><a href='#' onClick={getAllMovies}>Popular</a></li>
                <li><a href='#' onClick={fetchTrending}>Trending</a></li>
                <li><a href='#' onClick={fetchTV}>Tv Shows</a></li>
              </ul>
            <div className='navbar'>
               <input type='search' value={search} onChange={changeSearch}placeholder='Search Here...'></input>
            </div>
        </div>
      <MovieBox movies={movies}/>
      <Clock/>

    </div>
  );
}

export default App;
