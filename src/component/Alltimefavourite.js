/* import React from "react";
import { Media, Player, controls } from "react-media-player";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
function Alltimefavourite(props) {
  const { PlayPause, MuteUnmute } = controls;
    const inputRef = React.useRef();

return (
  
  <>
    {props.data &&
      props.data.map((item) => (
        <>
          {item.post_song && item.post_song.map(song_item=>{
            return(
              <audio  src={"http://portal.gusei.net/api/" + song_item}  controls></audio>
            )
          })}
         <br />
        </>
      ))}
  </>
);
          }

export default Alltimefavourite;
 */


import React from 'react';
import Newplayer from "../component/Newplayer";

function Alltimefavourite(props) {
  return (
    <div>
      <>
        {props.data &&
          props.data.map((item) => (
            <Newplayer
              thumbnail_url={item.thumbnail_url}
              album={item.album}
              name={item.first_name + " " + item.last_name} likes={item.likes}
              songs={item.post_song}
              /*               src={"http://portal.gusei.net/api/" + song_item} */
            />
          ))}
      </>
    </div>
  );
}

export default Alltimefavourite;