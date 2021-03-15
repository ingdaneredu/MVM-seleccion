import {Request, Response} from 'express';
import { Usuario } from '../interfaces/usuario';
import fs from 'fs';
import { JsonSourceFile } from 'typescript';
import {v4 as uuid} from 'uuid';

let json_users:string = fs.readFileSync('src/database.json','utf-8');;
let usuarios:Usuario[] = JSON.parse(json_users);


export function getUsuarios(req: Request,res: Response): Response{
    return res.send(usuarios);
}

export function getUsuario(req: Request,res: Response): Response{
    //let id:number = usuarios.indexOf((usuario: { id: string; }) => usuario.id == req.params.id);
    const usuario = usuarios.find(user => user.id == req.params.id);
    if(!usuario){
        return res.send({
            message: "Usuario no encontrado" 
        });
    }else{
        return res.send({
            user: usuario
        });
    }
    
}

export function createUsuario(req: Request,res: Response): Response{
    console.log("usuarios");
    
    
    const {nombre, apellido, email, telefono} = req.body;
    
    if(!nombre||!apellido||!email||!telefono)
    {
        return res.status(400).send('Datos incompletos...');
    }

    let newUser= {
        id : uuid(),
        nombre,
        apellido,
        email,
        telefono
    }
    usuarios.push(newUser);

    json_users = JSON.stringify(usuarios);
    fs.writeFileSync('src/database.json', json_users, 'UTF-8');

    return res.send({
        message: "Usuario creado",
        newUser    
    });
}

export function editUsuarios(req: Request,res: Response): Response{
    let usuar = usuarios.find(user => user.id == req.params.id);
    usuarios = usuarios.filter(user => user.id!=req.params.id);
    if(usuar){
        let editUser= {
            id : req.body.id,
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            email : req.body.email,
            telefono : req.body.telefono
        }
        usuarios.push(editUser);
        json_users = JSON.stringify(usuarios);
        fs.writeFileSync('src/database.json', json_users, 'UTF-8');
        return res.send({
            editUser
        });
    }else{
        return res.send({message:"Usuario no encontrado"});
    }
        
}

export function deleteUsuarios(req: Request,res: Response): Response{
    
    usuarios = usuarios.filter(user => user.id!=req.params.id);
    // usuarios.splice(usuarios.indexOf((usuario: { id: string; }) => usuario.id == req.params.id),1);
    json_users = JSON.stringify(usuarios);
    fs.writeFileSync('src/database.json', json_users, 'UTF-8');
    return res.send({
        message: "Usuario eliminado"
    })
}

