import { useEffect, useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { api } from './services/api';
import './styles/content.scss';
import './styles/global.scss';
import './styles/sidebar.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
};

export function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    console.log(selectedGenreId)
    setSelectedGenreId(id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        genres={genres}
        handleClickButton={handleClickButton}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}