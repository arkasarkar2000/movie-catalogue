import React from 'react';
import "./MovieBox.css";
import Cards from "./Cards";


const MovieBox = (props) => {
    const boxes = props.movies.map(
        (item,index)=>{
          
            return <Cards key={index} image={item.poster_path} title={item.title} rating={item.vote_average} desc={item.overview} release={item.release_date} name={item.name} airdate={item.first_air_date}/>
        }
    )
  return (
    <div className='container'>
        {boxes}

    </div>
  )
}

export default MovieBox