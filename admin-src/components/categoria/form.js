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
    
            //actualiza la variable de estado
            setCategorias(
                [...categorias, categoriaGuardada] 
            );
            
        } catch (error) {
            console.error( error );
        }
    };


    return (
    //JSX    

        <div className="signupFrm"> 
            <h1 className="title">Probaste una nueva receta?</h1>
            <h3 className="titulo">Agrégala a tu lista de recetas, dale un review para que sepas cuales repetir!</h3>
                <br></br>
            <form action="form" method="post" onSubmit={procesarFormulario} className="form">
                <label htmlFor="receta" className="label">Receta</label>               
                <br></br>
                <input type="text" id="Receta" className="input" value={receta} onChange={(e) => setReceta(e.target.value)}></input>
                <br></br>
                <label htmlFor="tipo" className="label">Cocktail o mocktail</label>
                <br></br>
                <input type="text" id="tipo" className="input" value={tipo} onChange={(e) => setTipo(e.target.value)}></input>
                <br></br>
                <label htmlFor="nombre" className="label">Nota 0-7</label>
                <br></br>
                <input type="number" className="input" min={"0"} max={"7"} id="nota" value={nota} onChange={(e) => setNota(e.target.value)}></input>
                <br></br>
                <label htmlFor="descripcion" className="label">Review</label>
                <br></br>
                <textarea className="textarea" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                
                <br></br>
                <button type="submit" className="submitBtn">Agregar</button>
            </form> 
        </div>

    );
}