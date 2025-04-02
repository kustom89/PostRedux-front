
import { useLayoutEffect } from 'react';
import  './styles.scss'

const ListaComponent = () => {
  const posts = [
    { id: 1, nombre: "Primer Post", descripcion: "Descripción del primer post." },
    { id: 2, nombre: "Segundo Post", descripcion: "Descripción del segundo post." },
    { id: 3, nombre: "Tercer Post", descripcion: "Descripción del tercer post." }
  ];
  

  useLayoutEffect(()=>{

  },[])
  return (
    <>

      
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descipción</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.nombre}</td>
              <td>{post.descripcion}</td>
              <td>Eliminar</td>
            </tr>
          ))}
      
        </tbody>
      </table>
    </>
  )
}

export default ListaComponent

