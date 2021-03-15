import { useEffect, useState } from 'react';
import {consulta} from './Consulta';

export const UseConsulta = () => {
    const [users, setUsers] = useState({
        data:[]
    });

    useEffect(()=>{
        consulta().then(user=>{
                setUsers({

                    data : user
                }); 
        });
    },[]);

    return users;
}