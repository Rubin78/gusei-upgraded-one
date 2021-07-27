import { reject } from "q"
import callapi from "../helper/api.helper"

export const songService={getTopHits}

function getTopHits(){ return new Promise ((resolve,reject)=>

callapi("GET" ,"top_hits/0" ).then(data=>resolve(data)


)
.catch((err)=>reject(err)) )



}


