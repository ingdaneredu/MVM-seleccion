import {Router} from 'express';
import { getUsuarios, createUsuario, editUsuarios, deleteUsuarios, getUsuario } from '../controllers/usuario.controller';

const router = Router();

router.route('/')
    .get(getUsuarios)
    .post(createUsuario);

router.route('/:id')
    .get(getUsuario)
    .put(editUsuarios)
    .delete(deleteUsuarios);

export default router;