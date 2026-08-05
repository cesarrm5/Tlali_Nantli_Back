/*
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const {Router} = require('express');
const router = Router();
const {crearUsuario, loginUsuario, revalidarUsuario} = require('../cotrollers/auth'); 
const { check } = require('express-validator');
const { validadCampos } = require('../middlewares/validar-campos');

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
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
        validadCampos
    ],
    loginUsuario);

router.get(
    '/renew', 
    [ //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
        validadCampos 
    ],
    revalidarUsuario);

module.exports = router;