import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import AddMusic from './AddMusic/AddMusic';


function App() {
  const [music, setMusic] = useState([])

  async function fetchMusic(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setMusic(response.data);
  }
  
  
  async function addMusic(newMusic){
    const response = await axios.post('http://127.0.0.1:8000/api/music/', newMusic);
  }
  
  
  useEffect(() => {
    fetchMusic();
  }, []);

  
  return(
    <div>
      <h1>Music Library</h1>
      <MusicTable music={music}/>
      <AddMusic newMusic={music}/>
      ('music list: ', music);
    </div>
  );
}

export default App;
