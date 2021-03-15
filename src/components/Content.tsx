import React from 'react';
import { MovieCard } from './MovieCard';
import Header from './Header'
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface PropsContainer {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}


import '../styles/content.scss';
const Content: React.FC<PropsContainer> = ({selectedGenre, movies}) => {

  return (
    <div className="container">
        <Header title={selectedGenre.title} />

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}

export default Content;

