import axios from "axios";

const BASE_URL = "http://portal.gusei.net/api/"
 export default function callapi(method,url="",data={},applyToken=true){
   return new  Promise((resolve,reject)=>
   { 
    axios({
        method: method,
        url: BASE_URL + url,
        data: data,
        headers: {

            email: "c7d04119-f82c-4038-aa9f-18868ad8debe",
            session: "vxsdk336x7rYWSO6YCyl",
          },
      }).then((response) => {
        resolve(response.data.data)

      })

      .catch((err) => {
        reject(err)
     })
    }
  )}

/* 
    axios
      .get("http://portal.gusei.net/api/top_hits/0", {
        headers: {

          email: "c7d04119-f82c-4038-aa9f-18868ad8debe",
          session: "vxsdk336x7rYWSO6YCyl",
        },


      }) */