import axios, { AxiosResponse } from "axios";

const apiMarvel = axios.create({
  baseURL: "https://plain-paws-lick.loca.lt",
});

export interface PersonagemProps {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
}

export async function getPersonagens() {
  const url:string = "personagens";
  try {
    const response = await apiMarvel.get(url);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPersonagem(id: number) {
  const url:string = "personagens";
  try {
    const response = await apiMarvel.get(`${url}/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
