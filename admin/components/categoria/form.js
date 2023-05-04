import { useState } from "react";

export default function CategoriaForm({categorias, setCategorias}) {

    const [receta, setReceta]           = useState('');
    const [tipo, setTipo]               = useState('');
    const [nota, setNota]               = useState('');
    const [descripcion, setDescripcion] = useState('');

    const procesarFormulario = async (eventoSubmit) => {
        try {
            eventoSubmit.preventDefault();
            const categoria = {
                receta,
                tipo,
                nota,
                descripcion
            };

            const baseUrl   = 'http://localhost:3000';
            const url       = baseUrl + '/categoria';

            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( categoria )
            });

            if( !respuesta.ok ) throw new Error("No se pudo guardar la categoría...");

            const categoriaGuardada = await respuesta.json();
            console.dir( categoriaGuardada );
            alert("Categoría guardada exitosamente");
    
        } catch (error) {
            console.error( error );
        }
    };


    return (
    //JSX    
        <> 
            <h1 className="titulo">Probaste una nueva receta?</h1>
            <h3 className="titulo">Agrégala a tu lista de recetas, dale un review para que sepas cuales repetir!</h3>
            <form action="form" method="post" onSubmit={procesarFormulario}>
                <input type="text" id="Receta" value={receta} onChange={(e) => setReceta(e.target.value)}></input>
                <label htmlFor="receta">Receta</label>

                <input type="text" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}></input>
                <label htmlFor="tipo">Cocktail o mocktail</label>

                <input type="number" min={"0"} max={"7"} id="nota" value={nota} onChange={(e) => setNota(e.target.value)}></input>
                <label htmlFor="nombre">Nota 0-7</label>
                
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                <label htmlFor="descripcion">Review</label>
                
                <button type="submit">Agregar</button>
            </form>

            Receta: {receta} | Tipo: {tipo} | Nota: {nota} |Descripción: {descripcion}
        </>

    );
}