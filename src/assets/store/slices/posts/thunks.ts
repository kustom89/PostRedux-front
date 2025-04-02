import { AppDispatch } from "../../store";
import { setPosts, starLoadingPosts } from "./postSlice";
import { PostApi } from "../../../api/postApi";

// Definir la estructura de los posts
interface Post {
  id: number;
  nombre: string;
  descripcion: string;
}

// Thunk para obtener los posts
export const getPost = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(starLoadingPosts()); // Inicia la carga

    try {
      const response = await PostApi.get<Post[]>(''); // Asegurar que la respuesta es un array de posts
      console.log("Datos recibidos:", response.data);

      dispatch(setPosts(response.data)); // Enviar los datos al estado global

    } catch (error) {
      console.error("Error al obtener los posts:", error);
    }
  };
};
