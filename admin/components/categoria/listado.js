import { useEffect, useState } from "react";

export default function CategoriaListado({categorias, setCategorias}) {
    const cargarDatos = async () => {
        try {
            const baseUrl   = 'http://localhost:3000';
            const url       = baseUrl + '/categoria';
            const respuesta = await fetch(url);   

            if( !respuesta.ok ) throw new Error("Problemas al recuperar las categorías!");
            
            const cats = await respuesta.json();
            setCategorias( cats ); // LO MÁS IMPORTANTE !!!!
        } catch (error) {
            console.error( error );
        }
    };

    useEffect(()=> {
        cargarDatos();
    }, []);

    const eliminar = async (categoria) => {
        try {
            //const baseUrl   = Configuracion.getBaseUrl();
            const baseUrl   = 'http://localhost:3000';            
            const url       = baseUrl + '/categoria?id='+categoria.id;
            //const url       = baseUrl + '/categoria/'+categoria.id;

            const respuesta = await fetch(url, {
                method: 'DELETE'
            });
            if( !respuesta.ok ) throw new Error("No se pudo borrar la categoría!!!");
            const resultado = await respuesta.json();
            console.log("Categoría borrada de manera exitosa");

            // actualizar el listado 
            cargarDatos();
        } catch( error ) {
            console.error({error: error.message});
        }
    };

    return (
        <>
            <br/>
            <h2>Mis recetas favoritas</h2>
            <br/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Receta</th>
                        <th>Tipo</th>
                        <th>Nota</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria) => (
                        <tr key={categoria.id}>
                            <td>{categoria.receta}</td>
                            <td>{categoria.tipo}</td>
                            <td>{categoria.nota}</td>
                            <td>{categoria.descripcion}</td>
                            <td>
                            <button className="eliminar" onClick={() => eliminar(categoria)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

