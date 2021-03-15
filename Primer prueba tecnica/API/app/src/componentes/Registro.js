import React, { useState } from 'react';
import { createUser, getUser } from './Consulta';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

export default function Registro(){

    const [formValues, setFormValues] = useState({
        nombre:'',
        apellido:'',
        email:'',
        telefono:''
    });

    const {id} = useParams();
    console.log(id);
    if(id)
    {
        console.log(id);
    }

    const {nombre,apellido,email,telefono} = formValues;

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        createUser(formValues).then(res=>{
            console.log(res.message);

            // const aviso = () => {
            //     return(
                    
            //     );
            // };
            document.location.replace('http://localhost:3001/Gest');
        });
    }

    const handleChangeInput = ({target})=>{
        
        setFormValues({
            ...formValues,
            [target.name] : target.value
        });
    }

    return(<>
    <div className = "container col-5 mt-5">
        <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label> 
        <input type="text" className="form-control" name="nombre" autoComplete="off" value={nombre} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido</label> 
        <input type="text" className="form-control" name="apellido" autoComplete="off"  value={apellido} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label> 
        <input type="string" className="form-control" name="email" autoComplete="off"  value={email} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
        <label htmlFor="telefono" className="form-label">Telefono</label> 
        <input type="string" className="form-control" name="telefono" autoComplete="off"  value={telefono} onChange={handleChangeInput}/>
        </div>
        
        <button className="btn btn-primary">Registrar</button>
    </form>
    </div>


    
    </>  );
}