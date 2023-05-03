const { admin } = require('./firebase');

module.exports = async (req, res) => {
    // Opción 1 de sintaxis
    // const email      = req.body.email;
    // const contrasena = req.body.contrasena;

    //Opción 2 de sintaxis (destructuring)
    const {email, contrasena} = req.body;

    try {
        const usuario = await admin.auth().createUser({
            email: email,
            password: contrasena
        });
        console.dir(usuario);
    return usuario;
    }catch (error){
        res.code(500).send({error:'Ocurrió un error al crear el usuario'});
    }
};


