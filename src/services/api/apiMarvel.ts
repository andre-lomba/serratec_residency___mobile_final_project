import axios from "axios";
import { ImageSourcePropType } from "react-native";

const apiMarvel = axios.create({
  baseURL: "https://red-cycles-bet.loca.lt/",
});

export interface PersonagemProps {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
}

export interface UserProps {
  id: number;
  nome: string;
  email: string;
  favoritos: number[];
}

export interface UserResponse {
  accessToken: string;
  user: UserProps;
}

export async function getPersonagens(): Promise<PersonagemProps[]> {
  const url: string = "personagens";
  try {
    const response = await apiMarvel.get(url);
    const personagens: PersonagemProps[] = response.data;
    return personagens;
  } catch (error) {
    throw error;
  }
}

export async function getPersonagem(id: number): Promise<PersonagemProps> {
  const url: string = "personagens";
  try {
    const response = await apiMarvel.get(`${url}/${id}`);
    const personagem: PersonagemProps = response.data;
    return personagem;
  } catch (error) {
    throw error;
  }
}

export async function getUser(id: number): Promise<UserProps> {
  const url: string = "users";
  try {
    const response = await apiMarvel.get(`${url}/${id}`);
    const user: UserProps = response.data;
    return user;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(
  nome: string,
  email: string,
  senha: string
): Promise<UserResponse> {
  const url: string = "register";
  try {
    const response = await apiMarvel.post(url, {
      nome: nome,
      email: email,
      password: senha,
      favoritos: [],
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function login(
  email: string,
  senha: string
): Promise<UserResponse> {
  const url: string = "login";
  try {
    const response = await apiMarvel.post(url, {
      email: email,
      password: senha,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateAddFav(
  userId: number,
  personagemId: number
): Promise<UserProps> {
  const url: string = "users";
  try {
    const responseUser = await apiMarvel.get(`${url}/${userId}`);
    const user: UserProps = responseUser.data;
    const response = await apiMarvel.patch(`${url}/${user.id}`, {
      favoritos: [...user.favoritos, personagemId],
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateRemoveFav(
  userId: number,
  personagemId: number
): Promise<UserProps> {
  const url: string = "users";
  try {
    const responseUser = await apiMarvel.get(`${url}/${userId}`);
    const user: UserProps = responseUser.data;

    const listaFav: number[] = user.favoritos.filter(
      (item) => item !== personagemId
    );
    const response = await apiMarvel.patch(`${url}/${user.id}`, {
      favoritos: listaFav,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function cleanFav(userId: number): Promise<UserProps> {
  const url: string = "users";
  try {
    const response = await apiMarvel.patch(`${url}/${userId}`, {
      favoritos: [],
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
