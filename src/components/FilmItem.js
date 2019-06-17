import React from 'react';


const FilmItem = (props) => {
  
  return(
    <ul>
      <li><a href={props.url}>{props.title}</a></li>
    </ul>
  )
  
}

export default FilmItem;
