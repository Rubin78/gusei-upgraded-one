import React, { useState, useEffect } from "react";

let newaudio = new Audio();

function MiniPlayer(props) {


  
  useEffect(() => {
    console.log("calling useeffect", props.isplaying);
    newaudio.pause();
    newaudio = new Audio(props.src);

    if (!props.isplaying) {
      newaudio.pause();
    } else {
      newaudio.play();
    }
  }, [props]);
  return (
    <div>
      
{/*       <audio src={props.src} controls />
 */}      <br />
    </div>
  );
}




export default MiniPlayer;