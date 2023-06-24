import axios from "axios";

import md5 from "md5";

const baseUrl: string = "http://gateway.marvel.com/v1/public/";

const publicKey: string = "13b01a0ea5a227eb0a97669df301fb40";
const privateKey: string = "23abac0e385ec44e34fda261bc0833c7ad813e1b";

const time: string = String(new Date());

const hash: string = md5(time + privateKey + publicKey);

export function getPersonagens(posicao: number) {
  axios
    .get(
      `${baseUrl}characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=100&offset=${posicao}`
    )
    .then((response) => console.log(time, response.data.data.name))
    .catch((err) => console.log(err));
}

export function getComics(posicao: number){
  
}

