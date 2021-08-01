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
import MyFavNewplayer from "../component/MyFavNewplayer";

function Alltimefavourite(props) {
  return (
    <div>
      <>
        {props.data &&
          props.data.map((song_item) => (
            <MyFavNewplayer
              thumbnail_url={song_item.thumbnail_url}
              album={song_item.album}
              name={song_item.user_details[0].first_name + " " + song_item.user_details[0].last_name} likes={song_item.likes}

              songs={song_item.post_song}
            /*               src={"http://portal.gusei.net/api/" + song_item} */
            />
          ))}
      </>
    </div>
  );
}

export default Alltimefavourite;