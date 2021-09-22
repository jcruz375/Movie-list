import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../App';
import { api } from '../services/api';
import '../styles/sidebar.scss';
import { Button } from './Button';

interface SidebarProps {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
}

export function SideBar({ selectedGenreId, genres, handleClickButton }: SidebarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}