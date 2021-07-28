import React, { useState, useEffect } from "react";
import {
    Col,
    Row,
    button,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
} from "reactstrap";
import Alltimefavourite from "./Alltimefavourite"
import Myfavourite from "./Myfavourite"
import Genre from "./Genre"

import buttoncard1 from "../assests/buttoncard1.png";
import { songService } from "../services";
import { myFavsongsService } from "../services";
import { myGenresongsService } from "../services";

function Songplaysection(props) {



    const [selectbutton, setSelectbutton] = useState("home")
    const [data, setData] = useState([]);


    useEffect(() => (

        Tophithandler()

    ), [])


    const Tophithandler = (e) => {
        /*     e.preventDefault();
         */
        /* axios
          .get("http://portal.gusei.net/api/top_hits/0", {
            headers: {
    
              email: "c7d04119-f82c-4038-aa9f-18868ad8debe",
              session: "vxsdk336x7rYWSO6YCyl",
            },
    
    
          }).then((response) => {
            console.log(response.data.data);
            setData(response.data.data)
            setSelectbutton("Tophit")
    
          })
    
          .catch((res) => {
            console.log("ERR", res);
          }); */

        songService.getTopHits().then(data => {
            setData(data);
            setSelectbutton("Tophit")

        }).catch((res) => {
            console.log("ERR", res);
        });
    };


    const Myfavourhandler = (e) => {
        /* e.preventDefault();
    
        axios
          .get("http://portal.gusei.net/api/get-favourite-list/0", {
            headers: {
    
    
              email: "c7d04119-f82c-4038-aa9f-18868ad8debe",
              session: "vxsdk336x7rYWSO6YCyl",
    
    
            },
          })
          .then((response) => {
            console.log(response.data.data);
            setData(response.data.data);
            setSelectbutton("Myfavour")
    
    
          })
          .catch((res) => {
            console.log("ERR", res);
          }); */


          songService.getMyFavor().then(data => {
              console.log("myfav" + data )
            setData(data);
            setSelectbutton("Myfavour")

        }).catch((res) => {
            console.log("ERR", res);
        });
    };


    const Genrehandler = (e) => {
        /*  e.preventDefault();
     
         axios
           .get("http://portal.gusei.net/api/genre", {
             headers: {
     
     
               email: "c7d04119-f82c-4038-aa9f-18868ad8debe",
               session: "vxsdk336x7rYWSO6YCyl",
     
     
             },
           })
           .then((response) => {
             console.log(response.data.data);
             setData(response.data.data)
             setSelectbutton("Genre")
     
           })
           .catch((res) => {
             console.log("ERR", res);
           }); */


           songService.getGenre().then(data => {
            setData(data);
            setSelectbutton("Genre")

        }).catch((res) => {
            console.log("ERR", res);
        });

    };


    return (

        <div className="section5">
            <div className="emptysection5"></div>

            <div className="section5inside">
                <Row>
                    <div className="col-md-6">
                        <div className="empty"></div>

                        <div>
                            <div className="maincontent">
                                <div className="maincontentinside1">
                                    <img className="imh1" src={buttoncard1} />

                                </div>
                                <button onClick={Tophithandler} className="maincontentinside">
                                    <img
                                        className="imh1"
                                        src=" data:image/png;base64,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"
                                    />
                                </button>
                            </div>

                            <div className="maincontent">
                                <button onClick={Myfavourhandler} className="maincontentinside">
                                    <img
                                        className="imh1"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSU  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"
                                    />
                                </button>
                                <button onClick={Genrehandler} className="maincontentinside">
                                    {" "}
                                    <img
                                        className="imh1"
                                        src="data:image/png;base64,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"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="empty"></div>

                        <div className=" col-sm-12 songplaylist">




                            {selectbutton == "Tophit" && <Alltimefavourite data={data} />}
                            {selectbutton == "Myfavour" && <Myfavourite data={data} />}
                            {selectbutton == "Genre" && <Genre data={data} />}






                            {/*               
*/}{/*                 
*/}






                        </div>
                        <div className="songdbutton">
                            <button className="songbuttonitem">see all playlists</button>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
}

export default Songplaysection;