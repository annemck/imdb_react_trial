import React from 'react';
import FilmList from '../components/FilmList.js';
import CalendarLink from '../components/CalendarLink.js';
import AddFilmForm from '../components/AddFilmForm.js';


class FilmContainer extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      films: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part",
          url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
    this.addFilm = this.addFilm.bind(this);
  }
  
  addFilm(film){
    let id = Date.now();
    film.id = id;
    const updatedFilms = [...this.state.films, film];
    this.setState({films: updatedFilms});
  }
  
  render(){
    return(
      <div>
      <h3>Upcoming Film Releases for UK</h3>
      <hr/>
      <FilmList films={this.state.films}/>
      <hr/>
      <CalendarLink/>
      <AddFilmForm onFilmSubmit={this.addFilm}/>
      </div>
    )
  }
  
}

export default FilmContainer;
