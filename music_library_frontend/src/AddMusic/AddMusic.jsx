import React, { useState, useEffect } from 'react';

const AddMusic = ({musics}) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");

    function handleSubmit(event) {
    event.preventDefault();
    let newMusic = {
        title: title,
        artist: artist,
        album: album,
        release_date: release_date,
        genre: genre
    };
    musics.newMusic(newMusic);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Add New Music</h2>
                <label>Title</label>
                <input
                type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />
                <label>Artist</label>
                <input
                type='text'
                value={artist}
                onChange={(event) => setArtist(event.target.value)}
                />
                <label>Album</label>
                <input
                type='text'
                value={album}
                onChange={(event) => setAlbum(event.target.value)}/>
                <label>Realease Date</label>
                <input
                type='text'
                value={release_date}
                onChange={(event) => setReleaseDate(event.target.value)}/>
                <label>Genre</label>
                <input
                type='text'
                value={genre}
                onChange={(event) => setGenre(event.target.value)}/>
            </div>
            
        </form>
     );
}
 
export default AddMusic;