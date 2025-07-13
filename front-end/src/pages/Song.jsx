import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const {id} = useParams();

    

  const {image, name, duration, artist, audio} = songsArray.filter(
      (currentSongsObj) => currentSongsObj._id === id )[0];

  const artistObj = artistArray.filter(
      (currentArtistObj) => currentArtistObj.name === artist)[0];

   const songsArrayFromArtist = songsArray.filter(
          (currentSongObj)=> currentSongObj.artist === artist); 

  const randomIdex = Math.floor(Math.random() * (songsArrayFromArtist.length -1));

  const randomIdex2 = Math.floor(Math.random() * (songsArrayFromArtist.length -1));


  const randomIdFromArtist = songsArrayFromArtist[randomIdex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIdex2]._id;

  return <div className="song">
    <div className="song__container">
      <div className="song__image-container">
      <img 
      src={image} 
      alt={`imagem da musica ${name}`} />
      </div>
    </div>

    <div className="song__bar">
      <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
        <img
          width={75}
          height={75}
         src={artistObj.image} 
         alt={`imagem da musica ${artist}`} />
      </Link>

      <Player duration={duration} 
      randomIdFromArtist={randomIdFromArtist} 
      randomId2FromArtist={randomId2FromArtist} 
      audio = {audio}/>

      <div>
        <p className="song__name">{name}</p>
        <p>{artist}</p>
      </div>
    </div>
  </div>;
};

export default Song;
