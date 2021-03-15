import { fetchApi } from "../helpers/fetch";

export const consulta = async () => {

    const resp = await fetchApi('','');
    const body = await resp.json();

    const usuarios = body.map(user => {
        return{
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            telefono: user.telefono
        };
    });
    // console.log(usuarios);
    return usuarios;
    
}

export const deleter = async (id)=>{
    
    const resp = await fetchApi(id,'','DELETE');
    const body = await resp.json();

    return body;
}

export const createUser = async (data)=>{
    const resp = await fetchApi('',data,'POST');
    const body = await resp.json();

    return body;
}

export const getUser = async (id)=>{
    const resp = await fetchApi(id,'','GET');
    const body = await resp.json();

    return body;
}