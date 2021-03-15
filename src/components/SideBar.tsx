import React from 'react'
import '../styles/sidebar.scss';
import { Button } from '../components/Button';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface PropsSideBar {
  genres: GenreResponseProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
}

const SideBar: React.FC<PropsSideBar> = ({genres, handleClickButton, selectedGenreId}) => {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}

export default SideBar;

// export function SideBar() {

// }