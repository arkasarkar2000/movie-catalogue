import React from 'react'
import "./Cards.css";

const Cards = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 // const IMGANIME = "https://static.bunnycdn.ru/i/cache/images/2018/04/"//
  return (
        <div className='movie'>
            <img className='poster' src={IMGPATH + props.image} alt='poster'></img>
         
            <div className='movie-details'>
              <div className='box'>
                <h4 className='title'>{props.title}</h4>
                <h4 className='title'>{props.name}</h4>

                <span className='rating'>{props.rating} &#9733;</span>
                

              </div>
              <div className='overview'>
                <h4 className='date'>{props.release}</h4>
                <h4 className='date'>{props.airdate}</h4>
                <p>{props.desc}</p>
              </div>
            </div>
        </div>
  )
}

export default Cards