import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const MusicTable = ( {music: musics} ) => {
    const rows = musics.map(music => {
        return (
        <tr>
        <td>{music.title}</td>
        <td>{music.album}</td>
        <td>{music.artist}</td>
        <td>{music.release_date}</td>
        <td>{music.genre}</td>
        </tr>
        );
    });

    return (
        <section id="music">
        <h1>Music Table</h1>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </section>
  );
};

export default MusicTable;
