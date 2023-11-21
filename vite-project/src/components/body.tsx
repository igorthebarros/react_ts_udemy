import { Home } from './home';

export function Body(){
    return (
        <div>
            {/* <DisplayPlayer isPlaying={false}/>  */}
            {<Home/>}
        </div>
    )
}

interface SongProps{
    title: string;
    artist: string;
    releaseDate: Date; 
    //It is possible that, to use a Date type,
    // to display the value, is not the best approach
    // because it needs to call .toLocaleDateString()
  }

  function DisplaySong({title, artist, releaseDate}: SongProps){
    return(
      <div className="song">
        <h2>Música: {title}</h2>
        <h3>Artista: {artist}</h3>
        <h3>Lançamento: {releaseDate.toLocaleDateString()}</h3>
      </div>
    )
  }

  interface PlayerProps{
    isPlaying: boolean;
  }

  function DisplayPlayer({isPlaying}: PlayerProps){
    return(
        <div className="player">
            <h2>
              {
                !isPlaying ?  'Dê o play!' :
                  <DisplaySong
                  title="Piranha"
                  artist="Alipio AlgumaCoisa"
                  releaseDate={ new Date(2006, 6, 6) }/> 
              }
            </h2>
        </div>
    )
  }