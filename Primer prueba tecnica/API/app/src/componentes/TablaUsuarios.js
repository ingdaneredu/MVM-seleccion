
import { UseConsulta } from './useConsulta';
import {UsuarioItem} from './usuarioItem';

export default function Dashboard(){


     const {data:users} = UseConsulta();
    return(
        <form>
            <table className="table table-striped">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(usr=>
                            <UsuarioItem
                                key = {usr.id}
                                {...usr}

                            />
                        )
                }
            </tbody>
            </table>
        </form>
        
    );

}