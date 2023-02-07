import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';


function App() {
  const [music, setMusic] = useState([])

  async function fetchMusic(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setMusic(response.data);
  }
  useEffect(() => {
    fetchMusic();
  }, []);

  console.log('music list: ', music);

  return(
    <div>
      <h1>Music Library</h1>
      <MusicTable music={music}/>
    </div>
  );
}

export default App;
