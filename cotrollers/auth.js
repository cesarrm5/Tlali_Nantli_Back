const { response } = require("express");

const crearUsuario = (req, res = response)=>{
    const {name, email,password} = req.body;
    res.json({
        ok:true,
        msg:'registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res = response)=>{
    const {name,password} = req.body;
    res.json({
        ok:true,
        msg:'login',
        name,
        password
    })
}

const revalidarUsuario = (req, res = response)=>{
    res.json({
        ok:true,
        msg:'revalidación'
    })
}

module.exports ={
    crearUsuario,
    loginUsuario,
    revalidarUsuario,
}