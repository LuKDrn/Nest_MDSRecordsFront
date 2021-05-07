import React, { FunctionComponent, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
type IArtistsProps = {

}

const Artists: FunctionComponent<IArtistsProps> = (props: IArtistsProps) => {

  const [artists, setArtists] = useState<any[]>([]);


  async function fetchArtists() {
    const callArtists = await fetch('http://localhost:3001/artists/');

    const artistsFromServer = await callArtists.json();
    setArtists(artistsFromServer);
  }

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div className="d-flex w-100 justify-content-center m-3">
      <table className="table table-responsive table-borderless">
        <thead className="thead-dark">
          <tr>
            <th>Artists</th>
          </tr>
        </thead>
        <tbody className="font-weight-bold">
          <tr>
            <td>Nom</td>
            <td>Groupe</td>
            <td>Albums</td>
          </tr>
        {
          artists.map((artist: any, index) => (
            <tr>
                <td>{artist.name}
                </td>
                <td>{artist.isBand}
                </td>
                <td>{artist.albums}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default Artists;
