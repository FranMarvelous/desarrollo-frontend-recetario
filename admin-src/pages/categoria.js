import CategoriaForm from "@/components/categoria/form";
import CategoriaListado from "@/components/categoria/listado";
import { images } from "@/next.config";
import { useState } from "react";



export default function PaginaCategoria(){
   const [categorias, setCategorias] = useState([]);
    return (
        <div className="categoria">

        <CategoriaForm/>
        
        <CategoriaListado categorias={categorias} setCategorias={setCategorias}/>
        </div>
        );
}