// import React, {useState, createContext, Image} from 'react';

// const [error, setError] = useState<String>("")

// interface ProviderContextFavoritosProps {
// 	children: React.ReactNode
// }

// interface ContextFavoritosProps{
//     listaComics: listaComicsProps[]
//     handleAddComics: (item: listaComicsProps) => void
//     handleRemoveComics: (index: number) => void
// }

// export const FavoritosContext = createContext<ContextFavoritosProps>({
//     listaComics: [],
//     handleAddComics: () => {},
//     handleRemoveComics: () => {},

// });

// export const FavoritosProvider = ({children}: ProviderContextFavoritosProps) =>{
//   const [charactersFav, setCharactersFav] = useState<listaComicsProps[]>([]);

//   function handleAddComics(id:number, name: string, descricao: string){
// 	const comicsObject = [...charactersFav]
// 	const comics = comicsObject.find((character) => character.id === id);

//    if (!comics){
// 	comicsObject.push({
// 	  id: id,
//     name: name,
//     descricao: descricao,
// 	})
//    } else{
// 	  setError("Personagem já favoritado!")
//    }
//     setCharactersFav(comicsObject)
//    }

//    function handleRemoveComics(id: number) {
//     const comicsObject = [...charactersFav];
//     const arrayFiltered = comicsObject.filter((character) => character.id !== id);
//     setCharactersFav(arrayFiltered);
//   }

//   function clearFavorites(){
//     setCharactersFav([]);
//   }
  
// }

 