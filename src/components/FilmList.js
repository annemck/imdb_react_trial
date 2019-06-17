import React from 'react';
import FilmItem from './FilmItem.js';


const FilmList = (props) => {

    const filmNodes = props.films.map((film) => {
      return(
        <FilmItem title={film.name} url={film.url} key={film.id}/>
      )
    })

    return(
      <div>
        {filmNodes}
      </div>
    )
    
}

export default FilmList;
