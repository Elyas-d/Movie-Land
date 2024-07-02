import {useEffect} from "react";
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=60176cf';

const App = () => {
    const movie1 = {
        "Title": "Spider-Man Title Reveal",
        "Year": "2021",
        "imdbID": "tt14122734",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
      }
    
    const searchMovies = async(title) => {
        const response = await fetch (`${API_URL}&s={title}`)
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(()=>{   
        searchMovies('spiderman');
    })
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies" value="superman" onChange={()=>{}}/>
                <img src={SearchIcon} alt="search" onChange={()=>{}}/>
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'http://via.placeholder.com/400'} alt="Spider-Man Title Reveal"/>
                    </div>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
