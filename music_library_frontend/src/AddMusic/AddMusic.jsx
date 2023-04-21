import React, { useState, useEffect } from 'react';

const AddMusic = ({music}) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                
            </div>
            
        </form>
     );
}
 
export default AddMusic;