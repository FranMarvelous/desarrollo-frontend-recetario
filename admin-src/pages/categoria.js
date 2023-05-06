import CategoriaForm from "@/components/categoria/form";
import CategoriaListado from "@/components/categoria/listado";
import { useState } from "react";

export default function PaginaCategoria(){
   const [categorias, setCategorias] = useState([]);
    return (
        <>
        <CategoriaForm/>
        <br></br>
        <CategoriaListado categorias={categorias} setCategorias={setCategorias}/>
        </>
        );
}