{props.data &&
    props.data.map(
      (item) => (
        console.log(item),
        (
          <div className=" col-sm-12 songplaylist">
            <div className=" songplaylistitem">
              <div className="songbuttoncardsgenre">
                <div className="scx">

{/*                       <div>{JSON.stringify(item)}</div>
*/}                       <img
                    className="genreimagesong"
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: "50%",
                      borderWidth: 1,
                      borderColor: "#c4c4c4",
                    }}
                    srcSet={`http://portal.gusei.net/api/${item.genre_image}`}
                  /> 
                  {/*  <Media>
                    <div className="media">
                      <div className="media-player">
                        <Player
                          src={`http://portal.gusei.net/api/${item.song_details[0].post_song}`}
                        />
                      </div>
                      <div className="media-controls song-play">
                        <PlayPause>
                          <PlayArrowIcon fontSize={24} />
                        </PlayPause>
                        <MuteUnmute />
                      </div>
                    </div>
                  </Media> */}
                </div>

                <div className=" col-sm-6 col-xs-6 songdescriptionsn">
                  <div className=" col-sm-11 col-xs-10 songtext">
                    <div className="songtextinside">
                      <div>
                        <div className="texthes">
                          {item.genre_name}
                          {/*                                           <div>{item.genre_name}</div>
                           */}{" "}
                        </div>
                      </div>

                     {/*  <div className=" songparagrah">
                        {item.first_name} {item.last_name}
                      </div> */}
{/* 
                      <div className=" iconssongs">
                        <div className="col-1">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
                        </div>
                        <div className="">1.8k</div>{" "}
                        <div className="col-1">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
                        </div>
                        <div className="col-1 likes">{item.likes}</div>{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

        /*  <div key={item.ID}>
                    <div>{item.genre_name}</div>
                    <div>{item.is_active}</div>
                    <div>
                      <img src={item.genre_image} />
                    </div>
                    <div>{item.is_deleted}</div>
                    <div>{item.pincode}</div>
                    <div>{item.post_song}</div>
                    <div>{item.thumbnail_url}</div>

                    <div>{item.user_details}</div>
                    <div>{item.lyrics_language}</div>
                  </div> */
      )
    )}
  {/* <div className="container">
            <h2>Show Playlist</h2>
            <div>{JSON.stringify(data.data)}</div>
          </div> */}




=========================

