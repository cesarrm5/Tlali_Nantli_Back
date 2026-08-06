/*
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const {Router} = require('express');
const router = Router();
const {crearUsuario, loginUsuario, revalidarUsuario} = require('../cotrollers/auth'); 
const { check } = require('express-validator');
const { validadCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/new',
    [ //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
        validadCampos
    ],
    crearUsuario);

router.post(
    '/',
    [ //middlewares
        check('email','El email es obligatorio').isEmail(),
        check('password','El password es obligatorio').not().isEmpty(),
        validadCampos
    ],
    loginUsuario);

router.get('/renew', validarJWT, revalidarUsuario);

module.exports = router;