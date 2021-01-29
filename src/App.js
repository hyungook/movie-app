import React from 'react';
import axios from 'axios';
import Movie from './movie';

class App extends React.Component {
  
state = {
  isLoading: true,
  moveies:[]
};

getMovies = async () => {
  const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
  // console.log(movies.data.data.movies);
  console.log(movies);

// this.setState({movies:movies})
this.setState({movies, isLoading: false})

}

componentDidMount() {

  this.getMovies();
}

  render() {
    const {isLoading, movies} = this.state;
    return <div>
        {isLoading ? "Loding..." : movies.map(movie => {
          console.log(movie)
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image} />)
        })}
      </div>
  }
}

export default App;