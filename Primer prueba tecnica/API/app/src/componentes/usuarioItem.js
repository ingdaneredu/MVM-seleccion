import React from 'react';
import { deleter } from './Consulta';
import Registro from './Registro';


export const UsuarioItem = ({id,nombre,apellido,email,telefono})=>{

    const handleEdit = (e)=>{
        Registro(id);
        console.log(id);
    }

    const handleDelete = (e)=>{
        deleter(id).then(res=>console.log(res));
    }

    return(
            <tr>
                <th>{nombre}</th>
                <th>{apellido}</th>
                <th>{email}</th>
                <th>{telefono}</th>
                <th>
                    <div>
                        <button href="">Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </th>
            </tr>
    )
    
}