import { reject } from "q"
import callapi from "../helper/api.helper"

export const myGenresongsService={getGenre}

function getGenre(){ return new Promise ((resolve,reject)=>

callapi("GET" ,"genre" ).then(data=>resolve(data)


)
.catch((err)=>reject(err)) )



}


