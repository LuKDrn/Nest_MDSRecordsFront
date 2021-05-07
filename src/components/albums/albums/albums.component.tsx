import React, { FunctionComponent, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
type IAlbumsProps = {

}

const Albums: FunctionComponent<IAlbumsProps> = (props: IAlbumsProps) => {

  const [albums, setAlbums] = useState<any[]>([]);


  async function fetchAlbums() {
    const callAlbums = await fetch('http://localhost:3001/albums/');

    const albumsFromServer = await callAlbums.json();
    setAlbums(albumsFromServer);
  }


  useEffect(() => {
    fetchAlbums();
  }, []);
  
  return (
    <div className="d-flex justify-content-center m-3 w-100">
      <table className="table table-responsive table-striped table-borderless">
        <thead className="thead-dark">
          <tr>
            <th>Albums</th>
          </tr>
        </thead>
        <tbody className="font-weight-bold">
          <tr>
            <td>Titre</td>
            <td>Année</td>
            <td>Cover</td>
          </tr>
        {
          albums.map((album: any, index) => (
            <tr>
                <td>{album.title}</td>
                <td>{album.year}</td>
                <td><img src={album.cover}></img></td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default Albums;
